import { useState } from "react";
import MyButton from "../buttons/MyButton";
import { IconLogIn, IconPassWord, IconProfile } from "../../utils/icons";
import { loginApi } from "../../api/loginUserApi";
import AlertModal from "../common/AleartModal";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../common/LoadingSpinner";

const LoginField = () => {
  const [loading, setLoading] = useState(false);
  const [loginFail, setLoginFail] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [account, setAccount] = useState({
    username: "",
    password: "",
  });
  const navigation = useNavigate();

  const role = localStorage.getItem("role");

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setAccount({ ...account, [e.target.id]: e.target.value });
  }

  async function handleLogin() {
    try {
      setLoading(true);
      const res = await loginApi.login(account);
      localStorage.setItem("userId", res.data.user.id);
      localStorage.setItem("username", res.data.user.username);
      localStorage.setItem("role", res.data.user.role);
      // console.log(res.data);
      setLoginSuccess(true);
    } catch (error) {
      setLoginFail(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="space-y-6">
      <div className="space-y-4">
        {/* username field */}
        <div className="space-y-2">
          <label
            htmlFor="username"
            className="text-[0.75rem] font-medium    tracking-wider uppercase"
          >
            Tên đăng nhập
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-outline group-focus-within:text-highlight transition-colors">
              <span className="  text-xl">
                <IconProfile />
              </span>
            </div>
            <input
              type="text"
              id="username"
              autoComplete="username"
              value={account.username}
              onChange={handleOnChange}
              placeholder="Nhập tên đăng nhâp"
              className="w-full pl-12 pr-4 py-3.5 bg-surface-container-lowest border border-outline-variant rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-highlight/20 focus:border-hidden transition-all duration-200"
            />
          </div>
        </div>

        {/* password field */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label
              htmlFor="password"
              className="text-[0.75rem] font-medium    tracking-wider uppercase"
            >
              Mật khẩu
            </label>
            <MyButton className="text-[0.75rem] font-bold text-highlight hover:underline transition-all">
              Quên mật khẩu
            </MyButton>
          </div>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-outline group-focus-within:text-highlight transition-colors">
              <span className="  text-xl">
                <IconPassWord />
              </span>
            </div>
            <input
              type="password"
              id="password"
              autoComplete="current-password"
              placeholder="Nhập mật khẩu"
              value={account.password}
              onChange={handleOnChange}
              className="w-full pl-12 pr-4 py-3.5 bg-surface-container-lowest border border-outline-variant rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-highlight/20 focus:border-hidden transition-all duration-200"
            />
          </div>
        </div>
      </div>
      {/* btn */}
      <MyButton
        onClick={handleLogin}
        className="w-full bg-highlight text-white font-bold py-4 rounded-lg shadow-sm hover:shadow-md active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 group"
      >
        <span>Đăng nhập</span>
        <span className=" text-white text-xl group-hover:translate-x-1 transition-transform">
          <IconLogIn />
        </span>
      </MyButton>

      <AlertModal
        open={loginFail}
        type={"error"}
        title={"Không thành công!"}
        message={"Tên đăng nhập hoặc mật khẩu không chính xác"}
        onClose={() => setLoginFail(false)}
      />
      <AlertModal
        open={loginSuccess}
        type={"success"}
        title={"Đăng nhập thành công!"}
        message={"Chào mừng bạn quay trở lại"}
        onClose={() => {
          setLoginFail(false);
          navigation(role == "admin" ? "/admin" : "/");
        }}
      />

      {loading&&<LoadingSpinner fullScreen/>}
    </form>
  );
};

export default LoginField;
