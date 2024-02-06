import Response from "@/lib/api.response"
import { prisma } from "@/lib/prisma"
import { catchError } from "@/lib/utils"
import { User } from "@prisma/client"
import passwordHash from "password-hash"

export async function POST(req: Request) {
  try {
    const payload = await req.json()
    const user = await prisma.user.findUnique({
      where: {
        email: payload.email,
      },
    })

    if (!user?.email || !passwordHash.verify(payload.password, user.password)) {
      return Response({
        message: "Incorrect email and password!",
        status: 404,
      })
    }

    const data: Partial<User> = {
      ...user,
      password: undefined,
    }
    
    return Response({
      data,
      message: "Sign in Successfully",
      status: 201,
    })
  } catch (error: unknown) {
    const message = catchError(error)
    return Response({
      message,
      status: 500,
      data: error as object,
    })
  }
}
