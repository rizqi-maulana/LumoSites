import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/client";

export const POST = async (request: Request) => {
    const supabase = createClient();
    const formdata = await request.formData();
    const id = formdata.get('id') as string
    await supabase
        .from('Banner')
        .delete()
        .eq('id', id)
    return NextResponse.json({ status: 'success' });
}