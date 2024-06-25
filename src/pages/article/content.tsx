"use client"

import { useParams, usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import Image from 'next/image';

declare global {
  interface Window {
    google: any
    googleTranslateElementInit: () => void;
  }
}


const ArticleTable = () => {
  const supabase = createClient()
  const pathname = usePathname()
  const [content, setContent] = useState<any>([])
  const [Loading, setLoading] = useState<boolean>(true)
  const params = useParams()
  const contentID = params?.contentid

  const fetchArticles = async () => {
    const { data, error } = await supabase
      .from("article")
      .select("*")
      .eq("path", contentID);

    if (data) {
      setContent(data)
      setLoading(false)
    } else {
      throw new Error(error.message);
    }
  };

  useEffect(() => {
    fetchArticles();
    if (typeof window !== 'undefined') {
      import('ldrs').then(({ newtonsCradle }) => {
        newtonsCradle.register();
      });
    }
    var addScript = document.createElement('script');
    addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
    document.body.appendChild(addScript);
    pathname?.includes('id') ? window.googleTranslateElementInit = () => { } : window.googleTranslateElementInit = googleTranslateElementInit
  }, [])

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement({
      pageLanguage: 'auto',
      includedLanguages: "en,id",
      autoDisplay: true,
      layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
    },
      'google_translate_element');
  }
  return (
    <div className='mt-10'>
      {
        Loading ?
          <div className='flex justify-center items-center h-[300px]'>
            <l-newtons-cradle
              size="78"
              speed="1.4"
              color={"#6c9bff"}
            ></l-newtons-cradle>
          </div> :
          <div>
            <div id='google_translate_element'></div>
            <div className='flex flex-col justify-between'>
              <h1 className='text-wrap w-full !text-lg md:!text-5xl'>{content[0]?.title}</h1>
              <div className='md:my-5 my-2'>
                <p className='text-xs md:text-sm text-gray-500'>Author: <i>{content[0]?.author}</i></p>
                <p className='text-xs md:text-sm text-gray-500'><i>{content[0]?.created_at}</i></p>
              </div>
            </div>
            <p className='text-sm md:text-lg'>{content[0]?.shortDescription}</p>
            <Image src={content[0]?.image} alt={content[0]?.title} width={900} height={350} className='w-full h-max object-cover rounded-md' sizes='100vw' />
            <div className='text-sm md:text-base' dangerouslySetInnerHTML={{ __html: content[0]?.text }} />
          </div>
      }
    </div>
  );
};


export default ArticleTable
