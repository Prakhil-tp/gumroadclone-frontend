import React from "react";
import SellerLayout from "components/layout/SellerLayout";
import SecondaryNavBar from "./components/SecondaryNavBar";
import TabBody from "./components/TabBody";

const Seller: React.FC = () => {
  return (
    <SellerLayout>
      <>
        <SecondaryNavBar />
        <TabBody />
      </>
    </SellerLayout>
  );
};

export default Seller;
