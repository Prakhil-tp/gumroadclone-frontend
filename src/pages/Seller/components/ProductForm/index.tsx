import React from "react";
import { useProducts } from "contexts/SellerProductContext";
import DetailsForm from "./DetailsForm";
import MembershipForm from "./MembershipForm";

const ProductForm = () => {
  const { currentProductId, products } = useProducts();
  let currentProduct;

  if (currentProductId) {
    currentProduct = products.find(
      (product) => product.id === currentProductId
    );
  }

  return currentProduct ? (
    <DetailsForm currentProduct={currentProduct} />
  ) : (
    <MembershipForm />
  );
};

export default ProductForm;
