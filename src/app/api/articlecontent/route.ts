import { NextResponse, NextRequest } from "next/server";
import { createClient } from "@/utils/supabase/client";
const supabase = createClient()

export const POST = async (req: NextRequest) => {
  const formdata = await req.formData();
  const contentID = formdata.get("contentID");
  const { data } = await supabase
    .from("article")
    .select()
    .eq("path", contentID);
  return NextResponse.json(data);
}