import { useState } from "react";
import { IconDelete, IconEdit } from "../../../utils/icons";
import MyButton from "../../buttons/MyButton";
import ConfirmModal from "../../common/ConfirmModal";
import AlertModal from "../../common/AleartModal";
import { productApi } from "../../../api/productApi";

type Props = {
  _id: string;
  name: string;
  image: string;
  price: number;
  stock: number;
  status: string;

  fetchProducts?: () => void;
};

const ProductTableRow = ({
  _id,
  name,
  image,
  price,
  stock,
  status,
  fetchProducts,
}: Props) => {
  const [openConfirm, setOpenConfirm] =
    useState(false);

  const [alert, setAlert] = useState({
    open: false,
    title: "",
    message: "",
  });

  const handleDelete = async () => {
    try {
      await productApi.delete(_id);

      setAlert({
        open: true,
        title: "Thành công",
        message: "Xóa sản phẩm thành công",
      });

      fetchProducts?.();
    } catch (error: any) {
      console.error(
        error?.response?.data?.message,
      );

      setAlert({
        open: true,
        title: "Không thể xóa",
        message:
          error?.response?.data?.message ||
          "Xóa sản phẩm thất bại",
      });
    } finally {
      setOpenConfirm(false);
    }
  };

  return (
    <>
      <tr className="border-b bg-white hover:bg-gray-100 border-gray-300">
        <td className="px-6 py-4 font-medium whitespace-nowrap">
          <div className="flex items-center gap-3">
            <img
              className="size-10 rounded-md object-cover"
              src={
                image ||
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCE0tfbjUdmox_ssi_EZxEnnAUxFUK2vbuciz90h33ZJbuT35OcX-PcKfjriEsIlfVhCizziEkxE2jvgv5G3SKkHhZZZuD7zB649xllDYeamNlsDoyVeODl0HN7yFWUc9ynKg57GMPCVdk_VoFxpZkwUIYlf-SQuPFYY51W5dNd8CtF2KkrBEOMEcpys0j2oJ9SePJ7_KopJLADUTxXhrUCJd9nJwS2FKfkgfDIsFiLAgAxg0nVqBF6N2HjIRAmA2RUQsDMZHClIrk"
              }
              alt=""
            />

            {name}
          </div>
        </td>

        <td className="px-6 py-4 text-rose-900 ">
          {_id}
        </td>

        <td className="px-6 py-4">
          {price.toLocaleString()}₫
        </td>

        <td className="px-6 py-4">
          {stock}
        </td>

        <td className="px-6 py-4">
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
              status == "active"
                ? "bg-success-bg text-success-text"
                : "bg-error-bg text-error-text"
            } whitespace-nowrap`}
          >
            {status == "active"
              ? "Đang bán"
              : "Dừng bán"}
          </span>
        </td>

        <td className="px-6 py-4 text-right">
          <div className="flex justify-end gap-2">
            <MyButton
              to={`/admin/products/edit/${_id}`}
              className="p-2 rounded-md hover:bg-white text-rose-900"
            >
              <span className="text-base">
                <IconEdit />
              </span>
            </MyButton>

            <MyButton
              onClick={() =>
                setOpenConfirm(true)
              }
              className="p-2 rounded-md hover:bg-white hover:text-error-text text-rose-900"
            >
              <span className="text-base">
                <IconDelete />
              </span>
            </MyButton>
          </div>
        </td>
      </tr>

      {/* confirm */}
      <ConfirmModal
        open={openConfirm}
        title="Xác nhận xóa"
        message="Bạn chắc chắn muốn xóa sản phẩm này?"
        confirmText="Xóa"
        cancelText="Hủy"
        onClose={() =>
          setOpenConfirm(false)
        }
        onConfirm={handleDelete}
      />

      {/* alert */}
      <AlertModal
        open={alert.open}
        title={alert.title}
        type="error"
        message={alert.message}
        onClose={() =>
          setAlert((prev) => ({
            ...prev,
            open: false,
          }))
        }
      />
    </>
  );
};

export default ProductTableRow;