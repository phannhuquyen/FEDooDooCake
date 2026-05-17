import { IconAdd } from "../../../utils/icons";
import MyButton from "../../buttons/MyButton";

const ProductHeader = () => {
  return (
    <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Quản lý sản phẩm và danh mục
        </h1>
        <p className="text-gray-500">
          Xem, thêm, sửa và xóa các sản phẩm và danh mục trên toàn hệ thống.
        </p>
      </div>
      <MyButton
        to="/admin/products/create"
        className="flex min-w-21 max-w-120 cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-5 gap-2 bg-highlight text-white text-sm font-bold leading-normal shadow-sm hover:bg-highlight/90"
      >
        <span className=" ">
          <IconAdd />
        </span>
        Thêm sản phẩm
      </MyButton>
    </div>
  );
};

export default ProductHeader;
