"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { hover } from "@/lib/hover"
import { catchError, cn } from "@/lib/utils"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { schemmaRegister } from "@/types/schema/Form"
import { RegisterProps } from "@/types/common/Form"
import { useRegisterMutation } from "@/services/auth"
import { signIn } from "next-auth/react"
import { useToast } from "@/components/ui/use-toast"
import { useRouter, useSearchParams } from "next/navigation"

function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmationPassword, setShowConfirmationPassword] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterProps>({
    resolver: zodResolver(schemmaRegister),
  })
  const [registerMutation] = useRegisterMutation()
  const { toast } = useToast()
  const router = useRouter()
  const searchParams = useSearchParams()

  const onSubmit = async (data: RegisterProps) => {
    try {
      const res = await registerMutation(data).unwrap()
      if (res.success) {
        const user = await signIn("credentials", {
          email: data.email,
          password: data.password,
          callbackUrl: searchParams.get("callbackUrl") || "/",
          redirect: false,
        })
        router.push(user?.url || "/")
      } else {
        toast({
          title: "Something went wrong",
          description: "Please check your email and password",
          variant: "destructive",
          duration: 2000,
        })
      }
    } catch (error) {
      const err = catchError(error)
      toast({
        title: "Something went wrong",
        description: err,
        variant: "destructive",
        duration: 2000,
      })
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-[100%] gap-2">
      <div className="w-[100%] text-3xl font-semibold tracking-widest mb-2 text-center">Buat akun baru</div>
      <Input className="w-[100%]" type="text" placeholder="Nama Lengkap" {...register("fullname")} error={errors.fullname?.message} />
      <Input className="w-[100%]" type="email" placeholder="Email" {...register("email")} error={errors.email?.message} />

      <Input className="w-[100%]" type={showPassword ? "text" : "password"} placeholder="Kata Sandi" suffix="Eye" onPressSuffix={() => setShowPassword(!showPassword)} {...register("password")} error={errors.password?.message} />
      <Input
        className="w-[100%]"
        type={showConfirmationPassword ? "text" : "password"}
        placeholder="Konfirmasi Kata Sandi"
        suffix="Eye"
        onPressSuffix={() => setShowConfirmationPassword(!showConfirmationPassword)}
        {...register("confirm_password")}
        error={errors.confirm_password?.message}
      />

      <Button className={cn("w-full bg-leaf mt-6", hover.shadow)}>Buat Akun</Button>
    </form>
  )
}

export default SignUpForm
