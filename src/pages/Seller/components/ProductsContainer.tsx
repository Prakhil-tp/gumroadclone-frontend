import React from "react";
import { useProducts } from "contexts/SellerProductContext";
import { ProductFromProvider } from "contexts/ProductFormContext";
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
  return (
    <ProductFromProvider>
      <ProductForm />
    </ProductFromProvider>
  );
};

export default ProductsContainer;
