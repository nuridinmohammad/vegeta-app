import Response from "@/lib/api.response";

export async function GET() {
  return Response({
    status: 200,
    message: "Success get all user",
    data: [
      {
        id: 1,
        name: "Mohammad",
      },
    ],
  });
}


export async function POST() {
  return Response({
    status: 200,
    message: "Success create user",
    data: [
      {
        id: 1,
        name: "Mohammad",
      },
    ],
  });
}
