import MyButton from "../../buttons/MyButton";

const FormSendMes = () => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-[#181114]  mb-6">
        Gửi tin nhắn cho chúng tôi
      </h2>
      <form
        action=""
        className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4"
      >
        <div>
          <label htmlFor="name" className="text-sm font-medium text-primary">
            Họ và tên
          </label>
          <input
            type="text"
            className="mt-1 w-full rounded-lg   px-3 py-2  focus:outline-highlight border border-gray-200 focus:ring-primary focus:border-primary"
            id="name"
            placeholder="Nhập họ tên của bạn"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-primary">
            Email
          </label>
          <input
            type="text"
            className="mt-1 w-full rounded-lg   px-3 py-2  focus:outline-highlight border border-gray-200 focus:ring-primary focus:border-primary"
            id="email"
            placeholder="Nhập email của bạn"
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="message" className="text-sm font-medium text-primary">
            Tin nhắn
          </label>
          <textarea
            name=""
            id="message"
            className="mt-1 form-textarea w-full  px-3 py-2  rounded-lg  focus:outline-highlight border border-gray-200  focus:ring-primary focus:border-primary"
            placeholder="Nội dung tin nhắn..."
          ></textarea>
        </div>
        <div className="md:col-span-2 flex justify-end">
          <MyButton className="flex min-w-21 max-w-120 cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-highlight text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity">
            <span>Gửi tin nhắn</span>
          </MyButton>
        </div>
      </form>
    </div>
  );
};

export default FormSendMes;
