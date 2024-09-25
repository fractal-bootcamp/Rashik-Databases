import { PrismaClient} from '@prisma/client'

const prisma = new PrismaClient();

const res = await prisma.book.update({
    where: {
        id: 1,
      },
      data: {
        currentlyBorrowedById: 6,
      },
});
console.log(res);



