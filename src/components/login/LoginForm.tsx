import LoginField from "./LoginField";
import LoginFooter from "./LoginFooter";
import LoginHeader from "./LoginHeader";
import RegisterLink from "./RegisterLink";

const LoginForm = () => {
  return (
    <div className="w-full lg:w-2/5 bg-surface flex flex-col items-center justify-center p-8 md:p-12 lg:p-20 relative">
      {/* mobile */}
      <div className="absolute top-8 left-8 lg:hidden">
        <span className="text-xl font-black tracking-tight text-highlight">
          Tiệm bánh DooDooCake
        </span>
      </div>
      {/*  */}
      <div className="w-full max-w-sm space-y-10">
        <LoginHeader />
        <LoginField />
        <RegisterLink />
      </div>
        <LoginFooter />
    </div>
  );
};

export default LoginForm;
