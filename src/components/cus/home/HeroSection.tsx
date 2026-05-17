import MyButton from "../../buttons/MyButton";

const HeroSection = () => {
  return (
    <div className="@container mb-8">
      <div
        className="flex min-h-120 flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4 text-center"
        data-alt="A beautifully decorated cake on a wooden table, with soft lighting"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuB49gvNOvZUKmNCTy1GwlfZ4P2KX-sT6XmR9AsxFkIOcF2SGqTjfiStyXLdEp7KGM9DlIb0cxjKM6dGeXp0n_tUfiMGafBHvolmD7EN9XqJncYwMvRE1E8kt-oloMcuSyPYRjCxc1rluhwCV31vhGrboW8IQxPQ7qZrZ8m4YmlpxHuqcc7FkKz6vnpM7cLF-JHw1fIewNKKxsr_Pz9bE_oLsAx6zGwoiNCIdMFRfyGNXtPNS37nZ1FK7Wi62o58ahSZEJZHz848G7A")',
        }}
      >
        <div className="flex flex-col gap-3 justify-center items-center">
          <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">
            Vị ngọt cho mọi khoảnh khắc
          </h1>
          <p className="text-white text-base font-normal leading-normal max-w-xl mx-auto @[480px]:text-lg">
            Khám phá những chiếc bánh được làm từ nguyên liệu tươi ngon nhất và
            tình yêu của những người thợ làm bánh.
          </p>
          <MyButton className="flex min-w-21 max-w-120px cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-highlight text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity"
            to="/products">
            Xem Menu Mới Nhất
          </MyButton>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
