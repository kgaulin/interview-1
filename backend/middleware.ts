import { NextRequest, NextResponse } from "next/server";

const allowedOrigins = ["*"];

const corsOptions = {
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};
export function middleware(request: NextRequest) {
  // Check the origin from the request
  const origin = request.headers.get("origin") ?? "";

  // Handle preflighted requests
  const isPreflight = request.method === "OPTIONS";

  if (isPreflight) {
    const preflightHeaders = {
      "Access-Control-Allow-Origin": origin,
      ...corsOptions,
    };
    return NextResponse.json({}, { headers: preflightHeaders });
  }

  // Handle simple requests
  const response = NextResponse.next();

  response.headers.set("Access-Control-Allow-Origin", origin);

  Object.entries(corsOptions).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  console.log("middleware");

  return response;
}

export const config = {
  matcher: "/api/:path*",
};
