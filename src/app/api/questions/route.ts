import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const GET = async () => {
    const questions = await prisma.question.findMany({})
    return NextResponse.json ({questions });
};

export const POST = async (req: NextRequest) => {
    //const {content} = await req.json ();
    const body = await req.json();
    const {content, qcmId} = body.data.content;
    const newQuestion = await prisma.question.create({
        data: {
            content,
            qcmId
        }
    })
    return NextResponse.json ({ newQuestion });
};
