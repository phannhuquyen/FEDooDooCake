import { IconFavourite, IconFeatured, IconQuality } from "../../../utils/icons";

const list = [
  {
    icon: <IconFavourite />,
    title: "Đam mê",
    text: "Chúng tôi làm bánh bằng cả trái tim và niềm đam mê, mang đến những sản phẩm hoàn hảo nhất.",
  },
  {
    icon: <IconQuality />,
    title: "Chất lượng",
    text: "Luôn sử dụng nguyên liệu tươi ngon, an toàn và có nguồn gốc rõ ràng.",
  },
  {
    icon: <IconFeatured />,
    title: "Sáng tạo",
    text: "Không ngừng đổi mới để tạo ra những hương vị độc đáo và trải nghiệm mới mẻ.",
  },
];

const Section3 = () => {
  return (
    <div className="bg-highlight/5 rounded-2xl p-8 md:p-12 mb-12 md:mb-16">
      <h3 className="text-3xl font-bold text-[#181114]  text-center mb-8">
        Giá trị cốt lõi
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {list.map((item) => (
          <div className="text-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-highlight text-white mx-auto mb-4">
              <span className="  text-3xl">{item.icon}</span>
            </div>
            <h4 className="text-xl font-bold text-[#181114]  mb-2">
              {item.title}
            </h4>
            <p className="text-primary">{item.text} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section3;
