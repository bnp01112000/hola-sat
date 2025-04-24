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

  const allWords = await prisma.vocabulary.findMany({
    where: {
      userId: user.id,
      NOT: [
        { meaning: null },
        { importance: null }
      ]
    },
  });

  // Filter importance 3
  const highImportance = allWords.filter(w => w.importance === 3);
  const others = allWords.filter(w => w.importance !== 3);

  const selectedHigh = highImportance.sort(() => 0.5 - Math.random()).slice(0, 25);
  const selectedOthers = others.sort(() => 0.5 - Math.random()).slice(0, 15);

  const selected = [...selectedHigh, ...selectedOthers].slice(0, 40);

  return new Response(JSON.stringify({ words: selected }));
}

export async function POST(req) {
  const session = await getServerSession(authOptions);
  if (!session) return new Response('Unauthorized', { status: 401 });

  const { matches } = await req.json();

  const user = await prisma.user.findUnique({
    where: { username: session.user.name },
  });

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const words = await prisma.vocabulary.findMany({
    where: { userId: user.id },
  });

  let correct = 0;
  const wrongWordIds = [];

  for (const word of words) {
    if (matches[word.id]) {
      const userAnswer = matches[word.id].trim().toLowerCase();
      const actualMeaning = (word.meaning || '').trim().toLowerCase();

      if (userAnswer === actualMeaning) {
        correct++;
      } else {
        // Mark as forgotten
        await prisma.vocabulary.update({
          where: { id: word.id },
          data: { forgetCount: word.forgetCount + 1 },
        });

        // Track wrong word
        wrongWordIds.push(word.id);
      }
    }
  }

  // ✅ Create DailyChallenge with wrongWords connected
  await prisma.dailyChallenge.create({
    data: {
      userId: user.id,
      date: today,
      score: correct,
      total: Object.keys(matches).length,
      wrongWords: {
        connect: wrongWordIds.map(id => ({ id })),
      },
    },
  });

  return new Response(JSON.stringify({ correct, total: Object.keys(matches).length }));
}