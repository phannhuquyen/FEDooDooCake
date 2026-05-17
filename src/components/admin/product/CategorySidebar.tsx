import { IconSearch } from "../../../utils/icons";
import CategoryActionCreate from "./CategoryActionCreate";
import CategoryList from "./CategoryList";

type Props = {
  categories: any[];

  selectedCategory: string;

  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;

  fetchCategories: () => Promise<void>;
};

const CategorySidebar = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  fetchCategories,
}: Props) => {
  return (
    <div className="col-span-12 lg:col-span-3 bg-white rounded-xl p-4 flex flex-col gap-4 h-fit">
      <h2 className="text-xl font-bold leading-tight tracking-[-0.015em] px-2">
        Danh mục
      </h2>

      {/* search */}
      <div className="relative ">
        <span className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
          <IconSearch />
        </span>

        <input
          type="text"
          placeholder="Tìm kiếm danh mục"
          className="block w-full pl-7 pr-3 py-2 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-highlight focus:border-transparent transition-all shadow-sm"
        />
      </div>

      {/* list */}
      <CategoryList
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        fetchCategories={fetchCategories}
      />

      {/* add */}
      {/* <MyButton className="flex w-full mt-2 cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-5 gap-2 bg-highlight/10 text-highlight text-sm font-bold leading-normal hover:bg-highlight/20">
        <span>
          <IconAdd />
        </span>

        Thêm danh mục
      </MyButton> */}
      <CategoryActionCreate fetchCategories={fetchCategories} />
    </div>
  );
};

export default CategorySidebar;
