import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/authOptions';

const prisma = new PrismaClient();

export async function POST(req) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  const body = await req.json();
  const { testId, questionId, answer } = body;

  const user = await prisma.user.findUnique({
    where: { username: session.user.name },
  });

  if (!user) {
    return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
  }

  const userTest = await prisma.userTest.findFirst({
    where: {
      userId: user.id,
      testId,
    },
  });

  if (!userTest) {
    return new Response(JSON.stringify({ error: 'UserTest not found' }), { status: 404 });
  }

  const question = await prisma.question.findUnique({
    where: { id: questionId },
  });

  if (!question) {
    return new Response(JSON.stringify({ error: 'Question not found' }), { status: 404 });
  }

  const correct = question.correctAnswer === answer;

  const existingAnswer = await prisma.userAnswer.findFirst({
    where: {
      userTestId: userTest.id,
      questionId,
    },
  });

  if (existingAnswer) {
    await prisma.userAnswer.update({
      where: { id: existingAnswer.id },
      data: { selectedAnswer: answer },
    });
  } else {
    await prisma.userAnswer.create({
      data: {
        userTestId: userTest.id,
        questionId,
        selectedAnswer: answer,
      },
    });
  }

  return new Response(JSON.stringify({ correct }), { status: 200 });
}
