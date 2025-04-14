import React from "react";
import { Button } from "@/components/ui/button";
import { getLatestProducts } from "@/lib/actions/product.actions";
import ProductList from "@/components/shared/product/product-list";

const HomePage = async () => {
  const latestProducts = await getLatestProducts();

  return (
    <>
      <ProductList data={latestProducts} title="Newest Arrivals" limit={4} />
    </>
  );
};

export default HomePage;
