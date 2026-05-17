import { useState } from "react";
import { formatCurrency } from "../../../utils/formatCurrency";
import {
  IconAddToCart,
  IconDetai,
} from "../../../utils/icons";
import MyButton from "../../buttons/MyButton";
import ProductImageSection from "./ProductImageSection";
import ConfirmModal from "../../common/ConfirmModal";
import { userApi } from "../../../api/userApi";
import AlertModal from "../../common/AleartModal";
import LoadingSpinner from "../../common/LoadingSpinner";

const ProductDetail = ({
  product,
}: {
  product: any;
}) => {
  const [quantity, setQuantity] =
    useState(1);

  const [loading, setLoading] =
    useState(false);

  const [openConfirm, setOpenConfirm] =
    useState(false);

  const [openLoginAlert, setOpenLoginAlert] =
    useState(false);

  const [successAlert, setSuccessAlert] =
    useState(false);

  if (!product) return null;

  const details = [
    {
      icon: <IconDetai.thanhphan />,
      label: "Thành phần",
      value: product.details?.thanhphan,
    },
    {
      icon: <IconDetai.kichthuoc />,
      label: "Kích thước",
      value: product.details?.kichthuoc,
    },
    {
      icon: <IconDetai.baoquan />,
      label: "Hướng dẫn bảo quản",
      value: product.details?.baoquan,
    },
  ];

  function increaseQuantity() {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  }

  function decreaseQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  async function handleAddToCart() {
    try {
      const userId =
        localStorage.getItem("userId");

      // chưa đăng nhập
      if (!userId) {
        setOpenLoginAlert(true);
        return;
      }

      setLoading(true);

      await userApi.addToCart(userId, {
        productId: product._id,
        quantity,
      });

      setSuccessAlert(true);
    } catch (error: any) {
      console.error(
        error?.response?.data?.message
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* loading */}
      {loading && (
        <LoadingSpinner fullScreen={true} />
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <ProductImageSection
          images={product.images}
        />

        <div className="flex flex-col gap-6 py-4">
          {/* info */}
          <div className="flex flex-col gap-3">
            <h1 className="text-[#181114] text-4xl font-black leading-tight tracking-[-0.033em]">
              {product.name}
            </h1>

            <p className="text-[#181114] tracking-light text-4xl font-bold leading-tight">
              {formatCurrency(product.price)}
            </p>

            <p className="text-[#896172] text-base font-normal leading-relaxed pt-2">
              {product.description}
            </p>
          </div>

          {/* detail */}
          <div className="border-t border-b border-gray-300 py-6">
            <h3 className="text-base font-bold text-[#181114] mb-3">
              Mô tả chi tiết
            </h3>

            {details.map((detail) => (
              <div key={detail.label}>
                <div className="flex items-center gap-2 text-highlight">
                  <span>{detail.icon}</span>

                  <p className="font-bold tracking-wide">
                    {detail.label}
                  </p>
                </div>

                <p className="text-[#896172] mb-2 text-sm font-normal leading-relaxed">
                  _ {detail.value}
                </p>
              </div>
            ))}
          </div>

          {/* stock */}
          <div className="flex justify-between">
            <p className="text-[#896172] text-sm font-normal leading-relaxed pt-2">
              Số lượng: {product.stock}
            </p>

            <p className="text-[#896172] text-sm font-normal leading-relaxed pt-2">
              Đã bán: {product.sold}
            </p>
          </div>

          {/* add cart */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            {/* quantity */}
            <div className="flex items-center justify-between border border-gray-200 rounded-lg px-3 py-2">
              <MyButton
                onClick={decreaseQuantity}
                className="text-[#896172] hover:text-highlight text-2xl font-semibold w-8 h-8 flex items-center justify-center"
              >
                -
              </MyButton>

              <span className="text-[#181114] text-lg font-bold w-12 text-center">
                {quantity}
              </span>

              <MyButton
                onClick={increaseQuantity}
                className="text-[#896172] hover:text-highlight text-2xl font-semibold w-8 h-8 flex items-center justify-center"
              >
                +
              </MyButton>
            </div>

            {/* btn */}
            <MyButton
              onClick={() => {
                setOpenConfirm(true);
              }}
              className="flex-1 flex items-center justify-center gap-3 bg-highlight text-white font-bold text-base h-14 rounded-lg hover:opacity-90 transition-opacity"
            >
              <span className="text-3xl">
                <IconAddToCart />
              </span>

              Thêm vào giỏ hàng
            </MyButton>
          </div>
        </div>
      </div>

      {/* confirm add cart */}
      <ConfirmModal
        open={openConfirm}
        title="Thêm vào giỏ hàng"
        message={`Bạn có muốn thêm ${quantity} sản phẩm vào giỏ hàng không?`}
        confirmText="Thêm"
        cancelText="Hủy"
        onConfirm={handleAddToCart}
        onClose={() =>
          setOpenConfirm(false)
        }
      />

      {/* chưa đăng nhập */}
      <AlertModal
        open={openLoginAlert}
        type="error"
        title="Chưa đăng nhập"
        message="Bạn cần đăng nhập để thêm sản phẩm vào giỏ hàng"
        onClose={() =>
          setOpenLoginAlert(false)
        }
      />

      {/* thêm thành công */}
      <AlertModal
        open={successAlert}
        type="success"
        title="Thành công"
        message="Đã thêm sản phẩm vào giỏ hàng"
        onClose={() =>
          setSuccessAlert(false)
        }
      />
    </>
  );
};

export default ProductDetail;