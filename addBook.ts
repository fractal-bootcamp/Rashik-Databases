import { PrismaClient} from './prisma/generated/client1'
import { PrismaClient as PrismaClient2 } from './prisma/generated/client2'
const prisma = new PrismaClient();
const prisma2 = new PrismaClient2();

const book = {
    title: 'book',
    authorId: 1,
    currentlyBorrowedById:1,
    isbn:'dbjdjajda',
    };


const res = await prisma.book.create({data: book});
const res2 = await prisma2.book.create({data: book});

console.log(res,res2);

