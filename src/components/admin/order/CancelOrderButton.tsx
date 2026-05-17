import { useState } from "react";
import { orderApi } from "../../../api/orderApi";
import MyButton from "../../buttons/MyButton";
import ConfirmModal from "../../common/ConfirmModal";

type Props = {
  id: string;

  fetchOrders?: () => void;
};

const CancelOrderButton = ({ id, fetchOrders }: Props) => {
  const [loading, setLoading] = useState(false);

  const [open, setOpen] = useState(false);

  const handleCancel = async () => {
    try {
      setLoading(true);

      await orderApi.cancel(id);

      fetchOrders?.();

      setOpen(false);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <MyButton
        disabled={loading}
        onClick={() => setOpen(true)}
        className="
          w-fit mr-2 px-4 py-1.5
          text-xs rounded-2xl font-bold
          bg-red-100 text-red-600
          hover:bg-red-200
          border border-highlight/20
          transition-all
        "
      >
        Hủy
      </MyButton>

      <ConfirmModal
        open={open}
        title="Hủy đơn hàng"
        message="Bạn có chắc muốn hủy đơn này không?"
        confirmText="Xác nhận"
        cancelText="Đóng"
        onConfirm={handleCancel}
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default CancelOrderButton;
