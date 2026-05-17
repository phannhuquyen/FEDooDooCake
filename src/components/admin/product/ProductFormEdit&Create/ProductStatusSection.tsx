import { IconClose, IconSuccess } from "../../../../utils/icons";

type Props = {
  value: string;

  onChange: (value: string) => void;
};

const ProductStatusSection = ({ value, onChange }: Props) => {
  return (
    <section className="bg-white p-6 rounded-xl shadow-sm min-w-0">
      <h3 className="text-xl font-bold mb-6">Trạng thái sản phẩm</h3>
      <div className="space-y-4">
        <label className="flex items-center justify-between p-4 bg-gray-100 rounded-lg border-2 border-highlight/20 cursor-pointer hover:border-highlight transition-all">
          <div className="flex items-center gap-3">
            <span className="  text-highlight">
              <IconSuccess />
            </span>
            <span className="font-bold">Đang bán(Active)</span>
          </div>
          <input
            type="radio"
            name="statusInput"
            value="active"
            checked={value === "active"}
            onChange={(e) => onChange(e.target.value)}
            className="accent-highlight"
          />
        </label>
        <label className="flex items-center justify-between p-4 bg-gray-100 rounded-lg border-2 border-highlight/20 cursor-pointer hover:border-highlight transition-all">
          <div className="flex items-center gap-3">
            <span className="  text-highlight">
              <IconClose />
            </span>
            <span className="font-bold">Dừng bán(Inactive)</span>
          </div>
          <input
            type="radio"
            name="statusInput"
            value="inactive"
            checked={value === "inactive"}
            onChange={(e) => onChange(e.target.value)}
            className="accent-highlight"
          />
        </label>
      </div>
    </section>
  );
};

export default ProductStatusSection;
