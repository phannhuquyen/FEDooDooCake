import { IconAddress, IconShip } from "../../../utils/icons";

const ShippingCard = ({ customerAddress }: { customerAddress: string }) => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
      <h2 className="text-lg font-bold text-[#181114] mb-4 flex items-center gap-2">
        <span className="  text-highlight text-3xl">
          <IconShip />
        </span>
        Giao hàng
      </h2>
      <div>
        <div className="flex items-center gap-3 text-gray-600 mb-3">
          <span className="  text-[18px]">
            <IconAddress />
          </span>
          Địa chỉ nhận hàng{" "}
        </div>
        <p className="text-sm text-[#181114] font-medium leading-relaxed">
          {customerAddress}
        </p>
      </div>
    </div>
  );
};

export default ShippingCard;
