import MyButton from "../../buttons/MyButton";

const AboutSection = () => {
  return (
    <div className="bg-white  py-16 rounded-xl">
      <div className="mx-auto px-4 sm:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div
            className="w-full bg-center bg-no-repeat aspect-square md:aspect-4/3 bg-cover rounded-xl"
            style={{
              backgroundImage: `url(https://lh3.googleusercontent.com/aida-public/AB6AXuCWoTRB2DFezeCPJTi9g8ZLxjBNDGvmetizVJ7dMvyOsLEBJa7atCyPfWD6bW_i5fCJI8V5tMk-ZuhBAyCECnj_KyeCr8hfXEf49ed3DiVjzeDuc-eP_1DL84QVAPvQUex7a6rfkUqaPNIRi9Dpy8NrTvvySfkwm0N2FmXRnlg5pMPvvwzD2z1mjm2qzLUB9Ghof4F5puyw4Ymn-5_N8NUpid4CJd3uC8Q0KMZM7hCd5W2j-mnSDxzDMwGnKinXA9gd2QssvPfzuOQ)`,
            }}
          ></div>
          <div className="flex flex-col gap-4">
            <h2 className="text-[#181114]  text-3xl font-bold leading-tight tracking-[-0.015em]">
              Câu chuyện của chúng tôi
            </h2>
            <p className="text-primary leading-relaxed">
              Tại Tiệm Bánh Ngọt, chúng tôi tin rằng mỗi chiếc bánh không chỉ là
              một món tráng miệng, mà còn là một tác phẩm nghệ thuật chứa đựng
              tâm huyết và đam mê. Bắt đầu từ một căn bếp nhỏ, chúng tôi đã
              không ngừng nỗ lực để mang đến những hương vị ngọt ngào, độc đáo
              từ những nguyên liệu tươi ngon và chất lượng nhất.
            </p>
            <p className="text-primary leading-relaxed">
              {" "}
              Sứ mệnh của chúng tôi là tạo ra những khoảnh khắc hạnh phúc và
              đáng nhớ cho bạn và những người thân yêu. Mỗi công thức đều được
              nghiên cứu kỹ lưỡng, mỗi chiếc bánh đều được làm thủ công với sự
              tỉ mỉ và cẩn trọng. Chúng tôi tự hào về việc sử dụng các nguyên
              liệu địa phương và theo mùa để đảm bảo độ tươi ngon và ủng hộ cộng
              đồng.
            </p>
            <MyButton to="/about" className="flex mt-4 max-w-max cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-highlight text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity">Tìm hiểu thêm</MyButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
