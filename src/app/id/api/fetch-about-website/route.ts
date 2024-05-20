import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/client";

export const POST = async (request: NextRequest) => {
    const formdata = await request.formData()
    const supabase = createClient();
    const key = formdata.get('key') as string
    const { data } = await supabase
        .from('website')
        .select()
        .eq('key', key)
    return NextResponse.json(data)
}