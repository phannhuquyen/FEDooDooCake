type Props = {
  statusFilter: string;

  setStatusFilter: React.Dispatch<React.SetStateAction<string>>;

  sort: string;

  setSort: React.Dispatch<React.SetStateAction<string>>;
};

const ProductFilter = ({
  statusFilter,
  setStatusFilter,
  sort,
  setSort,
}: Props) => {
  return (
    <div className="flex gap-2">
      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        className="form-select h-9.5 shadow-sm rounded-lg border border-gray-200 bg-white text-sm focus:ring-highlight/50"
      >
        <option value="">Trạng thái</option>

        <option value="inStock">Còn hàng</option>

        <option value="outStock">Hết hàng</option>
      </select>

      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="form-select h-9.5 shadow-sm rounded-lg border border-gray-200 bg-white text-sm focus:ring-highlight/50"
      >
        <option value="">Sắp xếp theo</option>

        <option value="priceAsc">Giá tăng dần</option>

        <option value="priceDesc">Giá giảm dần</option>
      </select>
    </div>
  );
};

export default ProductFilter;
