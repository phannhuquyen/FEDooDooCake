import { useState } from "react";
import MyButton from "../../../buttons/MyButton";
import {
  IconAddPhoto,
  IconCloadUpLoad,
  IconClose,
} from "../../../../utils/icons";
import AlertModal from "../../../common/AleartModal";

type Props = {
  images: string[];

  onChangeImages: (images: string[]) => void;
};
const ProductImageSection = ({ images, onChangeImages }: Props) => {
  // const [Images, setImages] = useState(images);
  const [url, setUrl] = useState("");
  const [alert, setAlert] = useState({
    open: false,
    type: "error" as "success" | "error" | "warning" | "info",
    title: "",
    message: "",
  });

  const removeImage = (index: number) => {
    onChangeImages(images.filter((_, i) => i !== index));
  };

  const handleAddImage = async () => {
    if (!url.trim()) {
      setAlert({
        open: true,
        type: "error",
        title: "Lỗi",
        message: "Vui lòng nhập URL",
      });
      return;
    }
    if (images.length >= 4) {
      setAlert({
        open: true,
        type: "error",
        title: "Lỗi",
        message: "Sản phẩm chứa tối đa 4 ảnh",
      });

      return;
    }

    const isValid = await checkImageExists(url);
    if (!isValid) {
      setAlert({
        open: true,
        type: "error",
        title: "Lỗi",
        message: "Link ảnh không hợp lệ",
      });
      return;
    }

    onChangeImages([...images, url]);
    setUrl("");
    return;
  };

  const changeUrl = (e: any) => {
    setUrl(e.target.value);
  };

  return (
    <section className="bg-white p-6 rounded-xl shadow-sm space-y-6 min-w-0">
      {/* header */}
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-on-surface">Hình ảnh sản phẩm</h3>
        <span className="font-medium text-xs">(Tối đa 4 ảnh)</span>
      </div>
      {/* images */}
      <div className="grid grid-cols-2 gap-3">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group aspect-square rounded-lg overflow-hidden"
          >
            <img className="w-full h-full object-cover" src={image} alt="" />
            <button
              onClick={() => removeImage(index)}
              className="absolute top-2 right-2 w-7 h-7 bg-white/90 rounded-full flex items-center justify-center text-error shadow-sm hover:bg-error hover:text-white transition-all"
            >
              <span className="  text-sm">
                <IconClose />
              </span>
            </button>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3">
        {/* thêm ảnh */}
        <div className="relative aspect-square border-2 border-dashed border-highlight rounded-lg flex flex-col items-center justify-center hover:bg-highlight/5 transition-colors cursor-pointer group">
          <span className="  text-highlight text-3xl mb-2 group-hover:scale-110 transition-transform">
            <IconAddPhoto />
          </span>
          <span className="text-[10px] font-bold uppercase tracking-wider ">
            Thêm ảnh
          </span>
        </div>
        {/* tải ảnh */}
        <div className="relative aspect-square border-2 border-dashed border-highlight rounded-lg flex flex-col items-center justify-center hover:bg-highlight/5 transition-colors cursor-pointer group">
          <span className="  text-highlight text-3xl mb-2 group-hover:scale-110 transition-transform">
            <IconCloadUpLoad />
          </span>
          <span className="text-[10px] font-bold uppercase tracking-wider ">
            Tải ảnh
          </span>
        </div>
      </div>
      {/* add url image */}
      <div className="space-y-2">
        <label
          htmlFor="urlInput"
          className="text-xs font-bold    uppercase tracking-wider"
        >
          Url ảnh sản phẩm
        </label>
        <div className="flex gap-2 flex-wrap">
          <input
            type="text"
            id="urlInput"
            placeholder="https://..."
            value={url}
            onChange={changeUrl}
            className="w-full min-w-0 bg-gray-200 border border-gray-300 px-4 rounded-lg py-2 text-sm focus:outline-none focus:ring-1 focus:ring-highlight focus:border-highlight"
          />
          <MyButton
            onClick={handleAddImage}
            className="bg-highlight text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:opacity-90 active:scale-95 transition-all"
          >
            Thêm
          </MyButton>
        </div>
      </div>

      {alert && (
        <AlertModal
          open={alert.open}
          type={alert.type}
          title={alert.title}
          message={alert.message}
          onClose={() =>
            setAlert((prev) => ({
              ...prev,
              open: false,
            }))
          }
        />
      )}
    </section>
  );
};

export default ProductImageSection;

export const checkImageExists = (url: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new Image();

    img.src = url;

    img.onload = () => resolve(true);

    img.onerror = () => resolve(false);
  });
};

// const exImages = [
//   "https://lh3.googleusercontent.com/aida-public/AB6AXuDsMqvwOa1yETjzYinfTbYAN9Jfk8dRQkXooYeYDd7McPf-8-Rrqgp-eIeSTMMsqwxpZzD7MPGXuygaQbNsJ8p1XlkWpOhr5k5ALR65Y13B6HYh-zk2cx468BCGOh5XLW_81GZEuzJpCLE4FGUdLsfINwY2rRjrumzVAg9n5OsPhctAJFWeReCPX2L_eMLMmFoyJOpqcY72h0KubPmkXXVX0c2Gp4valzwkWoBBnEP7wOoGH3D5hmWXEKuIv_752aAvEtRdtD4A_Fg",
//   "https://lh3.googleusercontent.com/aida-public/AB6AXuDsMqvwOa1yETjzYinfTbYAN9Jfk8dRQkXooYeYDd7McPf-8-Rrqgp-eIeSTMMsqwxpZzD7MPGXuygaQbNsJ8p1XlkWpOhr5k5ALR65Y13B6HYh-zk2cx468BCGOh5XLW_81GZEuzJpCLE4FGUdLsfINwY2rRjrumzVAg9n5OsPhctAJFWeReCPX2L_eMLMmFoyJOpqcY72h0KubPmkXXVX0c2Gp4valzwkWoBBnEP7wOoGH3D5hmWXEKuIv_752aAvEtRdtD4A_Fg",
//   "https://lh3.googleusercontent.com/aida-public/AB6AXuAAKmd1eYD8GzbxWO4Fn6CAP5h5sIaHzS-2dNV9cc-aw58AkY-JugloGLNsawiqLq3Mm_PcV4xenJzqWbBTFJV2GGNBCeSXagKritABZ_IHikEUQc8gat0zaWoERh2Vl3c2b5EpCIE2ufRRUH9Xi9j59MxKBOerIz1HTrQ0W1KyB5Yq13cA6-fVcs2sWNtBrJF8xpL1I4oNOn_Litm0IS3PXX-g3UKdapGUMc1TIys49IxIoYDPCoBxQigjSEvqZdXCi2ZPToUNzVo",
// ];
