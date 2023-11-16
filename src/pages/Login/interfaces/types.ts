import { z } from "zod";
import { loginSchema } from "../../../schemas/login/schemas";

export type LoginType  = z.infer<typeof loginSchema> 