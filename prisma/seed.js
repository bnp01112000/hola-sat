const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const testTitle = "SATMOCKS Test 2 Module 2";
  const answers = "BDAADDDBCBBBACDCBCBAADCBCCCBABBDB";
  /** 
  await prisma.user.createMany({
    data: [
      { username: 'minhduc', password: '12345' },
      { username: 'dieulinh', password: '12345' },
      { username: 'david', password: '12345' },
    ],
  });
*/
  const user = await prisma.user.findUnique({
    where: { username: "minhduc" },
  });

  if (!user) {
    throw new Error("User 'minhduc' not found!");
  }
  const test = await prisma.test.create({
    data: {
      title: testTitle,
      questions: {
        create: answers.split('').map((answer, i) => ({
          number: i + 1,
          correctAnswer: answer
        }))
      }
    },
  });
  await prisma.userTest.create({
    data: {
      userId: user.id,
      testId: test.id,
      status: 'UNFINISHED',
      timeTaken: 60, // 45 minutes
      completedAt: new Date('2025-03-27T00:00:00Z'),
    },
  });

  console.log('Users and Tests seeded!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });