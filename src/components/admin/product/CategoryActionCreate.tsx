import { useState } from "react";
import { categoryApi } from "../../../api/categoryApi";
import { IconAdd } from "../../../utils/icons";
import MyButton from "../../buttons/MyButton";
import AlertModal from "../../common/AleartModal";
import ConfirmModal from "../../common/ConfirmModal";

type Props = {
  fetchCategories: () => Promise<void>;
};

const CategoryActionCreate = ({ fetchCategories }: Props) => {
  const [openCreate, setOpenCreate] = useState(false);

  const [categoryName, setCategoryName] = useState("");

  const [openConfirm, setOpenConfirm] = useState(false);

  const [loading, setLoading] = useState(false);

  type AlertType = "error" | "success" | "warning" | "info";

  const [alert, setAlert] = useState<{
    open: boolean;
    title: string;
    message: string;
    type: AlertType;
  }>({
    open: false,
    title: "",
    message: "",
    type: "error",
  });

  const handleCreateCategory = async () => {
    if (!categoryName.trim()) {
      setAlert({
        open: true,
        title: "Thiếu thông tin",
        message: "Vui lòng nhập tên danh mục",
        type: "error",
      });

      return;
    }

    try {
      setLoading(true);

      await categoryApi.create({
        name: categoryName,
      });

      await fetchCategories();

      setAlert({
        open: true,
        title: "Thành công",
        message: "Thêm danh mục thành công",
        type: "success",
      });

      setCategoryName("");

      setOpenCreate(false);
    } catch (error: any) {
      console.error(error?.response?.data?.message);

      setAlert({
        open: true,
        title: "Lỗi",
        type: "error",
        message: error?.response?.data?.message || "Thêm danh mục thất bại",
      });
    } finally {
      setLoading(false);
      setOpenConfirm(false);
    }
  };

  // chưa mở form
  if (!openCreate) {
    return (
      <>
        <MyButton
          onClick={() => setOpenCreate(true)}
          className="flex w-full mt-2 cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-5 gap-2 bg-highlight/10 text-highlight text-sm font-bold leading-normal hover:bg-highlight/20"
        >
          <span>
            <IconAdd />
          </span>
          Thêm danh mục
        </MyButton>
        <AlertModal
          open={alert.open}
          title={alert.title}
          type={alert.type}
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
  }

  return (
    <>
      <div className="flex flex-col gap-3 mt-2">
        {/* input */}
        <input
          type="text"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          placeholder="Nhập tên danh mục..."
          className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-highlight"
        />

        {/* buttons */}
        <div className="flex gap-2">
          <MyButton
            onClick={() => {
              setOpenCreate(false);
              setCategoryName("");
            }}
            className="flex-1 h-10 rounded-lg bg-gray-100 text-sm font-semibold hover:bg-gray-200"
          >
            Hủy
          </MyButton>

          <MyButton
            disabled={loading}
            onClick={() => setOpenConfirm(true)}
            className="flex-1 h-10 rounded-lg bg-highlight text-white text-sm font-semibold hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Đang thêm..." : "Xác nhận"}
          </MyButton>
        </div>
      </div>

      {/* confirm */}
      <ConfirmModal
        open={openConfirm}
        title="Xác nhận thêm"
        message={`Bạn chắc chắn muốn thêm danh mục "${categoryName}"?`}
        confirmText="Thêm"
        cancelText="Hủy"
        onClose={() => setOpenConfirm(false)}
        onConfirm={handleCreateCategory}
      />

      {/* alert */}
      <AlertModal
        open={alert.open}
        title={alert.title}
        type={alert.type}
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

export default CategoryActionCreate;
