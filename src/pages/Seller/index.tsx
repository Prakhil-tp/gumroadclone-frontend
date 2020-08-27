import React from "react";
import SellerLayout from "components/layout/SellerLayout";
import SecondaryNavBar from "./components/SecondaryNavBar";
import ProductList from "./components/ProductList";

const Seller: React.FC = () => {
  return (
    <SellerLayout>
      <>
        <SecondaryNavBar />
        <ProductList />
      </>
    </SellerLayout>
  );
};

export default Seller;
