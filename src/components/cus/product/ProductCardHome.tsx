import { Link } from "react-router-dom";
import MyButton from "../../buttons/MyButton";
import { IconAddToCart } from "../../../utils/icons";
import { formatCurrency } from "../../../utils/formatCurrency";
import { userApi } from "../../../api/userApi";
import { useState } from "react";
import ConfirmModal from "../../common/ConfirmModal";
import AlertModal from "../../common/AleartModal";
import LoadingSpinner from "../../common/LoadingSpinner";

type Props = {
  product: any;
};

const ProductCardHome = ({ product }: Props) => {
  const [loading, setLoading] = useState(false);

  const [openConfirm, setOpenConfirm] = useState(false);

  const [alertSuccess, setAlertSuccess] = useState(false);

  const [alertLogin, setAlertLogin] = useState(false);

  // click cart
  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const userId = localStorage.getItem("userId");

    // chưa login
    if (!userId) {
      setAlertLogin(true);
      return;
    }

    setOpenConfirm(true);
  };

  // confirm add
  const confirmAddToCart = async () => {
    try {
      setLoading(true);

      const userId = localStorage.getItem("userId");

      if (!userId) return;

      await userApi.addToCart(userId, {
        productId: product._id,
        quantity: 1,
      });

      setAlertSuccess(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* loading */}
      {loading && <LoadingSpinner fullScreen />}

      <Link
        to={`/products/${product._id}`}
        className="
          flex flex-col h-full group
          transition-all duration-300
          hover:-translate-y-1
        "
      >
        {/* image */}
        <div className="relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
          {/* image */}
          <div
            className="
              w-full aspect-square
              bg-center bg-cover bg-no-repeat
              transition-transform duration-500
              group-hover:scale-105
            "
            style={{
              backgroundImage: `url(${product.images?.[0]})`,
            }}
          ></div>

          {/* overlay */}
          <div
            className="
              absolute inset-0
              bg-black/0
              group-hover:bg-black/10
              transition-all duration-300
            "
          ></div>

          {/* gradient */}
          <div
            className="
              absolute bottom-0 left-0 right-0
              h-28
              bg-linear-to-t
              from-black/40
              via-black/10
              to-transparent
            "
          ></div>

          {/* add cart */}
          <MyButton
            onClick={handleAddToCart}
            className="
              absolute bottom-4 right-4
              flex items-center justify-center
              h-11 w-11 rounded-full
              bg-white/90 backdrop-blur-md
              text-highlight
              shadow-lg
              transition-all duration-300
              hover:bg-highlight
              hover:text-white
              hover:scale-110
              active:scale-95
            "
          >
            <span className="text-xl">
              <IconAddToCart />
            </span>
          </MyButton>
        </div>

        {/* content */}
        <div className="pt-4 flex flex-col flex-1">
          {/* top */}
          <div className="flex-1">
            {/* name */}
            <h3
              className="
                text-[#181114]
                text-base font-bold
                leading-snug
                line-clamp-1
              "
            >
              {product.name || "Product Name"}
            </h3>

            {/* description */}
            <p
              className="
                mt-2
                text-[#896172]
                text-sm
                leading-relaxed
                line-clamp-2
                min-h-10
              "
            >
              {product.description || "Không có mô tả"}
            </p>
          </div>

          {/* bottom */}
          <div
            className="
              mt-4 pt-4
              border-t border-gray-100
              flex items-center justify-between
            "
          >
            <div>
              <p
                className="
                  text-highlight
                  text-lg font-black
                  tracking-tight
                "
              >
                {formatCurrency(product.price || 0)}
              </p>
            </div>
          </div>
        </div>

        {/* {children} */}
      </Link>

      {/* confirm add cart */}
      <ConfirmModal
        open={openConfirm}
        title="Thêm vào giỏ hàng"
        message={`Bạn muốn thêm "${product.name}" vào giỏ hàng?`}
        confirmText="Thêm"
        cancelText="Hủy"
        onConfirm={confirmAddToCart}
        onClose={() => setOpenConfirm(false)}
      />

      {/* success */}
      <AlertModal
        open={alertSuccess}
        type="success"
        title="Thành công"
        message="Đã thêm sản phẩm vào giỏ hàng"
        onClose={() => setAlertSuccess(false)}
      />

      {/* login required */}
      <AlertModal
        open={alertLogin}
        type="warning"
        title="Chưa đăng nhập"
        message="Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng"
        onClose={() => setAlertLogin(false)}
      />
    </>
  );
};

export default ProductCardHome;
