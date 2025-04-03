import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/authOptions';

const prisma = new PrismaClient();

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) return new Response('Unauthorized', { status: 401 });

  const user = await prisma.user.findUnique({
    where: { username: session.user.name },
  });

  const words = await prisma.vocabulary.findMany({
    where: { userId: user.id },
    orderBy: { word: 'asc' },
  });

  return new Response(JSON.stringify({ words }));
}

export async function POST(req) {
  const session = await getServerSession(authOptions);
  if (!session) return new Response('Unauthorized', { status: 401 });

  const { word } = await req.json();
  const cleanWord = word.trim().toLowerCase();

  const user = await prisma.user.findUnique({
    where: { username: session.user.name },
  });

  const existing = await prisma.vocabulary.findFirst({
    where: {
      userId: user.id,
      word: cleanWord,
    },
  });

  let message = '';
  if (existing) {
    await prisma.vocabulary.update({
      where: { id: existing.id },
      data: { forgetCount: existing.forgetCount + 1 },
    });
    message = 'Word already exists. Forget count increased.';
  } else {
    await prisma.vocabulary.create({
      data: {
        userId: user.id,
        word: cleanWord,
      },
    });
    message = 'Word added successfully!';
  }

  const updatedWords = await prisma.vocabulary.findMany({
    where: { userId: user.id },
    orderBy: { word: 'asc' },
  });

  return new Response(JSON.stringify({ message, updatedWords }));
}

export async function PATCH(req) {
  const session = await getServerSession(authOptions);
  if (!session) return new Response('Unauthorized', { status: 401 });

  const { id, meaning, importance } = await req.json();

  const updated = await prisma.vocabulary.update({
    where: { id },
    data: {
      meaning: meaning ?? undefined,
      importance: importance ?? undefined,
    },
  });

  const user = await prisma.user.findUnique({
    where: { username: session.user.name },
  });

  const updatedWords = await prisma.vocabulary.findMany({
    where: { userId: user.id },
    orderBy: { word: 'asc' },
  });

  return new Response(JSON.stringify({ updatedWords }));
}
