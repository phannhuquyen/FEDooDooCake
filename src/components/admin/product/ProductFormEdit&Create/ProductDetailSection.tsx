import { useEffect, useState } from "react";
import type { AdminProductDetailType } from "../../../../pages/adminPages/AdminEditProductPage";
import { IconDescription, IconDetai } from "../../../../utils/icons";
import { categoryApi } from "../../../../api/categoryApi";

type Props = {
  detail: AdminProductDetailType;

  onChangeDetail: (newDetail: Partial<AdminProductDetailType>) => void;
};

const ProductDetailSection = ({ detail, onChangeDetail }: Props) => {
  const [cateList, setCateList] = useState<any>();

  useEffect(() => {
    const fetchCate = async () => {
      try {
        const res = await categoryApi.getAll();
        setCateList(res.data);
        if (!detail.categoryId){
          onChangeDetail({categoryId:res.data[0]._id})
        }
      } catch (error: any) {
        console.error(error?.response?.data.message);
      }
    };
    fetchCate();
  }, []);

  const handleChange =
    (field: keyof AdminProductDetailType) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) => {
      onChangeDetail({
        [field]:
          field === "price" || field === "stock" || field === "sold"
            ? Number(e.target.value)
            : e.target.value,
      });
    };
  const handleDetailChange =
    (field: keyof AdminProductDetailType["details"]) =>
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      onChangeDetail({
        details: {
          ...detail.details,
          [field]: e.target.value,
        },
      });
    };

  const labelDescripdion = [
    {
      label: "Mô tả ngắn gọn",
      icon: <IconDescription />,
      placeholder: "Miêu tả ngắn gọn sản phẩm...",
      changeFunc: handleChange("description"),
      value: detail.description,
    },
    {
      label: "Thành phần chính",
      icon: <IconDetai.thanhphan />,
      placeholder: "Nhập danh sách nguyên liệu...",
      changeFunc: handleDetailChange("thanhphan"),
      value: detail.details.thanhphan,
    },
    {
      label: "Kích thước / Trọng lượng",
      icon: <IconDetai.kichthuoc />,
      placeholder: "Ví dụ: Đường kính 10cm, trọng lượng 200g...",
      changeFunc: handleDetailChange("kichthuoc"),
      value: detail.details.kichthuoc,
    },
    {
      label: "Hướng dẫn bảo quản",
      icon: <IconDetai.baoquan />,
      placeholder: "Cách bảo quản để bánh luôn thơm ngon... ",
      changeFunc: handleDetailChange("baoquan"),
      value: detail.details.baoquan,
    },
  ];
  return (
    <section className="lg:col-span-2 space-y-8 min-w-0">
      <div className="bg-white p-8 rounded-xl shadow-sm">
        <h3 className="text-xl font-bold mb-8 pb-4 border-b border-gray-300">
          Mã sản phẩm: {detail._id}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold variant uppercase tracking-wider">
              Tên sản phẩm
            </label>
            <input
              type="text"
              placeholder="Vd: Bánh Sukem truyền thống"
              value={detail.name}
              onChange={handleChange("name")}
              className="w-full bg-gray-200 border-gray-300 rounded-lg py-3 px-4 focus:ring-highlight focus:border-highlight pr-12"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold variant uppercase tracking-wider">
              Danh mục
            </label>
            <div className="relative">
              {cateList && (
                <select
                  value={detail.categoryId}
                  onChange={handleChange("categoryId")}
                  className="w-full bg-gray-200 border-gray-300 rounded-lg py-3 px-4 focus:ring-highlight focus:border-highlight"
                >
                  {cateList.map((cate: any) => (
                    <option key={cate._id} value={cate._id}>
                      {cate.name}
                    </option>
                  ))}
                </select>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold variant uppercase tracking-wider">
              Giá bán
            </label>
            <div className="relative">
              <input
                type="text"
                value={detail.price || ""}
                onChange={handleChange("price")}
                className="w-full bg-gray-200 border-gray-300 rounded-lg py-3 px-4 focus:ring-highlight focus:border-highlight pr-12"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-sm">
                đ
              </span>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold variant uppercase tracking-wider">
              Tồn kho
            </label>
            <input
              type="text"
              placeholder="Vd: Bánh Sukem truyền thống"
              value={detail.stock}
              onChange={handleChange("stock")}
              className="w-full bg-gray-200 border-gray-300 rounded-lg py-3 px-4 focus:ring-highlight focus:border-highlight pr-12"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold variant uppercase tracking-wider">
              Số lượng bán(unmouse)
            </label>
            <div className="relative">
              <div className="w-full bg-gray-200 border-gray-300 rounded-lg py-3 px-4 focus:ring-highlight focus:border-highlight pr-12">
                {detail.sold || 0}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="bg-white p-8 rounded-xl shadow-sm">
        <h3 className="text-xl font-bold mb-8 pb-4 border-b border-gray-300">
          Mô tả chi tiết
        </h3>
        <div className="space-y-8">
          {labelDescripdion.map((item, index) => (
            <div key={index}>
              <label className="flex items-center gap-2 text-xs font-black text-highlight uppercase tracking-widest mb-4">
                <span className="text-base">{item.icon}</span>
                {item.label}
              </label>
              <div className="bg-gray-100 rounded-lg p-2 border border-gray-200">
                <textarea
                  className="w-full bg-transparent border-none focus:ring-0 text-sm resize-none
                focus:outline-none
                "
                  placeholder={item.placeholder}
                  rows={2}
                  value={item.value}
                  onChange={item.changeFunc}
                ></textarea>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDetailSection;
