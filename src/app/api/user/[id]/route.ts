import Response from "@/lib/api.response";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, params: Params) {
  const id = params.params.id;
  return Response({
    status: 200,
    message: `Succes get User by id ${id}`,
    data: [
      {
        id,
        name: "Mohammad Nuridin",
      },
    ],
  });
}
