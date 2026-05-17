import { useNavigate } from "react-router-dom";

const LoginFooter = () => {
  const navigate = useNavigate();
  return (
    <div className="absolute bottom-8 lg:text-left">
      <p className="text-xs w-fit   ">
        @2026 Tiệm bánh{" "}
        <span
          className="text-highlight cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          DooDooCake
        </span>
        . All rights reserved.
      </p>
    </div>
  );
};

export default LoginFooter;
