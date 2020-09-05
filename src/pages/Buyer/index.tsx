import React from "react";
import BuyerLayout from "components/layout/BuyerLayout";
import Discover from "./Discover";
import SearchView from "./SearchView";
import Library from "./Library";

const Buyer = () => {
  return (
    <BuyerLayout>
      <Discover />
      <SearchView />
      <Library />
    </BuyerLayout>
  );
};

export default Buyer;
