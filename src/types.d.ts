type Owner = {
  name: string;
};

export type Product = {
  id: string;
  title: string;
  description?: string;
  sales: string | number;
  total: string | number;
  price: string | number;
  type: "classic" | "membership";
  owner?: Owner;
  cover?: string;
  content?: string;
};

export type Card = Pick<Product, "title" | "cover" | "owner" | "price">;

export type BuyerScreens = "Discover" | "Search" | "Library";
