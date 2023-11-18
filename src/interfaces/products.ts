import { z } from "zod";
import { productSchema } from "../schemas/product/product";

export interface IProducts {
  id: number;
  name: string;
  color: string;
  size: string[];
  price: string;
  theme: string;
  description: string;
  rating: string;
  image: string;
  sex: string;
  stock: number;
}

export type TProducts = z.infer<typeof productSchema>;
