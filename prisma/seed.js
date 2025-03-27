const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      { username: 'minhduc', password: '12345' },
      { username: 'dieulinh', password: '12345' },
      { username: 'david', password: '12345' },
    ],
  });

  console.log('Users seeded!');
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });