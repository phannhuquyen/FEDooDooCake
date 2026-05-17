import { IconAddPhoto } from "../../utils/icons";
import { useEffect, useState } from "react";
import { userApi } from "../../api/userApi";
import FormProfile from "../../components/cus/profile/FormProfile";

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userId = localStorage.getItem("userId");

        if (!userId) return;

        const res = await userApi.getById(userId);

        setProfile(res.data);
        setFormData(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  }, []);

  async function handleSubmit() {
    try {
      const userId = localStorage.getItem("userId");

      if (!userId) return;

      const res = await userApi.update(userId, formData);

      // update UI thật
      setProfile(res.data);

      // sync lại form
      setFormData(res.data);

      alert("Cập nhật thành công");
    } catch (error: any) {
      console.error(error?.response?.data?.message);
      alert("Thấy bại");
    }
  }
  return (
    <div className="max-w-4xl mx-auto md:py-8">
      {/* title */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-black tracking-[-0.033em] text-gray-800">
          Thông tin tài khoản
        </h1>
        <p className="mt-2 text-gray-500 ">
          Quản lý thông tin cá nhân của bạn để bảo mật tài khoản
        </p>
      </div>

      {/* thân */}
      <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm">
        <div className="flex flex-col md:flex-row gap-8">
          {/* avata */}
          <div className="shrink-0 flex flex-col items-center md:items-start md:w-1/3">
            <div className="relative">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-32"
                data-alt="User profile picture"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBBe6etGdRxbClDa57h2rFIdeUiUYv2keZQajKvWx1NfcqvVp09fu_QEWiVrZUmgAU1ZryeWkX86botRNoA2Nk_dr-ggkgh6Ze4MKiBvO70Aia6ojHcDqryCxvROlpxJbsGCp28fUz44b-OzFTpCx4REHzmsthH3XlG-_u7Sxerta9gNXud8xjIZ6fTinhSYqvRvlo5pp5zXQuKCYlYsG8C7feYb5IZFONTVnpzXAzpPlcAz1HnFrIbLABleLeTxpW4UxQ0PbLOwiw")',
                }}
              ></div>
              <button className="absolute bottom-1 right-1 flex items-center justify-center h-9 w-9 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">
                <span className="  text-lg text-gray-700 ">
                  <IconAddPhoto />
                </span>
              </button>
            </div>
            <h2 className="text-xl font-bold mt-4 text-gray-800 ">
              {profile?.name}
            </h2>
            <p className="text-sm text-gray-500 ">{profile?.email}</p>
          </div>

          {/* phải */}
          <FormProfile
            profile={formData}
            setProfile={setFormData}
            onsubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
