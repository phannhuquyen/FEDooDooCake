import { IconAddress, IconEmail, IconPhone } from "../../../utils/icons";

const listContact = [
  { name: "Địa chỉ", value: "HAUI cơ sở 1", icon: <IconAddress /> },
  { name: "Điện thoại", value: "02222222222", icon: <IconPhone /> },
  { name: "Email", value: "nhom2@gmail.com", icon: <IconEmail /> },
];

const InfContact = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#181114] mb-4">
        Thông tin liên lạc
      </h2>
      <div className="space-y-4">
        {listContact.map((item) => (
          <div className="flex items-start gap-4 p-4 bg-white rounded-xl">
            <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 text-highlight flex items-center justify-center">
              <span className="  text-2xl">{item.icon}</span>
            </div>
            <div>
              <h3 className="font-semibold text-[#181114]">{item.name}</h3>
              <p className="text-[#896172] ">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfContact;
