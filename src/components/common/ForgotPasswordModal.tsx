import { createPortal } from "react-dom";
import { useState } from "react";

import {
  IconEmail,
  IconInfo,
  IconPassWord,
  IconProfile,
} from "../../utils/icons";

import MyButton from "../buttons/MyButton";

import { validateEmail } from "../../utils/validators";

import { userApi } from "../../api/userApi";

type ForgotPasswordModalProps = {
  open: boolean;

  onClose: () => void;
};

const ForgotPasswordModal = ({ open, onClose }: ForgotPasswordModalProps) => {
  const [step, setStep] = useState(1);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [success, setSuccess] = useState("");

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    otp: "",
    newPassword: "",
  });

  if (!open) return null;

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });

    if (error) {
      setError("");
    }
  }

  async function handleSendOtp() {
    try {
      if (!formData.username.trim() || !formData.email.trim()) {
        setError("Vui lÃ²ng nháº­p Ä‘áº§y Ä‘á»§ thÃ´ng tin");
        return;
      }

      const emailError = validateEmail(formData.email);

      if (emailError) {
        setError(emailError);
        return;
      }

      setLoading(true);

      await userApi.sendResetOtp({
        username: formData.username,
        email: formData.email,
      });

      setStep(2);

      setSuccess("ÄÃ£ gá»­i mÃ£ OTP tá»›i email");
    } catch (error: any) {
      setError(error?.response?.data?.message || "KhÃ´ng thá»ƒ gá»­i mÃ£ OTP");
    } finally {
      setLoading(false);
    }
  }

  async function handleResetPassword() {
    try {
      if (!formData.otp.trim() || !formData.newPassword.trim()) {
        setError("Vui lÃ²ng nháº­p Ä‘áº§y Ä‘á»§ thÃ´ng tin");
        return;
      }

      setLoading(true);

      await userApi.resetPassword({
        username: formData.username,
        email: formData.email,
        otp: formData.otp,
        newPassword: formData.newPassword,
      });

      setSuccess("Äá»•i máº­t kháº©u thÃ nh cÃ´ng");

      setTimeout(() => {
        handleClose();
      }, 1200);
    } catch (error: any) {
      setError(error?.response?.data?.message || "Äá»•i máº­t kháº©u tháº¥t báº¡i");
    } finally {
      setLoading(false);
    }
  }

  function handleClose() {
    setStep(1);

    setError("");

    setSuccess("");

    setFormData({
      username: "",
      email: "",
      otp: "",
      newPassword: "",
    });

    onClose();
  }

  return createPortal(
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
        {/* header */}
        <div className="bg-highlight/10 border-b border-highlight/20 p-5 flex items-center gap-3">
          <span className="text-3xl text-highlight">
            <IconInfo />
          </span>

          <div>
            <h2 className="text-lg font-bold text-highlight">QuÃªn máº­t kháº©u</h2>

            <p className="text-sm text-gray-500">
              {step === 1
                ? "XÃ¡c minh tÃ i khoáº£n Ä‘á»ƒ nháº­n mÃ£ OTP"
                : "Nháº­p mÃ£ OTP vÃ  máº­t kháº©u má»›i"}
            </p>
          </div>
        </div>

        {/* body */}
        <div className="p-5 space-y-4">
          {/* step 1 */}
          {step === 1 && (
            <>
              {/* username */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  TÃªn Ä‘Äƒng nháº­p
                </label>

                <div className="relative mt-1">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <IconProfile />
                  </span>

                  <input
                    type="text"
                    id="username"
                    value={formData.username}
                    onChange={handleOnChange}
                    placeholder="Nháº­p tÃªn Ä‘Äƒng nháº­p"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-highlight"
                  />
                </div>
              </div>

              {/* email */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Email Ä‘Äƒng kÃ½
                </label>

                <div className="relative mt-1">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <IconEmail />
                  </span>

                  <input
                    type="text"
                    id="email"
                    value={formData.email}
                    onChange={handleOnChange}
                    placeholder="example@gmail.com"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-highlight"
                  />
                </div>
              </div>

              <MyButton
                type="button"
                onClick={handleSendOtp}
                disabled={loading}
                className="w-full py-3 rounded-lg bg-highlight text-white font-bold hover:opacity-90 transition-all"
              >
                {loading ? "Äang gá»­i..." : "Gá»­i mÃ£ OTP"}
              </MyButton>
            </>
          )}

          {/* step 2 */}
          {step === 2 && (
            <>
              {/* otp */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  MÃ£ OTP
                </label>

                <div className="relative mt-1">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <IconInfo />
                  </span>

                  <input
                    type="text"
                    id="otp"
                    value={formData.otp}
                    onChange={handleOnChange}
                    placeholder="Nháº­p mÃ£ OTP"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-highlight"
                  />
                </div>
              </div>

              {/* new password */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Máº­t kháº©u má»›i
                </label>

                <div className="relative mt-1">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <IconPassWord />
                  </span>

                  <input
                    type="password"
                    id="newPassword"
                    value={formData.newPassword}
                    onChange={handleOnChange}
                    placeholder="Nháº­p máº­t kháº©u má»›i"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-highlight"
                  />
                </div>
              </div>

              <MyButton
                type="button"
                onClick={handleResetPassword}
                disabled={loading}
                className="w-full py-3 rounded-lg bg-highlight text-white font-bold hover:opacity-90 transition-all"
              >
                {loading ? "Äang xá»­ lÃ½..." : "Äá»•i máº­t kháº©u"}
              </MyButton>
            </>
          )}

          {/* error */}
          {error && (
            <div className="rounded-lg bg-error-bg border border-error-border p-3">
              <p className="text-sm text-error-text font-medium">{error}</p>
            </div>
          )}

          {/* success */}
          {success && (
            <div className="rounded-lg bg-success-bg border border-success-border p-3">
              <p className="text-sm text-success-text font-medium">{success}</p>
            </div>
          )}

          {/* footer */}
          <div className="flex justify-end pt-2">
            <button
              onClick={handleClose}
              className="px-5 py-2 rounded-lg border border-gray-200 hover:bg-gray-100 transition-all"
            >
              ÄÃ³ng
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default ForgotPasswordModal;

