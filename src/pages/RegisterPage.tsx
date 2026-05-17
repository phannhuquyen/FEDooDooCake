import RegisterFooter from "../components/register/RegisterFooter";
import RegisterForm from "../components/register/RegisterForm";
import ResgisterBanner from "../components/register/ResgisterBanner";

const RegisterPage = () => {
  return (
    <div className="bg-background text-on-surface min-h-screen flex flex-col">
      <main className="grow flex items-center justify-center p-6 lg:p-12">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-12 bg-surface rounded-xl shadow-sm overflow-hidden min-h-175">
          <ResgisterBanner />
          <RegisterForm />
        </div>
      </main>
      <RegisterFooter />
    </div>
  );
};

export default RegisterPage;
