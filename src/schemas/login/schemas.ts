import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Deve ser um email válido"),
  password: z.string().min(1, "Senha é obrigatória"),
});