import React from "react";
import { useProducts } from "contexts/SellerProductContext";
import SecondaryNavBar from "./SecondaryNavBar";
import ProductList from "./ProductList";
import ProductForm from "./ProductForm";

const ProductsContainer = () => {
  const { currentView } = useProducts();
  if (currentView === "list") {
    return (
      <>
        <SecondaryNavBar />
        <ProductList />
      </>
    );
  }
  return <ProductForm />;
};

export default ProductsContainer;
