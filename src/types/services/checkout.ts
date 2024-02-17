import { Checkout } from "@prisma/client"
import BaseResponse from "../response"

export interface CheckoutResponse extends BaseResponse {
  data: Checkout
}

export interface CheckoutPayload {
  product_id: string
  qty: number
}
