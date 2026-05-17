import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IconSearch } from "../../../utils/icons";
const HeaderProductSearch = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!keyword.trim()) return;

    navigate(`/products?search=${encodeURIComponent(keyword)}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="hidden md:flex items-center">
      <div
        className="
          flex items-center gap-2
          bg-white border border-gray-200
          rounded-full
          px-3 py-1
          shadow-sm
          focus-within:border-highlight
          focus-within:ring-2
          focus-within:ring-highlight/20
          transition-all
        "
      >
        <input
          type="text"
          placeholder="Tìm bánh ngọt..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={handleKeyDown}
          className="
            w-52 lg:w-64
            bg-transparent
            outline-none
            
            text-lg
            placeholder:text-gray-400
          "
        />

        <button
          onClick={handleSearch}
          className="
            flex items-center justify-center
            size-9 rounded-full
            bg-highlight text-white
            hover:opacity-90
            active:scale-95
            transition-all
          "
        >
          <IconSearch />
        </button>
      </div>
    </div>
  );
};

export default HeaderProductSearch;
