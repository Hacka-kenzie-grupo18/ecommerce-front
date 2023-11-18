import { z } from "zod";

const VALUES = ["Masculino", "Feminino", "Unissex"] as const;

export const productSchema = z.object({
  uuid: z.string().uuid(),
  title: z.string(),
  images: z.object({
    imagePrincipal: z.string(),
    image1: z.string(),
    image2: z.string(),
  }),
  description: z.string(),
  price: z.number(),
  sex: z.enum(VALUES),
  size: z.array(z.string()),
  color: z.array(z.string()),
  theme: z.array(z.string()),
  promotion: z.number(),
  category: z.string(),
  stock: z.number(),
  rating: z.number().nullable(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
});

export const sizesSchemas = z.object({
  uuid: z.string().uuid(),
  size: z.string().max(4),
});

export const themeSchema = z.object({
  uuid: z.string().uuid(),
  theme: z.string().max(155),
});

export const colorsSchema = z.object({
  uuid: z.string().uuid(),
  color: z.string().max(155),
});

export const imagesSchema = z.object({
  uuid: z.string().uuid(),
  images_urls: z.string(),
});

export const categoriesSchema = z.object({
  uuid: z.string().uuid(),
  category: z.string(),
});
