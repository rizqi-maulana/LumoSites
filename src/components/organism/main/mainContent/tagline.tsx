import { TextGenerateEffect } from '@/components/patterns/GenerateText';
import { LearnMore } from '@/components/patterns/LearnMore';
import { Buttons } from '@/components/atoms/buttons';
import { Translate } from '@/components/patterns/Translator';
import WordRotate from '@/components/patterns/word-rotate';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { words, words_id } from '@/data/MainWords';


export const Tagline = () => {

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tagline = usePathname()?.includes('id') ? words_id : words
  const pathname = usePathname()


  useEffect(() => {

    const handleTyping = () => {
      if (isDeleting) {
        if (subIndex === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % tagline.length);
        } else {
          setSubIndex((prev) => prev - 1);
        }
      } else {
        if (subIndex === tagline[index].length) {
          setTimeout(() => {
            setIsDeleting(true);
          }, 2000);
        } else {
          setSubIndex((prev) => prev + 1);
        }
      }
    };

    const timeout = setTimeout(handleTyping, 50);
    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, tagline, index]);
  return (
    <div className='text-4xl lg:text-6xl w-[90%] lg:m-0 m-auto md:w-[500px] items-center lg:w-[1000px] lg:block flex flex-col md:justify-center lg:text-left text-center'>
      <LearnMore className='hidden lg:flex' />

      <h1 className="text-[#1B325B] dark:text-white text-3xl w-full transition-all lg:text-5xl" style={{
        fontFamily: 'Poppins',
        fontWeight: '800',
      }}><Translate to="Mari kita buat menjadi ">Let us make it </Translate>
        <span className='text-[#6C9BFF]'>
          <WordRotate
            words={tagline}
            duration={2000}
          />
        </span></h1>


      <LearnMore className='flex lg:hidden mt-16' />
      <div className='xl:w-[600px] lg:w-[400px]'>
        <TextGenerateEffect words={pathname?.includes('id') ? 'lumosites adalah sebuah situs penyedia jasa pembuatan website dengan tim kami yang berpengalaman dalam desain yang akan menciptakan desain menarik dan tim kami akan menghadirkan website yang dapat digunakan dengan mudah dan efisien.' : 'a website service provider with our experienced team in design that will create attractive designs and our team will deliver a website that can be used easily and efficiently.'} />
      </div>
      <Buttons className='mt-5 !px-20 lg:!px-7 md:m-0 relative z-20 !dark:from-[#6C9BFF] !dark:to-[#6C9BFF]' href={pathname?.includes('id') ? '/id/about' : '/about'} type='button'>About us</Buttons>
    </div>
  );
}