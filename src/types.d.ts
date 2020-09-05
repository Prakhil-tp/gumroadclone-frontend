export type Product = {
  id: string;
  title: string;
  description?: string;
  sales: string | number;
  total: string | number;
  price: string | number;
  type: "classic" | "membership";
};

export type BuyerScreens = "Discover" | "Search" | "Library";
