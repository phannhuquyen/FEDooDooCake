import {
  IconAddress,
  IconDooDooCake,
  IconEmail,
  IconFB,
  IconInstagram,
  IconPhone,
} from "../../../utils/icons";

const Footer = () => {
  const linkList = [
    { name: "Trang chủ", path: "/" },
    { name: "Sản phẩm", path: "/" },
    { name: "Chính sách giao hàng", path: "/" },
    { name: "Điều khoản dịch vụ", path: "/" },
    { name: "Câu hỏi thường gặp", path: "/" },
  ];
  const contactList = [
    { type: "Địa chỉ", value: "HAUI cs1", icon: <IconAddress /> },
    { type: "Email", value: "info@doodoocake.com", icon: <IconEmail /> },
    { type: "Điện thoại", value: "(028) 1234 5678", icon: <IconPhone /> },
  ];

  return (
    <div className="sticky top-0 z-0 w-full backdrop-blur-sm mt-12 bg-[#221018]">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-highlight">
              <span className="text-4xl text-highlight">
                <IconDooDooCake />
              </span>
              <h2 className="text-white text-lg font-bold">DooDooCake</h2>
            </div>
            <p className="text-gray-400 text-sm">
              Mang đến niềm vui và sự ngọt ngào cho mọi khoảnh khắc.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-white">Liên kết nhanh</h3>
            <ul className="space-y-2">
              {linkList.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    className="text-gray-400 hover:text-highlight text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-white">Liên hệ</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {contactList.map((contact, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-lg">{contact.icon}</span>
                  <span>{contact.value}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-white">Theo dõi chúng tôi</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-highlight text-2xl"
              >
                <IconFB />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-highlight text-2xl"
              >
                <IconInstagram />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
