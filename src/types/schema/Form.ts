import zod from "zod";

const passwordValidation = zod
  .string()
  .min(1, "must be fill")
  .regex(/^(?=.*[a-z])(?=.*[A-Z]).*$/, "include both lower and upper case characters")
  .regex(/^(?=.*\d)(?=.*[!@#$%^&*()_+{}:"<>?\\[\];',./`~]).*$/, "include at least one number and symbol");

export const schemmaLogin = zod.object({
  email: zod.string().email(),
  password: zod.string().min(6),
});

export const schemmaRegister = zod
  .object({
    email: zod.string().email(),
    fullname: zod.string().min(3),
    password: passwordValidation.refine((data) => (data.length < 6 ? false : true), {
      message: "be at least 6 characters long",
    }),
    confirm_password: zod
      .string()
      .min(1, "must be fill")
      .refine((data) => (data.length < 6 ? false : true), {
        message: "be at least 6 characters long",
      }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords don't match",
    path: ["password"],
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords don't match",
    path: ["confirm_password"],
  });
