import { IconSearch } from "../../../utils/icons";

type Props = {
  search: string;

  setSearch: React.Dispatch<
    React.SetStateAction<string>
  >;
};

const ProductSearch = ({
  search,
  setSearch,
}: Props) => {
  return (
    <div className="flex-1 pl-0.5 relative min-w-60">
      <span className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
        <IconSearch />
      </span>

      <input
        type="text"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        placeholder="Tìm kiếm sản phẩm..."
        className="block w-full pl-7 pr-3 py-2 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-highlight focus:border-transparent transition-all shadow-sm"
      />
    </div>
  );
};

export default ProductSearch;