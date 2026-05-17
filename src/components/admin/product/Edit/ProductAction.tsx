import { useState } from "react";
import MyButton from "../../../buttons/MyButton";
import ConfirmModal from "../../../common/ConfirmModal";
import { useNavigate, useParams } from "react-router-dom";
import type { AdminProductDetailType } from "../../../../pages/adminPages/AdminEditProductPage";
import { productApi } from "../../../../api/productApi";
import AlertModal from "../../../common/AleartModal";

const ProductAction = ({ product }: { product: AdminProductDetailType }) => {
  const [openConfirm, setOpenConfirm] = useState(false);

  const [openCancel, setOpenCancel] = useState(false);

  const [loading, setLoading] = useState(false);

  const [alert, setAlert] = useState({
    open: false,
    title: "",
    message: "",
  });

  const navigate = useNavigate();

  const page = useParams();

  // data create
  const newP = {
    categoryId: product.categoryId,
    name: product.name,
    price: product.price,
    stock: product.stock,
    sold: product.sold,
    description: product.description,
    details: product.details,
    status: product.status,
    images: product.images,
  };
  // validate
  const validateProduct = () => {
    if (!product.name?.trim()) {
      return "Vui lòng nhập tên sản phẩm";
    }

    if (!product.price || product.price <= 0) {
      return "Vui lòng nhập giá sản phẩm";
    }

    if (!product.description?.trim()) {
      return "Vui lòng nhập mô tả sản phẩm";
    }

    if (!product.details?.thanhphan?.trim()) {
      return "Vui lòng nhập thành phần";
    }

    if (!product.details?.kichthuoc?.trim()) {
      return "Vui lòng nhập kích thước";
    }

    if (!product.details?.baoquan?.trim()) {
      return "Vui lòng nhập hướng dẫn bảo quản";
    }

    if (!product.images || product.images.length === 0) {
      return "Vui lòng thêm ảnh sản phẩm";
    }

    return null;
  };

  // update product
  const handleSaveProduct = async () => {
    const errorMessage = validateProduct();

    if (errorMessage) {
      setAlert({
        open: true,
        title: "Thiếu thông tin",
        message: errorMessage,
      });

      return;
    }

    try {
      setLoading(true);

      await productApi.update(product._id, product);

      setAlert({
        open: true,
        title: "Thành công",
        message: "Cập nhật sản phẩm thành công",
      });

      setTimeout(() => {
        navigate("/admin/products");
      }, 1000);
    } catch (error: any) {
      console.error(error?.response?.data?.message);

      setAlert({
        open: true,
        title: "Lỗi",
        message: error?.response?.data?.message || "Cập nhật sản phẩm thất bại",
      });
    } finally {
      setLoading(false);
    }
  };

  // create product
  const handleCreateProduct = async () => {
    const errorMessage = validateProduct();

    if (errorMessage) {
      setAlert({
        open: true,
        title: "Thiếu thông tin",
        message: errorMessage,
      });

      return;
    }

    try {
      setLoading(true);

      await productApi.create(newP);

      setAlert({
        open: true,
        title: "Thành công",
        message: "Tạo sản phẩm thành công",
      });

      setTimeout(() => {
        navigate("/admin/products");
      }, 1000);
    } catch (error: any) {
      console.error(error?.response?.data?.message);

      setAlert({
        open: true,
        title: "Lỗi",
        message: error?.response?.data?.message || "Tạo sản phẩm thất bại",
      });
    } finally {
      setLoading(false);
    }
  };

  // confirm
  const handleConfirm = async () => {
    if (page.id) {
      await handleSaveProduct();
    } else {
      await handleCreateProduct();
    }

    setOpenConfirm(false);
  };

  return (
    <>
      <div className="col-span-3 w-full flex items-center justify-end gap-4 pt-4">
        {/* cancel */}
        <MyButton
          disabled={loading}
          onClick={() => setOpenCancel(true)}
          className="px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-colors active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Hủy
        </MyButton>

        {/* save/create */}
        <MyButton
          disabled={loading}
          onClick={() => setOpenConfirm(true)}
          className="bg-highlight text-white px-12 py-4 rounded-full font-black text-lg shadow-lg shadow-highlight/20 hover:opacity-90 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading
            ? "Đang xử lý..."
            : page.id
              ? "Lưu sản phẩm"
              : "Tạo sản phẩm mới"}
        </MyButton>
      </div>

      {/* confirm save */}
      <ConfirmModal
        open={openConfirm}
        title={page.id ? "Xác nhận cập nhật" : "Xác nhận thêm"}
        message={
          page.id
            ? "Bạn chắc chắn muốn lưu thay đổi sản phẩm này?"
            : "Bạn chắc chắn muốn thêm sản phẩm mới?"
        }
        confirmText={page.id ? "Lưu" : "Thêm"}
        cancelText="Hủy"
        onClose={() => setOpenConfirm(false)}
        onConfirm={handleConfirm}
      />

      {/* confirm cancel */}
      <ConfirmModal
        open={openCancel}
        title="Xác nhận hủy"
        message="Mọi thay đổi chưa lưu sẽ bị mất."
        confirmText="Hủy thay đổi"
        cancelText="Ở lại"
        onClose={() => setOpenCancel(false)}
        onConfirm={() => navigate(-1)}
      />

      {/* alert */}
      <AlertModal
        open={alert.open}
        title={alert.title}
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

export default ProductAction;
