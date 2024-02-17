import { Product } from "@prisma/client";
import BaseResponse from "../response";

export interface ProductResponse extends BaseResponse {
    data: Product;
  }
  
  export interface ProductsResponse extends BaseResponse {
    data: {
      total: number;
      data: Product[];
    };
  }
  
  export interface ProductAPIParams {
    page?: string | undefined;
    category?: string | undefined;
    min_price?: string | undefined;
    max_price?: string | undefined;
    rating?: string | undefined;
  }
  