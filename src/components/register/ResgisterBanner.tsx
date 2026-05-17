const ResgisterBanner = () => {
  return (
    <div className="hidden md:flex md:col-span-5 relative overflow-hidden bg-surface-variant">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAB_g7rtrdFnGeHkv8y_xSjfd2iare-vMCHvzRsqPutX61NhSWwN8w2ceLSJGxNbHQsBy7cJOv9GLytbi6Bj7kQNm_jL28gPmGpritc16Crf2ahhwZkuJEfgLY1SLujT7mEAmKO7RNS8M4IdZ5Q2wnn8OWt-MU5VayyX9rKa_mh57vWpET5OeFVwdynFNSxWs_bRSByoTSWtr_ShBWLmZIK961HKYLsgjD3zy9IxexYhTku84hYS2oOJONQtKd7dMbGXuXHUFBQT-4"
        alt=""
      />
      <div className="absolute inset-0 bg-linear-to-t from-on-surface/60 to-transparent flex flex-col justify-end p-10">
        <h2 className="text-white text-3xl font-black tracking-tight leading-tight mb-4">
          Gia nhập thế giới ngọt ngào của chúng tôi.
        </h2>
        <p className="text-white/90 text-lg">
          Đăng ký để nhận những ưu đãi độc quyền và cập nhật mới nhất từ
          DooDooCake.
        </p>
      </div>
    </div>
  );
};

export default ResgisterBanner;
