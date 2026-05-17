import { useEffect, useState } from "react";

import HeroSection from "../../components/cus/home/HeroSection";
import FeaturedProductsSection from "../../components/cus/home/FeaturedProducts";
import BestSellerSection from "../../components/cus/home/BestSellerSection";
import PromotionSection from "../../components/cus/home/PromotionSection";
import AboutSection from "../../components/cus/home/AboutSection";

import { productApi } from "../../api/productApi";
import { socket } from "../../api/socket";

const HomePage = () => {
  const [bestSellerProducts, setBestSellerProducts] = useState<any[]>([]);

  const [featuredProducts, setFeaturedProducts] = useState<any[]>([]);

  // =========================
  // fetch bestseller
  // =========================
  const fetchBestSellerProducts = async () => {
    try {
      const res = await productApi.getAll();

      // stock giảm dần
      const sortedProducts = [...res.data].sort((a, b) => b.stock - a.stock);

      setBestSellerProducts(sortedProducts.slice(0, res.data.length));
    } catch (error) {
      console.error(error);
    }
  };

  // =========================
  // fetch featured
  // =========================
  const fetchFeaturedProducts = async () => {
    try {
      const res = await productApi.getFeatured();

      setFeaturedProducts(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  // =========================
  // first load
  // =========================
  useEffect(() => {
    fetchBestSellerProducts();

    fetchFeaturedProducts();
  }, []);

  // =========================
  // realtime featured
  // =========================
  useEffect(() => {
    socket.on("featured-updated", () => {
      fetchFeaturedProducts();
    });

    return () => {
      socket.off("featured-updated");
    };
  }, []);

  return (
    <div>
      <HeroSection />

      <FeaturedProductsSection products={featuredProducts} />

      <BestSellerSection products={bestSellerProducts} />

      <PromotionSection />

      <AboutSection />
    </div>
  );
};

export default HomePage;
