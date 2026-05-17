import { useState } from "react";
import ProductImageSection from "./ProductImageSection";
import ProductStatusSection from "./ProductStatusSection";
import ProductDetailSection from "./ProductDetailSection";
import ProductAction from "../Edit/ProductAction";
import type { AdminProductDetailType } from "../../../../pages/adminPages/AdminEditProductPage";

const FormEdit_Create = ({ product }: { product: AdminProductDetailType }) => {
  const [formData, setFormData] = useState(product);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
      {/* left column:media visual */}
      <div className="lg:col-span-1 space-y-8">
        <ProductImageSection
          images={formData.images}
          onChangeImages={(newImages) =>
            setFormData((prev: any) => ({
              ...prev,
              images: newImages,
            }))
          }
        />
        <ProductStatusSection
          value={formData.status}
          onChange={(value) =>
            setFormData((prev: any) => ({
              ...prev,
              status: value,
            }))
          }
        />
      </div>

      {/* right col: form data, action */}
      <div className="lg:col-span-2 space-y-8">
        <ProductDetailSection
          detail={formData}
          onChangeDetail={(newDetail) =>
            setFormData((prev: any) => ({
              ...prev,
              ...newDetail,
            }))
          }
        />
      </div>
      {formData.categoryId && <ProductAction product={formData} />}
    </div>
  );
};

export default FormEdit_Create;
