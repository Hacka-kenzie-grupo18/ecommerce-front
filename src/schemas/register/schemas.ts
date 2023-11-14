import { z } from "zod";

export const userSchema = z.object({
  uuid: z.string().uuid(),
  name: z.string().min(1, "Nome é obrigatório").max(255),
  email: z.string().min(2, "Email é obrigatório").email("Deve ser um email válido"),
  cpf: z
    .string()
    .min(1, "CPF é obrigatório")
    .max(14, "Número máximo de caracteres é 14"),
  phone: z.string().max(120, "O máximo de número é 120").nullish(),
  description: z.string().nullish(),
});

export const userSchemaRequest = userSchema
  .omit({
    uuid: true,
  })
  .extend({
    cep: z
      .string()
      .max(11, "Número máximo de números é 11")
      .min(1, "CEP é obrigatório"),
    state: z.string().max(4, "Máximo de números é 4"),
    city: z.string().max(50, "Máximo de números é 50"),
    street: z.string().max(255),
    number: z.string().max(255, "O número é obrigatório"),
    password: z
      .string()
      .min(6, "Senha deve ter no mínimo 6 caracteres")
      .regex(new RegExp(".*[A-Z].*"), "Deve ter uma letra maiúscula")
      .regex(new RegExp(".*[a-z].*"), "Deve ter uma letra minúscula")
      .regex(new RegExp(".*\\d.*"), "Deve ter um número")
      .regex(
        new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"),
        "Deve ter um caractere especial"
      ),
    confirmPassword: z.string().min(1, "Confirmação de senha requerida"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "As senhas não são iguais",
  });