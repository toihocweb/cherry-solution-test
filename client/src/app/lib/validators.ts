import * as z from 'zod';


export const loginSchema = z.object({
  username: z.string().min(1, 'Username must not be empty'),
  password: z.string().min(1, 'Password must not be empty'),
});

export type LoginDto = z.infer<typeof loginSchema>;
