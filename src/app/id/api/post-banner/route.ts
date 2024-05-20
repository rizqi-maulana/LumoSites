import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/client";

export const POST = async (request: NextRequest) => {
    const supabase = createClient()
    const formdata = await request.formData()
    const ImageFile: File = formdata.get('ImageFile') as unknown as File
    const Filename: string = formdata.get('FileName') as string
    if (!ImageFile) {
        return NextResponse.json({ status: false });
    }
    const { data, error } = await supabase
        .storage
        .from('assets')
        .upload(`banners/${Filename}`, ImageFile, {
            cacheControl: '3600',
            upsert: false
        })
    return NextResponse.json({ status: 'success' });
};
