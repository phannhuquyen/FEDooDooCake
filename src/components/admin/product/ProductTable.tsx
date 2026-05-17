import ProductTableRow from "./ProductTableRow";

type Props = {
  products: any[];

  fetchProducts: () => Promise<void>;
};

const ProductTable = ({ products, fetchProducts }: Props) => {
  const th = [
    "Sản phẩm",
    "Mã đơn",
    "Giá",
    "Tồn kho",
    "Trạng thái",
    "Hành động",
  ];

  return (
    <table className="w-full text-left">
      <thead className="text-rose-900 text-xs uppercase border-b border-gray-300 sticky top-0 bg-white">
        <tr>
          {th.map((item) => (
            <th
              key={item}
              className="px-6 py-4 font-medium last:text-right"
              scope="col"
            >
              {item}
            </th>
          ))}
        </tr>
      </thead>

      <tbody className="text-sm">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductTableRow
              key={product._id}
              {...product}
              image={product.images[0]}
              fetchProducts={fetchProducts}
            />
          ))
        ) : (
          <tr>
            <td colSpan={6} className="py-10 text-center text-gray-500">
              Không có sản phẩm nào
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default ProductTable;
