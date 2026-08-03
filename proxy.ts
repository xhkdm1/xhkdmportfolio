import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const KAKAOT_ALIASES = new Set(["/projects/kakaoT", "/projects/kaakot"]);

export function proxy(request: NextRequest) {
  if (!KAKAOT_ALIASES.has(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  const canonicalUrl = request.nextUrl.clone();
  canonicalUrl.pathname = "/projects/kakaot";

  return NextResponse.redirect(canonicalUrl, 308);
}

export const config = {
  matcher: "/projects/:path*",
};
