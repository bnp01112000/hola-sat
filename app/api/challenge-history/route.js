import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/authOptions';
import { format } from 'date-fns';

const prisma = new PrismaClient();

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) return new Response('Unauthorized', { status: 401 });

  const user = await prisma.user.findUnique({
    where: { username: session.user.name },
  });

  // Fetch last 7 days
  const today = new Date();
  const days = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    days.push(format(d, 'yyyy-MM-dd'));
  }

  const raw = await prisma.dailyChallenge.findMany({
    where: { userId: user.id },
    orderBy: { date: 'desc' },
  });

  const records = raw.map(r => ({
    date: format(r.date, 'yyyy-MM-dd'),
    score: r.score,
    total: 40,
  }));

  return new Response(JSON.stringify({ records, days }));
}
