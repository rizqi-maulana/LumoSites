import { NextResponse, NextRequest } from "next/server";
import { createClient } from "@/utils/supabase/client";

const supabase = createClient()
export const POST = async (req: NextRequest) => {
  const formdata = await req.formData()
  const title = formdata.get('title')
  const desc = formdata.get('desc')
  const text = formdata.get('text')
  const path = formdata.get('path')
  const image = formdata.get('image')
  const author = formdata.get('author')
  const { data, error } = await supabase.from('article').insert([
    { title, path, shortDescription: desc, text, image, author, created_at: new Date() }
  ])
  if (error) NextResponse.json({ status: 'error' })
  return NextResponse.json({ status: 'success' })
}