import type { Category } from "../../../types/category";
import MyButton from "../../buttons/MyButton";

type Props = {
  cate: Category;
  categoryCurrent: string;
  onclick: (id: string) => void;
};

const CategoryItem = ({ cate, categoryCurrent, onclick }: Props) => {
  return (
    <MyButton
      // to={`category/${cate._id}`}
      
      onClick={() => {
        onclick(cate._id);
      }}
      className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-sm transition-colors text-gray-600 ${categoryCurrent == cate._id ? "bg-black/5 text-highlight border-b-2 border-gray-300 shadow" : ""} hover:bg-black/5  hover:text-highlight `}
    >
      <span>{cate.name}</span>
    </MyButton>
  );
};

export default CategoryItem;
