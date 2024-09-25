import { PrismaClient} from '@prisma/client'

const prisma = new PrismaClient();

const book = {
    title: 'book',
    authorId: 1,
    currentlyBorrowedById:1,
    isbn:'dbjdjajda',
    };


const res = await prisma.book.create({data: book});
console.log(res);

