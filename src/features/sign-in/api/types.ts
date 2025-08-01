import { z } from "zod";

export const SignInSchema = z.object({
	email: z.email().min(1, "Email is required"),
	password: z.string().min(1, "Password is required"),
});

export type SignInFormData = z.infer<typeof SignInSchema>;
