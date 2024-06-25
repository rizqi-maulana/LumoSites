import { NextResponse, NextRequest } from "next/server";
import { createClient } from "@/utils/supabase/client";
const supabase = createClient()
export const POST = async (req: NextRequest) => {
  const formdata = await req.formData()
  const FileName = await formdata.get('file-name');
  const { data } = supabase
    .storage
    .from('assets')
    .getPublicUrl(`banners/${FileName}`)

  return NextResponse.json(data)
}