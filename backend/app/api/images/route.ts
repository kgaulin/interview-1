import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.formData();
  const file: File | null = data.get("file") as unknown as File;

  if (!file) {
    return NextResponse.json({ success: false });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  console.log(data.get("name"));
  return NextResponse.json({ success: true });
}

export async function GET(request: NextRequest) {
  return NextResponse.json({ success: true });
}
