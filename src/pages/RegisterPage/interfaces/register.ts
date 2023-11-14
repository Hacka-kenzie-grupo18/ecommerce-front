import { z } from "zod";
import { userSchema, userSchemaRequest } from "../../../schemas/register/schemas";

export type UserType = z.infer<typeof userSchema> 

export type UserRequestType = z.infer<typeof userSchemaRequest> 