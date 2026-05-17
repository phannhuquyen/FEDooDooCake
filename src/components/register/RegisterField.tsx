import { useState } from "react";
import MyButton from "../buttons/MyButton";
import {
  IconEmail,
  IconInfo,
  IconLogIn,
  IconPassWord,
  IconPhone,
  IconProfile,
} from "../../utils/icons";
import { userApi } from "../../api/userApi";
import AlertModal from "../common/AleartModal";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../common/LoadingSpinner";

const RegisterField = () => {
  const [loading, setLoading] = useState(false);
  const [registerFail, setRegisterFail] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState("");
  const [account, setAccount] = useState({
    username: "",
    password: "",
    name: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setAccount({ ...account, [e.target.id]: e.target.value });
  }

  async function handleRegister() {
    try {
      // check rỗng
      const hasEmptyField = Object.values(account).some(
        (value) => !value.trim(),
      );
      if (hasEmptyField) {
        setRegisterFail("Điền đầy đủ thông tin");
        return;
      }

      setLoading(true);
      await userApi.create(account);
      // console.log(res.data);
      setRegisterSuccess("Đăng ký thành công");
    } catch (error) {
      setRegisterFail(
        (error as any)?.response?.data?.message ||
          "Vui lòng điền đầy đủ thông tin",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {loading && <LoadingSpinner fullScreen={true} />}
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          handleRegister();
        }}
        className="space-y-6"
      >
        {fields.map((field) => (
          <div className="space-y-1.5" key={field.id}>
            <label
              htmlFor={field.id}
              className="text-xs font-bold uppercase tracking-wider    ml-1"
            >
              {field.label}
            </label>
            <div className="relative bg-gray-100 rounded-lg">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 ">
                {field.icon}
              </span>
              <input
                type="text"
                id={field.id}
                placeholder={field.placeholder}
                onChange={handleOnChange}
                className="w-full pl-12 pr-4 py-3.5 focus:ring-1 focus:outline-highlight focus:ring-highlight rounded-lg transition-all placeholder:text-olive-300"
              />
            </div>
          </div>
        ))}

        <div>
          <MyButton
            type="submit"
            className="w-full bg-highlight text-white font-bold py-4 mb-2 rounded-lg shadow-sm hover:brightness-110 active:scale-[0.98] transition-all flex justify-center items-center gap-2"
          >
            <span>Đăng ký</span>
            <span className="text-xl">
              <IconLogIn />
            </span>
          </MyButton>
          <p
            onClick={() => {
              navigate(-1);
            }}
            className="text-center text-sm text-highlight cursor-pointer font-bold hover:underline transition-all underline-offset-4"
          >
            Đã có tài khoản
          </p>
        </div>
        <AlertModal
          open={registerFail ? true : false}
          message={registerFail}
          type="error"
          title="Không thể đăng ký"
          onClose={() => {
            setRegisterFail("");
          }}
        />
        <AlertModal
          open={registerSuccess ? true : false}
          message="Mời bạn đăng nhập tài khoản"
          type="success"
          title={registerSuccess}
          onClose={() => {
            setRegisterSuccess("");
            navigate("/login");
          }}
        />
      </form>
    </>
  );
};

export default RegisterField;

//
//
//
const fields = [
  {
    id: "name",
    label: "Họ và tên",
    placeholder: "Nguyễn Văn A",
    icon: <IconProfile />,
  },
  {
    id: "phone",
    label: "Số điện thoại",
    placeholder: "0123456789",
    icon: <IconPhone />,
  },
  {
    id: "email",
    label: "Email",
    placeholder: "nguyenvana@example.com",
    icon: <IconEmail />,
  },
  {
    id: "username",
    label: "Tên đăng nhập",
    placeholder: "nguyenvana",
    icon: <IconInfo />,
  },
  {
    id: "password",
    label: "Mật khẩu",
    placeholder: "Nhập mật khẩu",
    icon: <IconPassWord />,
  },
];
