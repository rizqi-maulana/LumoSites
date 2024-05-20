import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/client";

export const GET = async () => {
    const supabase = createClient()
    const { data, error } = await supabase.from('user').select()
    return data ? NextResponse.json(data) : NextResponse.json(error)
}