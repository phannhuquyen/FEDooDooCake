import { useNavigate } from "react-router-dom";
import { IconBack } from "../../../utils/icons";
import MyButton from "../../buttons/MyButton";

const OrderDetailHeader = ({ id }: { id: string }) => {
  const navigation = useNavigate();
  return (
    <div className="flex flex-col gap-3 mb-8">
      <MyButton
        onClick={() => navigation(-1)}
        className="flex mt-4 gap-2 w-fit items-center justify-center rounded-lg text-gray-600  hover:text-highlight transition-colors"
      >
        <span>
          <IconBack />
        </span>
        Quay lại
      </MyButton>
      <div>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-800 ">
          Chi tiết đơn hàng
        </h1>
        <p className="text-gray-500">Mã đơn hàng: {id}</p>
      </div>
    </div>
  );
};

export default OrderDetailHeader;
