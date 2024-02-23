import { User } from "@/types/api/user";
import { NextResponse } from "next/server";

const Response = ({ message = "", data, status = 200 }: User) =>
  NextResponse.json(
    {
      success: true,
      message,
      data,
    },
    {
      status,
    }
  );

export default Response;
