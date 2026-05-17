import { useState } from "react";
import { userApi } from "../../api/userApi";
import MyButton from "../buttons/MyButton";
import AlertModal from "../common/AleartModal";
import { useNavigate } from "react-router-dom";

const ChangePasswordForm = () => {
  const [oldPassword, setOldPassword] = useState("");

  const [newPassword, setNewPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [alertOpen, setAlertOpen] = useState(false);

  const [alertMessage, setAlertMessage] = useState("");

  const navigate = useNavigate();

  const handleChangePassword = async () => {
    try {
      if (!oldPassword || !newPassword || !confirmPassword) {
        setAlertMessage("Vui lòng nhập đầy đủ thông tin");

        setAlertOpen(true);

        return;
      }

    //   if (newPassword.length < 6) {
    //     setAlertMessage("Mật khẩu mới tối thiểu 6 ký tự");

    //     setAlertOpen(true);

    //     return;
    //   }

      if (newPassword !== confirmPassword) {
        setAlertMessage("Xác nhận mật khẩu không khớp");

        setAlertOpen(true);

        return;
      }

      setLoading(true);

      const userId = localStorage.getItem("userId");

      await userApi.changePassword(userId as string, {
        oldPassword,
        newPassword,
      });

      setAlertMessage("Đổi mật khẩu thành công");

      setAlertOpen(true);

      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error: any) {
      setAlertMessage(
        error?.response?.data?.message || "Không thể đổi mật khẩu",
      );

      setAlertOpen(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-white rounded-2xl p-6 shadow-sm space-y-5">
        <h2 className="text-2xl font-bold text-gray-800">Đổi mật khẩu</h2>

        {/* old */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Mật khẩu cũ
          </label>

          <input
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            className="
              mt-2 w-full rounded-xl border
              border-gray-300 px-4 py-3
              focus:border-highlight
              outline-none
            "
          />
        </div>

        {/* new */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Mật khẩu mới
          </label>

          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="
              mt-2 w-full rounded-xl border
              border-gray-300 px-4 py-3
              focus:border-highlight
              outline-none
            "
          />
        </div>

        {/* confirm */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Xác nhận mật khẩu
          </label>

          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="
              mt-2 w-full rounded-xl border
              border-gray-300 px-4 py-3
              focus:border-highlight
              outline-none
            "
          />
        </div>

        <MyButton
          onClick={handleChangePassword}
          disabled={loading}
          className="
            w-full bg-highlight text-white
            py-3 rounded-xl font-bold
          "
        >
          {loading ? "Đang cập nhật..." : "Đổi mật khẩu"}
        </MyButton>
      </div>

      <AlertModal
        open={alertOpen}
        message={alertMessage}
        onClose={() => {
          setAlertOpen(false);

          if (alertMessage === "Đổi mật khẩu thành công") {
            navigate(-1);
          }
        }}
      />
    </>
  );
};

export default ChangePasswordForm;
