import type { Category } from "../../../types/category";
import CategoryItem from "./CategoryItem";

interface Props {
  categories: Category[];
  categoryCurrent: string;
  setCategoryCurrent: React.Dispatch<React.SetStateAction<string>>;
}

const CategorySidebar = ({
  categories,
  categoryCurrent,
  setCategoryCurrent,
}: Props) => {
  function handleCategory(id: string) {
    setCategoryCurrent(id);
  }

  return (
    <aside className="w-full md:w-64 shrink-0 py-8">
      <div className="sticky top-24">
        <h3 className="text-xl font-bold mb-4 text-[#181114]">Danh mục</h3>
        <nav className="flex flex-col">
          <CategoryItem
            cate={{
              name: "Tất cả sản phẩm",
              __v: -1,
              _id: "all",
              createdAt: "",
              updatedAt: "",
            }}
            categoryCurrent={categoryCurrent}
            onclick={() => {
              handleCategory("all");
            }}
          />
          {categories.map((cate) => (
            <CategoryItem
              key={cate._id}
              cate={cate}
              categoryCurrent={categoryCurrent}
              onclick={() => {
                handleCategory(cate._id);
              }}
            />
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default CategorySidebar;
