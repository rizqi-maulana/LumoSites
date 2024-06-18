"use client"

import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';

const ArticleTable = () => {
  const supabase = createClient()

  const [content, setContent] = useState<any>([])
  const params = useParams()
  const contentID = params?.contentid

  const fetchArticles = async () => {
    const { data, error } = await supabase
      .from("article")
      .select("*")
      .eq("path", contentID);

    if (error) {
      throw new Error(error.message);
    }
    setContent(data)
  };

  useEffect(() => {
    fetchArticles();
  }, [])


  return (
    <div>
        <h2>{content[0]?.title}</h2>
        <p>{content[0]?.shortDescription}</p>
        <img src="" alt="" /> {/* Nih masukin imagenya disini */}
        <div  dangerouslySetInnerHTML={{ __html: content[0]?.text }}/> 
    </div>
  );
};


export default ArticleTable
