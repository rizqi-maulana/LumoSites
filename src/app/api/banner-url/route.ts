import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@/utils/supabase/client"
export const POST = async (request: NextRequest) => {
    const body = await request.json();
    const supabase = createClient();
    const FileName = body.FileName
    const { data } = await supabase
        .storage
        .from('assets')
        .getPublicUrl(`banners/${FileName}`)

    return NextResponse.json({ status: 'success', publicUrl: data.publicUrl })
}