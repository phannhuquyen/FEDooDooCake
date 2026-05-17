import { Link } from "react-router-dom";

const RegisterLink = () => {
  return (
    <p className="text-center    text-sm">
      Bạn chưa có tài khoản?{" "}
      <Link
        to="/register"
        className="text-highlight font-bold hover:underline transition-all underline-offset-4"
      >
        Đăng ký ngay
      </Link>
    </p>
  );
};

export default RegisterLink;
