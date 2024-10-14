"use client"

import { useParams, usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaTelegram } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useRouter } from 'next/navigation';

import { FaWhatsapp } from "react-icons/fa";
import {
  FacebookShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { Translate } from '@/components/patterns/Translator';

declare global {
  interface Window {
    google: any
    googleTranslateElementInit: () => void;
  }
}


const ArticleTable = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [content, setContent] = useState<any>([])
  const [Link, setLink] = useState<string>('')
  const [Loading, setLoading] = useState<boolean>(true)
  const params = useParams()
  const contentID = params?.contentid

  const fetchArticles = async () => {
    const formdata = new FormData()
    formdata.append('contentID', `${contentID}`)
    const res = await fetch('/api/articlecontent', {
      method: "POST",
      body: formdata
    }
    )
    const data = await res.json()
    if (data.length === 0) {
      router.push('/404')
    } else {
      setContent(data[0])
      setLink(`https://lumosites.com/article/${data[0].path}`)
      setLoading(false)
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
            <div id='google_translate_element' className='absolute left-0'></div>
            <div className='flex flex-col justify-between'>
              <h1 className='text-wrap w-full !text-lg md:!text-5xl'>{content?.title}</h1>
              <div className='md:my-5 my-2'>
                <p className='text-xs md:text-sm text-gray-500'>Author: <i>{content?.author}</i></p>
                <p className='text-xs md:text-sm text-gray-500'><i>{content?.created_at}</i></p>
                <div>
                  <p className='text-sm'><Translate to="Berbagi Artikel">Share Article</Translate></p>
                  <div className='flex items-center gap-2 text-2xl'>
                    <WhatsappShareButton url={Link} title={content.title}>
                      <FaWhatsapp className='text-[#25d366]' />
                    </WhatsappShareButton>
                    <TelegramShareButton url={Link} title={content.title}>
                      <FaTelegram className='text-[#0088cc]' />
                    </TelegramShareButton>
                    <RedditShareButton url={Link} title={content.title}>
                      <FaReddit className='text-[#FF4500]' />
                    </RedditShareButton>
                    <FacebookShareButton url={Link} title={content.title}>
                      <FaFacebook className='text-[#1877F2]' />
                    </FacebookShareButton>
                    <TwitterShareButton url={Link} title={content.title}>
                      <FaXTwitter className='text-[#1DA1F2]' />
                    </TwitterShareButton>
                  </div>
                </div>
              </div>
            </div>
            <p className='text-sm md:text-lg'>{content?.shortDescription}</p>
            <Image src={content?.image} alt={content?.title} width={900} height={350} className='w-full h-max object-cover rounded-md' sizes='100vw' />
            <div className='text-sm md:text-base' dangerouslySetInnerHTML={{ __html: content?.text }} />
          </div>
      }
    </div>
  );
};


export default ArticleTable
