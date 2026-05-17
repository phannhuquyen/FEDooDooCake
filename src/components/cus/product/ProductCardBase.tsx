import { Link } from "react-router-dom";
import MyButton from "../../buttons/MyButton";
import { IconAddToCart } from "../../../utils/icons";
import { userApi } from "../../../api/userApi";
import { useState } from "react";
import LoadingSpinner from "../../common/LoadingSpinner";
import AlertModal from "../../common/AleartModal";
import ConfirmModal from "../../common/ConfirmModal";
import { formatCurrency } from "../../../utils/formatCurrency";

type Props = {
  product: any;
  children?: React.ReactNode;
};

const ProductCardBase = ({ product, children }: Props) => {
  const [loading, setLoading] = useState(false);

  const [successAlert, setSuccessAlert] = useState(false);

  const [loginAlert, setLoginAlert] = useState(false);

  const [openConfirm, setOpenConfirm] = useState(false);

  async function handleAddToCart() {
    try {
      const userId = localStorage.getItem("userId");

      // chưa login
      if (!userId) {
        setLoginAlert(true);
        return;
      }

      setLoading(true);

      await userApi.addToCart(userId, {
        productId: product._id,
        quantity: 1,
      });

      setSuccessAlert(true);
    } catch (error: any) {
      console.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* loading */}
      {loading && <LoadingSpinner fullScreen />}

      <Link
        to={`/products/${product._id}`}
        className="flex flex-col h-full group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
      >
        {children}

        {/* image */}
        <div
          className="w-full bg-center bg-no-repeat aspect-video bg-cover shrink-0"
          style={{
            backgroundImage: `url(${product.images[0]})`,
          }}
        ></div>

        {/* content */}
        <div className="p-4 flex flex-col flex-1">
          {/* top content */}
          <div className="flex-1">
            <h3 className="text-lg font-bold text-[#181114] line-clamp-1">
              {product.name}
            </h3>

            {/* giới hạn description */}
            <p className="text-sm text-gray-500 mt-1 line-clamp-2 min-h-10">
              {product.description}
            </p>
          </div>

          {/* bottom */}
          <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-100">
            <p className="text-lg font-bold text-highlight">
              {formatCurrency(product.price)}
            </p>

            <MyButton
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                setOpenConfirm(true);
              }}
              className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 w-10 bg-highlight/10 text-highlight hover:bg-highlight hover:text-white transition-colors shrink-0"
            >
              <span className="text-xl">
                <IconAddToCart />
              </span>
            </MyButton>
          </div>
        </div>
      </Link>
      {/* confirm */}
      <ConfirmModal
        open={openConfirm}
        title="Thêm vào giỏ hàng"
        message={`Bạn có muốn thêm "${product.name}" vào giỏ hàng không?`}
        confirmText="Thêm"
        cancelText="Hủy"
        onConfirm={handleAddToCart}
        onClose={() => setOpenConfirm(false)}
      />

      {/* login alert */}
      <AlertModal
        open={loginAlert}
        type="error"
        title="Chưa đăng nhập"
        message="Bạn cần đăng nhập để thêm vào giỏ hàng"
        onClose={() => setLoginAlert(false)}
      />

      {/* success */}
      <AlertModal
        open={successAlert}
        type="success"
        title="Thành công"
        message="Đã thêm sản phẩm vào giỏ hàng"
        onClose={() => setSuccessAlert(false)}
      />
    </>
  );
};

export default ProductCardBase;
