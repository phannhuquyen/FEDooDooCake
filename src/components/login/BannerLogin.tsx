import BrandOverlay from "./BrandOverlay";

const BannerLogin = () => {
  return (
    <div className="hidden lg:block lg:w-3/5 relative">
      <div className="absolute inset-0 bg-linear-to-r from-transparent to-surface/20 z-10"></div>
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOjhcIhuWhganz8x4rriNJJBB2crRkvXBGrqAHcFtKLkJWp2kebinzWBVKx4zptq8sedKei6bqNzLuiWvU3iaSBusOTXDxQzRI0_uXSzcflMmu8NkN6fNuHoZ5fds0xidlHcTZjtbPqV307vqgSuc1-_mSAUda4jGyvJiK0OlnaekluQ8M5nYUNNlHagGtE8NssdYLjMCskbO1VfwtPWruM1L_VMHfEJL5aEGatDpAmmP_bnnVRaVzEa22bReWzXUxwICLByXpYNU"
        alt=""
      />
      <BrandOverlay />
    </div>
  );
};

export default BannerLogin;
