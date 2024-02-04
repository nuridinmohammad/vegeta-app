"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { hover } from "@/lib/hover";
import { catchError, cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemmaLogin } from "@/types/schema/Form";
import { LoginProps } from "@/types/common/Form";
import { signIn } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";

function SignInForm() {
  const router = useRouter();
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>({ resolver: zodResolver(schemmaLogin) });

  const onSubmit = async (data: LoginProps) => {
    try {
      const user = await signIn("credentials", {
        email: data.email,
        password: data.password,
        callbackUrl: searchParams.get("callbackUrl") || "/",
        redirect: false,
      });

      if (!user?.error) {
        router.push(user?.url || "/");
      } else {
        toast({
          title: "Something went wrong",
          description: "Please check your email and password",
          variant: "destructive",
          duration: 2000,
        });
      }
    } catch (error) {
      const err = catchError(error);
      return err;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-[100%]">
      <div className="w-[100%] text-3xl font-semibold tracking-widest mb-2 text-center">Masuk akun anda</div>

      <Input className="w-[100%] p-4 rounded-sm" type="email" placeholder="Email" {...register("email")} error={errors.email?.message} />
      <div className="w-[100%] relative mt-4">
        <Input
          className="w-[100%] p-4 rounded-sm"
          type={showPassword ? "text" : "password"}
          placeholder="Kata Sandi"
          suffix="Eye"
          onPressSuffix={() => setShowPassword(!showPassword)}
          {...register("password")}
          error={errors.password?.message}
        />
      </div>

      <Button className={cn("w-[100%] bg-leaf mt-6", hover.shadow)} type="submit">
        Masuk
      </Button>
    </form>
  );
}

export default SignInForm;
