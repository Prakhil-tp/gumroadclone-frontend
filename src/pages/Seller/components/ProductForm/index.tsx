import React from "react";
import { useProducts } from "contexts/SellerProductContext";
import { useProductForm } from "contexts/ProductFormContext";
import DetailsForm from "./DetailsForm";
import MembershipForm from "./MembershipForm";

const ProductForm = () => {
  const { currentProductId, products } = useProducts();
  const { currentForm, currentProduct: productDetails } = useProductForm();
  let currentProduct;

  if (currentProductId) {
    currentProduct = products.find(
      (product) => product.id === currentProductId
    );
  } else if (currentForm === "DetailsForm") {
    currentProduct = productDetails;
  }

  return currentProduct ? (
    <DetailsForm currentProduct={currentProduct} />
  ) : (
    <MembershipForm />
  );
};

export default ProductForm;
