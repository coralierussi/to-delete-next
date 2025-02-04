import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const GET = async () => {
    const qcms = await prisma.qCM.findMany({})
    return NextResponse.json ({message: "Hello, World!", qcms});
};

export const POST = async (req: NextRequest) => {
    //const {title} = await req.json ();
    const body = await req.json();
    const title = body.data.title;
    const newQCM = await prisma.qCM.create({
        data: {
            titre: body.data.title,
            imageSrc: ""
            //imgSrc: body.data.imgSrc,
        }
    })
    return NextResponse.json ({message: `Question 1: ${title} `, newQCM});
};
