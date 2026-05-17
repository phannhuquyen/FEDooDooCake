import ProductFormHeader from "../../components/admin/product/ProductFormEdit&Create/ProductFormHeader";
import FormEdit_Create from "../../components/admin/product/ProductFormEdit&Create/FormEdit_Create";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productApi } from "../../api/productApi";

export type AdminProductDetailType = {
  _id: string;
  categoryId: string;
  images: string[];
  price: number;
  description: string;
  details: {
    thanhphan: string;
    kichthuoc: string;
    baoquan: string;
  };
  name: string;
  status: "active" | "inactive";
  isFeature: boolean;
  sold: number;
  stock: number;
};

const AdminEditProductPage = () => {
  const [product, setProduct] = useState<AdminProductDetailType>();
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await productApi.getById(id as string);
        setProduct(res.data);
        // console.log(res.data);
      } catch (error:any) {
        console.error(error?.response?.data.message);
      }
    };
    fetchProduct();
  }, []);

  return (
    <div className="w-full ml-0 mx-auto max-w-7xl">
      <ProductFormHeader title="Cập nhật sản phẩm" />

      {product && <FormEdit_Create product={product} />}

    </div>
  );
};

export default AdminEditProductPage;

//gán product này = product trong csdl, xử lý rồi push lại
// const test = {
//   _id: "1",
//   categoryId: "BÁNH CÓ SỮA",
//   name: "Bánh sữa",
//   images: [
//     "https://lh3.googleusercontent.com/aida-public/AB6AXuDsMqvwOa1yETjzYinfTbYAN9Jfk8dRQkXooYeYDd7McPf-8-Rrqgp-eIeSTMMsqwxpZzD7MPGXuygaQbNsJ8p1XlkWpOhr5k5ALR65Y13B6HYh-zk2cx468BCGOh5XLW_81GZEuzJpCLE4FGUdLsfINwY2rRjrumzVAg9n5OsPhctAJFWeReCPX2L_eMLMmFoyJOpqcY72h0KubPmkXXVX0c2Gp4valzwkWoBBnEP7wOoGH3D5hmWXEKuIv_752aAvEtRdtD4A_Fg",
//     "https://lh3.googleusercontent.com/aida-public/AB6AXuDsMqvwOa1yETjzYinfTbYAN9Jfk8dRQkXooYeYDd7McPf-8-Rrqgp-eIeSTMMsqwxpZzD7MPGXuygaQbNsJ8p1XlkWpOhr5k5ALR65Y13B6HYh-zk2cx468BCGOh5XLW_81GZEuzJpCLE4FGUdLsfINwY2rRjrumzVAg9n5OsPhctAJFWeReCPX2L_eMLMmFoyJOpqcY72h0KubPmkXXVX0c2Gp4valzwkWoBBnEP7wOoGH3D5hmWXEKuIv_752aAvEtRdtD4A_Fg",
//     "https://lh3.googleusercontent.com/aida-public/AB6AXuAAKmd1eYD8GzbxWO4Fn6CAP5h5sIaHzS-2dNV9cc-aw58AkY-JugloGLNsawiqLq3Mm_PcV4xenJzqWbBTFJV2GGNBCeSXagKritABZ_IHikEUQc8gat0zaWoERh2Vl3c2b5EpCIE2ufRRUH9Xi9j59MxKBOerIz1HTrQ0W1KyB5Yq13cA6-fVcs2sWNtBrJF8xpL1I4oNOn_Litm0IS3PXX-g3UKdapGUMc1TIys49IxIoYDPCoBxQigjSEvqZdXCi2ZPToUNzVo",
//   ],
//   price: 100000,
//   stock: 99,
//   sold: 20,
//   description: "Bánh nhỏ, 1 hộp 2 chiếc",
//   detail: {
//     thanhphan: "Bột mì, bơ, sữa, trứng, đường",
//     kichthuoc: "size 10",
//     baoquan: "Bảo quản trong tủ lạnh",
//   },
//   status: "inactive",
//   isFeatured: false,
// };
// const detail = {
//   name: product.name,
//   categoryName: product.categoryId,
//   price: product.price,
//   stock: product.stock,
//   description: product.description,
//   detail: product.detail,
// };
