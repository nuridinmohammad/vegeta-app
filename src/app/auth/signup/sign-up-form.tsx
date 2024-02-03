"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { hover } from "@/lib/hover";
import { cn } from "@/lib/utils";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemmaRegister } from "@/types/schema/Form";
import { RegisterProps } from "@/types/common/Form";

function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmationPassword, setShowConfirmationPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterProps>({
    resolver: zodResolver(schemmaRegister),
  });
  const onSubmit: SubmitHandler<RegisterProps> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-[100%] gap-2">
      <div className="w-[100%] text-3xl font-semibold tracking-widest mb-2 text-center">Buat akun baru</div>
      <Input className="w-[100%] p-4 rounded-sm" type="text" placeholder="Nama Lengkap" {...register("fullname")} error={errors.fullname?.message} />
      <Input className="w-[100%] p-4 rounded-sm" type="email" placeholder="Email" {...register("email")} error={errors.email?.message} />

      <Input
        className="w-[100%] p-4 rounded-sm"
        type={showPassword ? "text" : "password"}
        placeholder="Kata Sandi"
        suffix="Eye"
        onPressSuffix={() => setShowPassword(!showPassword)}
        {...register("password")}
        error={errors.password?.message}
      />
      <Input
        className="w-[100%] p-4 rounded-sm"
        type={showConfirmationPassword ? "text" : "password"}
        placeholder="Konfirmasi Kata Sandi"
        suffix="Eye"
        onPressSuffix={() => setShowConfirmationPassword(!showConfirmationPassword)}
        {...register("confirm_password")}
        error={errors.confirm_password?.message}
      />

      <Button className={cn("w-full bg-leaf mt-6", hover.shadow)}>Buat Akun</Button>
    </form>
  );
}

export default SignUpForm;
