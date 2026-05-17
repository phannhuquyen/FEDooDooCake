import RegisterField from "./RegisterField";
import RegisterHeader from "./RegisterHeader";

const RegisterForm = () => {
  return (
    <div className="md:col-span-7 p-8 lg:p-16 flex flex-col justify-center">
      <RegisterHeader />
      <RegisterField />
    </div>
  );
};

export default RegisterForm;
