import { NextResponse } from 'next/server';
import { db } from '@/lib/drizzle';
import { serializeBigInts } from '@/lib/serializer';
import { stats, responses } from '@/lib/drizzle';
import { eq } from 'drizzle-orm';

export async function GET() {
  try {
    // Use db.select() directly with the schema tables
    const statsResult = await db.select().from(stats).where(eq(stats.id, 1));
    const responsesResult = await db.select().from(responses);

    if (!statsResult || statsResult.length === 0) {
      return NextResponse.json({ error: 'Stats not found' }, { status: 404 });
    }

    const analyticsData = {
      stats: serializeBigInts(statsResult[0]), // Access the first element as findFirst is not used here
      responses: serializeBigInts(responsesResult),
    };

    return NextResponse.json(analyticsData);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch analytics data' }, { status: 500 });
  }
}
