import FormEdit_Create from "../../components/admin/product/ProductFormEdit&Create/FormEdit_Create";
import ProductFormHeader from "../../components/admin/product/ProductFormEdit&Create/ProductFormHeader";
import type { AdminProductDetailType } from "./AdminEditProductPage";

const AdminCreateProductPage = () => {
  // const [product, setProduct] = useState<AdminProductDetailType>(
  //   init as AdminProductDetailType,
  // );
  return (
    <div>
      <ProductFormHeader title="Thêm sản phẩm mới" />

      <FormEdit_Create product={init as AdminProductDetailType} />
    </div>
  );
};

export default AdminCreateProductPage;

const init = {
  _id: "",
  categoryId: "",
  images: [],
  price: 0,
  description: "",
  details: {
    thanhphan: "",
    kichthuoc: "",
    baoquan: "",
  },
  name: "",
  status: "active",
  isFeature: false,
  sold: 0,
  stock: 0,
};
