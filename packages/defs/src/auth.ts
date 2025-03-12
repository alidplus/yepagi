import { z } from "zod";

export const zSigninSchema = z.object({
  email: z
    .string({ required_error: "z:required" })
    .email({ message: "z:invalid_email" }),
  password: z.string({ required_error: "z:required" }),
});

export type TSignin = z.infer<typeof zSigninSchema>;

export const zAccessSchema = z.object({
  accessToken: z.string({}),
});

export type TAccess = z.infer<typeof zAccessSchema>;
