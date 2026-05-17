import MyButton from "../../../buttons/MyButton";
import { useNavigate } from "react-router-dom";

const ProductFormHeader = ({title}:{title:string}) => {
  const navigation = useNavigate();
  const goBack = () => {
    navigation(-1);
  };
  return (
    <div className="mb-6">
      <MyButton
        onClick={goBack}
        className="print:hidden mb-1 text-sm text-gray-500 hover:text-highlight transition-colors"
      >
        Quay lại
      </MyButton>
      <div className="md:flex-row md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-[#181114] text-3xl font-black leading-tight">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ProductFormHeader;
