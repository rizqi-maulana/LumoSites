import { NextResponse, NextRequest } from "next/server";
import { createClient } from "@/utils/supabase/client";

const supabase = createClient()
export const POST = async (req: NextRequest) => {
  const formdata = await req.formData()
  const image = formdata.get('banner') as File
  const imageName = formdata.get('banner-name')
  const { data, error } = await supabase
    .storage
    .from('assets')
    .upload(`banners/${imageName}`, image, {
      cacheControl: '3600',
      upsert: false
    })
  if (error) {
    return NextResponse.json({ status: 'error' })
  }
  return NextResponse.json({ status: 'success' })
}