import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, {
    params
}: {params: Promise<{id: string}>}
) => {
    const {id}= await params
    return NextResponse.json ({message: `Utilisateur, ${id}`}, {status:210});
};