import { createClient } from "@/utils/supabase/client";
import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export const GET = async () => {
    const supabase = createClient()
    revalidateTag('/')
    const { data } = await supabase
        .from('Banner')
        .select()
    return NextResponse.json(data)
}