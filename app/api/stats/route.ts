import { NextResponse } from 'next/server';
import { db } from '@/lib/drizzle';
import { serializeBigInts } from '@/lib/serializer';
import { stats } from '@/lib/drizzle';
import { eq } from 'drizzle-orm';

export async function GET() {
  try {
    const statsResult = await db.select().from(stats).where(eq(stats.id, 1));

    if (!statsResult || statsResult.length === 0) {
      return NextResponse.json({ error: 'Stats not found' }, { status: 404 });
    }

    return NextResponse.json(serializeBigInts(statsResult[0]));
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 });
  }
}
