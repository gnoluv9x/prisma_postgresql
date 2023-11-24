import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const newUser = await prisma.user.create({
    data: {
      name: "Alice",
      email: "alice@prisma.io",
      posts: {
        create: {
          title: "Hello World",
        },
      },
    },
  });
  console.log("============== Debug_here newUser ==============");
  console.dir(newUser, { depth: null });

  const allUsers = await prisma.user.findMany({
    include: { posts: true },
  });
  console.log("============== Debug_here allUsers ==============");
  console.dir(allUsers, { depth: null });
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect());
