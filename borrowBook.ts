import { PrismaClient} from './prisma/generated/client1'
import { PrismaClient as PrismaClient2 } from './prisma/generated/client2'
const prisma = new PrismaClient();
const prisma2 = new PrismaClient2();

const res = await prisma.book.update({
    where: {
        id: 1,
      },
      data: {
        currentlyBorrowedById: 1,
      },
});
const res2 = await prisma2.book.update({
    where: {
        id: 1,
      },
      data: {
        currentlyBorrowedById: 6,
      },
});



