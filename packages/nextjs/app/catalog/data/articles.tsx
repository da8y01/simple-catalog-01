export type Article = {
  id: string;
  name: string;
  price: string;
  description: string;
  image?: string;
  inStock?: boolean;
};

export const articles: Article[] = [
  {
    id: "1",
    name: "Handcrafted Mug",
    price: "0.01 ETH",
    description: "Ceramic mug made by local artisans, perfect for your morning coffee.",
    inStock: true,
  },
  {
    id: "2",
    name: "Vintage T-Shirt",
    price: "0.015 ETH",
    description: "Limited edition vintage style t-shirt, made from organic cotton.",
    inStock: true,
  },
  {
    id: "3",
    name: "Leather Wallet",
    price: "0.025 ETH",
    description: "Genuine leather wallet with multiple card slots and bill compartment.",
    inStock: false,
  },
  {
    id: "4",
    name: "Wooden Key Holder",
    price: "0.008 ETH",
    description: "Hand-carved wooden key holder with magnetic hooks.",
    inStock: true,
  },
  {
    id: "5",
    name: "Scented Candle",
    price: "0.012 ETH",
    description: "Soy wax candle with natural lavender scent, 40 hour burn time.",
    inStock: true,
  },
  {
    id: "6",
    name: "Notebook Set",
    price: "0.009 ETH",
    description: "Set of 3 hardcover notebooks with recycled paper pages.",
    inStock: true,
  },
];
