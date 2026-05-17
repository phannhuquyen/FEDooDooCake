import { useMemo, useState } from "react";
import ProductFilter from "./ProductFilter";
import ProductSearch from "./ProductSearch";
import ProductTable from "./ProductTable";

type Props = {
  products: any[];

  fetchProducts: () => Promise<void>;
};

const ProductToolbar = ({
  products,
  fetchProducts,
}: Props) => {
  const [search, setSearch] =
    useState("");

  const [statusFilter, setStatusFilter] =
    useState("");

  const [sort, setSort] = useState("");

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // search
    if (search.trim()) {
      result = result.filter((product) =>
        product.name
          .toLowerCase()
          .includes(search.toLowerCase()),
      );
    }

    // filter status
    if (statusFilter === "inStock") {
      result = result.filter(
        (product) => product.stock > 0,
      );
    }

    if (statusFilter === "outStock") {
      result = result.filter(
        (product) => product.stock <= 0,
      );
    }

    // sort
    if (sort === "priceAsc") {
      result.sort(
        (a, b) => a.price - b.price,
      );
    }

    if (sort === "priceDesc") {
      result.sort(
        (a, b) => b.price - a.price,
      );
    }

    return result;
  }, [products, search, statusFilter, sort]);

  return (
    <div className="col-span-12 lg:col-span-9 flex flex-col gap-4 overflow-hidden">
      <div className="flex flex-wrap gap-4 items-center justify-between pt-0.5">
        <ProductSearch
          search={search}
          setSearch={setSearch}
        />

        <ProductFilter
          statusFilter={statusFilter}
          setStatusFilter={
            setStatusFilter
          }
          sort={sort}
          setSort={setSort}
        />
      </div>

      <div className="flex-1 overflow-y-auto bg-surface-light rounded-xl">
        <ProductTable
          products={filteredProducts}
          fetchProducts={fetchProducts}
        />
      </div>
    </div>
  );
};

export default ProductToolbar;