import { z } from "zod";

export const zSignupSchema = z.object({
  name: z.string(),
  email: z
    .string({ required_error: "z:required" })
    .email({ message: "z:invalid_email" }),
  password: z.string({ required_error: "z:required" }),
});

export type TSignup = z.infer<typeof zSignupSchema>;

export const zSigninSchema = z.object({
  email: z
    .string({ required_error: "z:required" })
    .email({ message: "z:invalid_email" }),
  password: z.string({ required_error: "z:required" }),
});

export type TSignin = z.infer<typeof zSigninSchema>;

export const zAccessSchema = z.object({
  // accessToken: z.string({}),
  refreshToken: z.string({}),
});

export type TAccess = z.infer<typeof zAccessSchema>;

export const zRefreshSchema = z.object({
  refreshToken: z.string({}),
});

export type TRefresh = z.infer<typeof zRefreshSchema>;
