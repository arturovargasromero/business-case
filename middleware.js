import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request) {
  const rutasPrivadas = [
    request.nextUrl.pathname.includes("/products"),
    request.nextUrl.pathname.includes("/profile"),
  ];
  const tokenUser = request.cookies.get("tokenUser");
  if (rutasPrivadas[0] || rutasPrivadas[1]) {
    if (tokenUser === undefined) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    try {
      const { payload } = await jwtVerify(
        tokenUser.value,
        new TextEncoder().encode("secret")
      );
      return NextResponse.next();
    } catch (error) {
      console.error(error);
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
  return NextResponse.next();
}
