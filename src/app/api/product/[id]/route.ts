import Response from "@/lib/api.response"
import { prisma } from "@/lib/prisma"
import { catchError } from "@/lib/utils"
import { Params } from "next/dist/shared/lib/router/utils/route-matcher"

export async function GET(req: Request, params: Params) {
  try {
    const product = await prisma.product.findUnique({
      where: {
        id: params.params.id,
      },
    })

    return Response({
      message: "Get product by ID",
      data: product as Record<string, unknown> | { [key: string]: any },
    })
  } catch (error) {
    const err = catchError(error)
    return Response({
      message: err,
      status: 500,
    })
  }
}
