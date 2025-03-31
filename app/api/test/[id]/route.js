import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/route';

const prisma = new PrismaClient();

export async function GET(req) {
  const url = new URL(req.url);
  const testId = url.pathname.split('/').pop(); // ✅ Grab [id] from URL path

  const session = await getServerSession(authOptions);
  if (!session) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { username: session.user.name },
  });

  const userTest = await prisma.userTest.findFirst({
    where: {
      testId,
      userId: user.id,
    },
    include: {
      answers: true,
      test: {
        include: { questions: true },
      },
    },
  });

  const answeredMap = {};
  for (const a of userTest.answers) {
    answeredMap[a.questionId] = a.selectedAnswer;
  }

  const questions = userTest.test.questions.map((q) => ({
    id: q.id,
    number: q.number,
    selectedAnswer: answeredMap[q.id] || null,
  }));

  return new Response(JSON.stringify({ questions, title: userTest.test.title }));
}
