import { useState } from "react";

const ProductImageSection = ({ images }: { images: string[] }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-col gap-4">
      {/* ảnh lớn */}
      <div className="w-full overflow-hidden rounded-xl aspect-square">
        <div
          className="w-full h-full bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${selectedImage})`,
          }}
        ></div>
      </div>

      {/* danh sách ảnh nhỏ */}
      <div className="grid grid-cols-4 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(img)}
            className={`
              w-full aspect-square rounded-lg cursor-pointer
              bg-center bg-no-repeat bg-cover
              transition-opacity
              ${
                selectedImage === img
                  ? "border-2 border-highlight opacity-100"
                  : "opacity-70 hover:opacity-100"
              }
            `}
            style={{
              backgroundImage: `url(${img})`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ProductImageSection;