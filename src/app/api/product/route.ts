import Response from "@/lib/api.response"
import { prisma } from "@/lib/prisma"
import { catchError } from "@/lib/utils"

export async function GET() {
  try {
    const products = await prisma.product.findMany({})
    return Response({
      data: products,
      message: "Success get products",
      status: 200,
    })
  } catch (error: unknown) {
    const err = catchError(error)
    return Response({
      message: err,
      status: 500,
    })
  }
}
