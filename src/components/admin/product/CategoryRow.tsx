import { useState } from "react";
import { categoryApi } from "../../../api/categoryApi";
import { IconDelete } from "../../../utils/icons";
import MyButton from "../../buttons/MyButton";
import AlertModal from "../../common/AleartModal";
import ConfirmModal from "../../common/ConfirmModal";

type Props = {
  cate: any;

  selectedCategory: string;

  setSelectedCategory: React.Dispatch<
    React.SetStateAction<string>
  >;

  fetchCategories: () => Promise<void>;
};

const CategoryRow = ({
  cate,
  selectedCategory,
  setSelectedCategory,
  fetchCategories,
}: Props) => {
  const [openConfirm, setOpenConfirm] =
    useState(false);

  const [alert, setAlert] = useState({
    open: false,
    title: "",
    message: "",
  });

  const handleDeleteCategory =
    async () => {
      try {
        await categoryApi.delete(cate._id);

        // nếu đang chọn category bị xóa
        if (
          selectedCategory === cate._id
        ) {
          setSelectedCategory("all");
        }

        await fetchCategories();

        setAlert({
          open: true,
          title: "Thành công",
          message:
            "Xóa danh mục thành công",
        });
      } catch (error: any) {
        console.error(
          error?.response?.data?.message,
        );

        setAlert({
          open: true,
          title: "Lỗi",
          message:
            error?.response?.data
              ?.message ||
            "Xóa danh mục thất bại",
        });
      } finally {
        setOpenConfirm(false);
      }
    };

  return (
    <>
      <MyButton
        onClick={() => {
          setSelectedCategory(cate._id);
        }}
        className={`flex items-center gap-4 px-4 min-h-12 justify-between rounded-lg ${
          selectedCategory === cate._id
            ? "text-highlight bg-highlight/10"
            : "hover:bg-gray-200"
        }`}
      >
        <p className="text-sm leading-normal truncate">
          {cate.name}
        </p>

        <div
          onClick={(e) => {
            e.stopPropagation();
            setOpenConfirm(true);
          }}
          className="hover:text-error-text text-gray-700"
        >
          <span className="inset-y-0 left-0 pl-2 flex items-center">
            <IconDelete />
          </span>
        </div>
      </MyButton>

      {/* confirm delete */}
      <ConfirmModal
        open={openConfirm}
        title="Xác nhận xóa"
        message={`Bạn chắc chắn muốn xóa danh mục "${cate.name}"?`}
        confirmText="Xóa"
        cancelText="Hủy"
        onClose={() =>
          setOpenConfirm(false)
        }
        onConfirm={
          handleDeleteCategory
        }
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

export default CategoryRow;