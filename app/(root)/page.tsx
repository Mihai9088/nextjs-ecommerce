import React from "react";
import {
  getFeaturedProducts,
  getLatestProducts,
} from "@/lib/actions/product.actions";
import ProductList from "@/components/shared/product/product-list";
import ProductCarousel from "@/components/shared/product/product-carousel";
import ViewAllProductsButton from "@/components/view-all-products-button";
import IconBoxes from "@/components/icon-boxes";
import DealCountdown from "@/components/deal-countdown";

const HomePage = async () => {
  const latestProducts = await getLatestProducts();
  const featuredProducts = await getFeaturedProducts();

  return (
    <div>
      {featuredProducts.length > 0 && (
        <ProductCarousel data={featuredProducts} />
      )}

      <ProductList title="Newest Arrivals" data={latestProducts} limit={4} />
      <ViewAllProductsButton />
      <DealCountdown />
      <IconBoxes />
    </div>
  );
};

export default HomePage;
