import { PrismaClient } from '@prisma/client';

export async function GET() {
    const prisma = new PrismaClient();
    prisma.$connect().then(() => {
        console.log('oie');
    })

    return Response.json('ok');
}