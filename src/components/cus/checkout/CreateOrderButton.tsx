import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { orderApi } from "../../../api/orderApi";
import MyButton from "../../buttons/MyButton";
import AlertModal from "../../common/AleartModal";

type Props = {
  orderData: any;

  validateCheckout: () => string | null;
};

const CreateOrderButton = ({ orderData, validateCheckout }: Props) => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [alertOpen, setAlertOpen] = useState(false);

  const [alertMessage, setAlertMessage] = useState("");

  const [success, setSuccess] = useState(false);

  const handleCreateOrder = async () => {
    // validate
    const errorMessage = validateCheckout();

    if (errorMessage) {
      setSuccess(false);

      setAlertMessage(errorMessage);

      setAlertOpen(true);

      return;
    }

    try {
      setLoading(true);

      await orderApi.create(orderData);

      setSuccess(true);

      setAlertMessage("Đặt hàng thành công 🎉");

      setAlertOpen(true);
    } catch (error: any) {
      setSuccess(false);

      setAlertMessage(error?.response?.data?.message || "Không thể đặt hàng");

      setAlertOpen(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <MyButton
        onClick={handleCreateOrder}
        disabled={loading}
        className="
          w-full bg-highlight
          text-white font-bold
          py-3 px-4 rounded-lg
          hover:opacity-90
        "
      >
        {loading ? "Đang đặt hàng..." : "Hoàn tất đơn hàng"}
      </MyButton>

      <AlertModal
        open={alertOpen}
        message={alertMessage}
        onClose={() => {
          setAlertOpen(false);

          if (success) {
            navigate("/orders");
          }
        }}
      />
    </>
  );
};

export default CreateOrderButton;
