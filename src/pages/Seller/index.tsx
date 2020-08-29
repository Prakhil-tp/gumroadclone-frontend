import React from "react";
import SellerLayout from "components/layout/SellerLayout";
import { ProductsProvider } from "contexts/SellerProductContext";
import ProductsContainer from "./components/ProductsContainer";

const Seller = () => {
  return (
    <SellerLayout>
      <ProductsProvider>
        <ProductsContainer />
      </ProductsProvider>
    </SellerLayout>
  );
};

export default Seller;
