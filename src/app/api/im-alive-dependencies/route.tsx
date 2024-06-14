import { PrismaClient } from '@prisma/client';

export async function GET() {
    const prisma = new PrismaClient();
    let hasDbConnection = true;

    try {
        await prisma.$connect();
    } catch (e) {
        console.log(e);
        hasDbConnection = false;
    }

    const healthyConnections = {
        db: hasDbConnection
    };

    return Response.json(healthyConnections);
}