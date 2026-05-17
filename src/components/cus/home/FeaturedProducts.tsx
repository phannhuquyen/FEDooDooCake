import ProductCardHome from "../product/ProductCardHome";
// @ts-ignore
import Slider from "react-slick";
// Đừng quên import CSS của slick ở file main.tsx hoặc tại đây
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const FeaturedProductsSection = ({ products }: { products: any }) => {

  function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#E82223", borderRadius: "50%", fontSize:"32px"}}
      onClick={onClick}
    />
  );
}
  function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#E82223", borderRadius: "50%", fontSize:"32px" }}
      onClick={onClick}
    />
  );
}

// Trong settings:
const settings = {
nextArrow: <NextArrow />,
prevArrow: <PrevArrow />,
    dots: true,
    infinite: products.length > 4, // Chỉ lặp nếu có nhiều sản phẩm
    speed: 500,
    slidesToShow: 4, // Mặc định hiện 4 cái (Desktop)
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1280, // xl
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1024, // lg/md
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640, // sm
        settings: {
          slidesToShow: 2, // Mobile hiện 2 cái
          arrows: false // Mobile ẩn mũi tên cho gọn
        }
      }
    ]
  };

  return (
    <div className="container mx-auto mb-12 px-4">
      <h2 className="text-[#181114] text-3xl font-bold leading-tight tracking-[-0.015em] pb-8">
        Sản phẩm nổi bật
      </h2>
      
      {/* Bỏ grid ở đây, Slider sẽ tự quản lý layout */}
      <div className="product-slider">
        <Slider {...settings}>
          {products.map((product: any) => (
            // Thêm padding nhẹ để các card không dính sát vào nhau
            <div key={product._id} className="px-2">
              <ProductCardHome product={product} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeaturedProductsSection;