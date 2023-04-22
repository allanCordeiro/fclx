import { NextRequest, NextResponse } from "next/server";
import { encode } from "next-auth/jwt";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const user = {
    name: "admin",
    sub: body.user_id ?? "4f5cf821-80ea-4556-bff4-444e47e4ef68",
  };

  const secret = process.env.NEXTAUTH_SECRET as string;

  const token = await encode({
    secret,
    token: user,
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });
  return NextResponse.json({ token });
}