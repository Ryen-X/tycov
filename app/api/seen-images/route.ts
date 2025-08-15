import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/drizzle';
import { responses } from '@/lib/drizzle';
import { eq } from 'drizzle-orm';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const userSession = searchParams.get('user_session');

    if (!userSession) {
      return NextResponse.json({ error: 'User session not provided' }, { status: 400 });
    }

    const seenImages = await db.select({ image_id: responses.image_id })
                               .from(responses)
                               .where(eq(responses.user_session, userSession));

    const uniqueSeenImageIds = Array.from(new Set(seenImages.map(item => item.image_id)));

    return NextResponse.json({ seenImages: uniqueSeenImageIds });
  } catch (error) {
    console.error('Failed to fetch seen images:', error);
    return NextResponse.json({ error: 'Failed to fetch seen images' }, { status: 500 });
  }
}
