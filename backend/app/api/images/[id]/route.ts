import { db } from "@/drizzle/db";
import { images } from "@/drizzle/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  await db.delete(images).where(eq(images.id, params.id));

  return new NextResponse(null, { status: 204 });
}
