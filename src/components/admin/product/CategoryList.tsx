import MyButton from "../../buttons/MyButton";
import CategoryRow from "./CategoryRow";

type Props = {
  categories: any[];

  selectedCategory: string;

  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;

  fetchCategories: () => Promise<void>;
};

const CategoryList = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  fetchCategories,
}: Props) => {
  return (
    <div className="flex flex-col gap-1">
      {/* all */}
      <MyButton
        onClick={() => setSelectedCategory("all")}
        className={`first:[&>div]:hidden flex items-center gap-4 px-4 min-h-12 justify-between rounded-lg ${
          selectedCategory === "all"
            ? "text-highlight bg-highlight/10"
            : "hover:bg-gray-200"
        }`}
      >
        <p className="text-sm leading-normal truncate">Tất cả sản phẩm</p>
      </MyButton>

      {/* categories */}
      {categories.map((cate) => (
        <CategoryRow
          key={cate._id}
          cate={cate}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          fetchCategories={fetchCategories}
        />
      ))}
    </div>
  );
};

export default CategoryList;
