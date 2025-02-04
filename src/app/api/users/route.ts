import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const GET = async () => {
    const users = await prisma.user.findMany({})
    return NextResponse.json ({message: "Utilisateur créé", users});
};

export const POST = async (req: NextRequest) => {
    const body = await req.json();
    const name = body.data.name;
    const newUser = await prisma.user.create({
        data: {
            email: body.data.name + "@gmail.com",
            name: body.data.name,
        }
    })
    return NextResponse.json ({message: `Utilisateur, ${name}`, newUser});
};
