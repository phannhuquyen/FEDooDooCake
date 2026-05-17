import BannerLogin from "../components/login/BannerLogin";
import LoginForm from "../components/login/LoginForm";

const LoginPage = () => {
  return (
    <div className="bg-background text-on-surface min-h-screen flex flex-col">
      <main className="grow flex items-stretch min-h-screen overflow-hidden">
        <BannerLogin />
        <LoginForm />
      </main>
    </div>
  );
};

export default LoginPage;
