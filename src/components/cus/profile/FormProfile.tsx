import React from "react";
import { Link } from "react-router-dom";
import MyButton from "../../buttons/MyButton";

type Profile = {
  name: string;
  phone: string;
  email: string;
  address: string;
};

type Props = {
  profile: Profile;

  setProfile: React.Dispatch<React.SetStateAction<Profile>>;

  onsubmit: () => void;
};

const FormProfile = ({ profile, setProfile, onsubmit }: Props) => {
  function handleOnChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setProfile({ ...profile, [e.target.id]: e.target.value });
  }
  return (
    <form
      action=""
      onSubmit={(e) => {
        e.preventDefault();
        onsubmit();
      }}
      className="w-full md:w-2/3 space-y-6"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-gray-700 ">
            Họ và tên
          </label>
          <input
            type="text"
            id="name"
            value={profile.name}
            onChange={handleOnChange}
            className="mt-1 w-full rounded-lg   px-3 py-2 shadow-sm focus:outline-highlight border border-gray-200 focus:ring-primary focus:border-primary"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-gray-700 ">
            Số điện thoại
          </label>
          <input
            type="text"
            id="phone"
            value={profile.phone}
            onChange={handleOnChange}
            className="mt-1 w-full rounded-lg   px-3 py-2 shadow-sm focus:outline-highlight border border-gray-200 focus:ring-primary focus:border-primary"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-medium text-gray-700 ">
          Email
        </label>
        <input
          type="text"
          id="email"
          value={profile.email}
          onChange={handleOnChange}
          className="mt-1 w-full rounded-lg   px-3 py-2 shadow-sm focus:outline-highlight border border-gray-200 focus:ring-primary focus:border-primary"
        />
      </div>
      <div>
        <label htmlFor="address" className="text-sm font-medium text-gray-700 ">
          Địa chỉ
        </label>
        <textarea
          id="address"
          value={profile.address}
          onChange={handleOnChange}
          className="mt-1 w-full rounded-lg   px-3 py-2 shadow-sm focus:outline-highlight border border-gray-200 focus:ring-primary focus:border-primary"
        ></textarea>

        {/* dưới form */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-gray-200 ">
          <Link
            to={"/change-password"}
            className="text-sm font-semibold text-highlight hover:underline"
          >
            Đổi mật khẩu
          </Link>
          <MyButton
            type="submit"
            className="w-full sm:w-auto bg-highlight text-white font-bold py-2.5 px-6 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            <span>Lưu thay đổi</span>
          </MyButton>
        </div>
      </div>
    </form>
  );
};

export default FormProfile;
