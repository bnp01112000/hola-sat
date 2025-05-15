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
  const { testId, score } = body;

  const user = await prisma.user.findUnique({
    where: { username: session.user.name },
  });

  const userTest = await prisma.userTest.findFirst({
    where: {
      userId: user.id,
      testId,
    },
  });

  if (!userTest) {
    return new Response(JSON.stringify({ error: 'UserTest not found' }), { status: 404 });
  }

  await prisma.userTest.update({
    where: { id: userTest.id },
    data: {
      status: 'FINISHED',
      completedAt: new Date(),
      score
    },
  });

  return new Response(JSON.stringify({ success: true }));
}
