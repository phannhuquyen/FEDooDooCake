const Section2 = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-12 md:mb-16">
      <div>
        <h3 className="text-3xl font-bold text-[#181114] mb-4">
          Sứ mệnh của chúng tôi
        </h3>
        <p className="text-primary  leading-relaxed mb-4">
          Sứ mệnh của chúng tôi là tạo ra những khoảnh khắc hạnh phúc và đáng
          nhớ cho bạn và những người thân yêu thông qua những chiếc bánh thơm
          ngon, chất lượng. Chúng tôi không ngừng nỗ lực để mang đến những hương
          vị ngọt ngào, độc đáo từ những nguyên liệu tươi ngon và được lựa chọn
          kỹ càng nhất.
        </p>
        <p className="text-primary leading-relaxed">
          Mỗi sản phẩm đều là kết tinh của sự sáng tạo, niềm đam mê và sự tỉ mỉ
          của đội ngũ thợ làm bánh tài hoa.
        </p>
      </div>
      <div
        className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
        data-alt="A close-up shot of a baker carefully decorating a cake with intricate details."
        style={{
          backgroundImage:
            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBgOuiAej5SENKNsaNHsfauwPy3BVzyRQMqjDq-pkAXugWxivQStSpxGm4DGS8DVUEbjg_RrweWPMuTkUJnPeL36Dtl1Ju4FFbg_SteIGFrWRKZz0C0nPAQcJkxlIeHGwkNmwl7C89k0RHsmX_ftVs_g0nkf8VQmQQZF3CXCFdTXTYOKBHyBF46wN8ddw0-vBEX5JRer0Sy7H-0AhXcTiTRit7HC1QDhHJNy60el62ng5PSnHreDoCmgR_jRe_zNGBpAXMUhh46zPo")',
        }}
      ></div>
    </div>
  );
};

export default Section2;
