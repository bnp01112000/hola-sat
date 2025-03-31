import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';

const prisma = new PrismaClient();

export async function GET(req) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { username: session.user.name },
  });

  const allUserTests = await prisma.userTest.findMany({
    where: { userId: user.id },
    include: {
      test: { include: { questions: true } },
      answers: true,
    },
  });

  const finished = [];
  const unfinished = [];

  for (const ut of allUserTests) {
    const base = {
      title: ut.test.title,
      completedAt: ut.completedAt,
      score: ut.score,
      answeredCount: ut.answers.length,
      totalQuestions: ut.test.questions.length,
      id: ut.test.id,
    };

    if (ut.status === 'FINISHED') {
      finished.push(base);
    } else {
      unfinished.push(base);
    }
  }

  return new Response(JSON.stringify({ finished, unfinished }));
}
