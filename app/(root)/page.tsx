import React from "react";
import { Button } from "@/components/ui/button";
import sampleData from "@/db/sample-data";
import ProductList from "@/components/shared/product/product-list";

const HomePage = async () => {
  return (
    <>
      <ProductList
        data={sampleData.products}
        title="Newest Arrivals"
        limit={4}
      />
    </>
  );
};

export default HomePage;
