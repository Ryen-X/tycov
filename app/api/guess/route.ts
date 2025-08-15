import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/drizzle';
import { serializeBigInts } from '@/lib/serializer';
import { responses, stats } from '@/lib/drizzle';
import { eq } from 'drizzle-orm';

export async function POST(req: NextRequest) {
  try {
    const { user_session, image_id, image_label, user_choice } = await req.json();

    if (!user_session || !image_id || !image_label || !user_choice) {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
    }

    const correct = image_label === user_choice;

    await db.insert(responses).values({
      user_session,
      image_id,
      image_label,
      user_choice,
      correct,
    });

    // Fetch current stats using db.select()
    const currentStatsResult = await db.select().from(stats).where(eq(stats.id, 1));

    if (!currentStatsResult || currentStatsResult.length === 0) {
      // Handle case where stats do not exist, perhaps create them
      return NextResponse.json({ error: 'Stats not found, cannot update' }, { status: 404 });
    }

    const currentStats = currentStatsResult[0]; // Get the first (and only) result

    // Calculate new stats
    const newTotalResponses = currentStats.total_responses + 1;
    const newCorrectReal = currentStats.correct_real + (correct && image_label === 'real' ? 1 : 0);
    const newIncorrectReal = currentStats.incorrect_real + (!correct && image_label === 'real' ? 1 : 0);
    const newCorrectAi = currentStats.correct_ai + (correct && image_label === 'ai' ? 1 : 0);
    const newIncorrectAi = currentStats.incorrect_ai + (!correct && image_label === 'ai' ? 1 : 0);

    // Update the aggregated stats
    const updatedStats = await db.update(stats).set({
      total_responses: newTotalResponses,
      correct_real: newCorrectReal,
      incorrect_real: newIncorrectReal,
      correct_ai: newCorrectAi,
      incorrect_ai: newIncorrectAi,
    }).where(eq(stats.id, 1));

    return NextResponse.json(serializeBigInts(updatedStats));
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to update stats' }, { status: 500 });
  }
}
