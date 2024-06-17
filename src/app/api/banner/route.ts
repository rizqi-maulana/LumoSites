import { NextResponse, NextRequest } from "next/server";
import { createClient } from "@/utils/supabase/client";

const supabase = createClient();
export const POST = async (req: NextRequest) => {
  const formdata = await req.formData()
  const filename = formdata.get('banner-name')
  const { data } = supabase
    .storage
    .from('assets')
    .getPublicUrl(`banners/${filename}`)
  return NextResponse.json({ data })
}