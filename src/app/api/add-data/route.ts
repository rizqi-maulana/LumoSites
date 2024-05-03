import { createClient } from "@/utils/supabase/client";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
    const supabase = createClient()
    const body = await request.json();
    await supabase.from('Banner').insert({ banner_link: body.BannerLink, banner_name: body.FileName })
    console.log(body.BannerLink, body.FileName);

    return NextResponse.json({ status: 'success' });
}