// Imports
// ========================================================
import { NextResponse, type NextRequest } from "next/server";

// Config
// ========================================================
const ALLOWED_METHODS = "GET, POST, PUT, DELETE, OPTIONS";
const ALLOWED_ORIGIN = "*";
const ALLOWED_HEADERS = "Content-Type, Authorization";
const EXPOSED_HEADERS = "";
const MAX_AGE = "86400";
const CREDENTIALS = "true";

const corsOptions: {
  allowedMethods: string[];
  allowedOrigins: string[];
  allowedHeaders: string[];
  exposedHeaders: string[];
  maxAge?: number;
  credentials: boolean;
} = {
  allowedMethods: (ALLOWED_METHODS ?? "").split(","),
  allowedOrigins: (ALLOWED_ORIGIN ?? "").split(","),
  allowedHeaders: (ALLOWED_HEADERS ?? "").split(","),
  exposedHeaders: (EXPOSED_HEADERS ?? "").split(","),
  maxAge: (MAX_AGE && parseInt(MAX_AGE)) || undefined, // 60 * 60 * 24 * 30, // 30 days
  credentials: CREDENTIALS == "true",
};

// Middleware
// ========================================================
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  // Response
  const response = NextResponse.next();

  // Allowed origins check
  const origin = request.headers.get("origin") ?? "";
  if (
    corsOptions.allowedOrigins.includes("*") ??
    corsOptions.allowedOrigins.includes(origin)
  ) {
    response.headers.set("Access-Control-Allow-Origin", origin);
  }
  //Test

  // Set default CORS headers
  response.headers.set(
    "Access-Control-Allow-Credentials",
    corsOptions.credentials.toString()
  );
  response.headers.set(
    "Access-Control-Allow-Methods",
    corsOptions.allowedMethods.join(",")
  );
  response.headers.set(
    "Access-Control-Allow-Headers",
    corsOptions.allowedHeaders.join(",")
  );
  response.headers.set(
    "Access-Control-Expose-Headers",
    corsOptions.exposedHeaders.join(",")
  );
  response.headers.set(
    "Access-Control-Max-Age",
    corsOptions.maxAge?.toString() ?? ""
  );

  // Return
  return response;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/api/:path*",
};
