const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const testTitle = "VOCA 1";
  const answers = "CAACABDADB";
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
    },
  });

  const testTitle2 = "VOCA 2";
  const answers2 = "BBADABDBCA";
  const test2 = await prisma.test.create({
    data: {
      title: testTitle2,
      questions: {
        create: answers2.split('').map((answer, i) => ({
          number: i + 1,
          correctAnswer: answer
        }))
      }
    },
  });
  await prisma.userTest.create({
    data: {
      userId: user.id,
      testId: test2.id,
      status: 'UNFINISHED',
    },
  });

  const testTitle3 = "VOCA 3";
  const answers3 = "CBBBAAADBA";
  const test3 = await prisma.test.create({
    data: {
      title: testTitle3,
      questions: {
        create: answers3.split('').map((answer, i) => ({
          number: i + 1,
          correctAnswer: answer
        }))
      }
    },
  });
  await prisma.userTest.create({
    data: {
      userId: user.id,
      testId: test3.id,
      status: 'UNFINISHED',
    },
  });

  const testTitle4 = "VOCA 4";
  const answers4 = "BBAAABABAD";
  const test4 = await prisma.test.create({
    data: {
      title: testTitle4,
      questions: {
        create: answers4.split('').map((answer, i) => ({
          number: i + 1,
          correctAnswer: answer
        }))
      }
    },
  });
  await prisma.userTest.create({
    data: {
      userId: user.id,
      testId: test4.id,
      status: 'UNFINISHED',
    },
  });

  /** 
   const answers= "CABCBCCBBCCBACBBCCCBBCBCBBCBBC"
   await prisma.test.update({
     where: { title: "VOCAB May 5" },
     data: {
       questions: {
         create: answers.split("").map((answer, i) => ({
           number: i+1, 
           correctAnswer: answer
         }))
       },
     },
   });
 
   
  
   await prisma.user.createMany({
     data: [
       { username: 'minhtrang', password: '12345' },
       { username: 'chauanh', password: '12345' },
     ],
   });
 
 await prisma.question.deleteMany({
   where: {
     testId: "cmaatmkj40000nw5m5952arp5",
   },
 });
 */
  /** 
    const user = await prisma.user.findUnique({
      where: { username: 'minhduc' },
    });
    if (!user) {
      throw new Error("User 'minhduc' not found!");
    }
  
    const answers= "CABCBCCBBCCBACBBCCCBBCBCBBCBBC"
    await prisma.test.update({
      where: { title: "Vocab May 5" },
      data: {
        questions: {
          create: answers.split("").map((answer, i) => ({
            number: i+1, 
            correctAnswer: answer
          }))
        },
      },
    })
      */
  /** 
   * 
  const testTitle = "SATMOCKS Test 2 Module 2";
  const answers = "BDAADDDBCBBBACDCBCBAADCBCCCBABBDB";
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
    */
  console.log('4 Tests seeded!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
