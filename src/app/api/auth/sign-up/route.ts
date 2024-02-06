import Response from "@/lib/api.response";
import { prisma } from "@/lib/prisma";
import { Prisma, User } from "@prisma/client";
import { NextRequest } from "next/server";
import passwordHas from "password-hash";

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json();
    
    const data: Prisma.UserCreateInput = {
      fullname: payload.fullname,
      email: payload.email,
      password: passwordHas.generate(payload.password),
    };
    const user = await prisma.user.create({
      data,
    });
    const dataRes: Partial<User> = {
      ...user,
      password: undefined,
    };

    return Response({
      message: "User registered successfully",
      data: dataRes,
    });
  } catch (error: unknown) {
    return Response({
      message: "User registered failed",
      data: error as any,
      status: 500,
    });
  }
}
