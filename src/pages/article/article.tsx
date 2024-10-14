"use client"

import { Articles } from "@/data/Articles"
import { CategoryData } from "@/data/Category"
import Link from "next/link"
import { ArticleSearchBar } from "@/components/patterns/ArticleSearchBar"
import WordPullUp from "@/components/patterns/word-pull-up"
import { createClient } from "@/utils/supabase/client"
import { RiArrowDropDownLine } from "react-icons/ri";
import { ArticleCard } from "@/components/patterns/ArticleCard"
import { useEffect, useState } from "react"
import { Button, ButtonGroup, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { usePathname } from "next/navigation"

declare global {
    interface Window {
        google: any
        googleTranslateElementInit: () => void;
    }
}

export default function ArticlePage() {
    const supabase = createClient()
    const pathname = usePathname()
    const [queryResult, setQueryResult] = useState<any>()
    const [Category, setCategory] = useState<string>('')
    const [articles, setArticles] = useState<any>()
    const [selectedOption, setSelectedOption] = useState<string>('');

    useEffect(() => {
        setCategory(selectedOption)
    }, [selectedOption])

    const fetching = async () => {
        const { data } = await supabase.from("article").select()
        setArticles(data)
    }

    useEffect(() => {
        fetching()
        var addScript = document.createElement('script');
        addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
        document.body.appendChild(addScript);
        pathname?.includes('id') ? window.googleTranslateElementInit = () => { } : window.googleTranslateElementInit = googleTranslateElementInit
    }, [])

    const googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement({
            pageLanguage: 'auto',
            autoDisplay: true,
            includedLanguages: "en,id",
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
        },
            'google_translate_element');
    }

    const getLabelForSelectedOption = () => {
        const selectedCategory = CategoryData.find(data => data.key === selectedOption);
        return selectedCategory === 'all' ? selectedCategory.labelsMap : 'Select Category';
    };

    return (
        <>
            <div id='google_translate_element' className="fixed z-[10002]"></div>
            <section className='flex justify-center py-12'>
                <WordPullUp className="!text-xl lg:!text-3xl !font-bold z-10 !text-center w-[90%] lg:w-full" words={pathname?.includes('id') ? "Jelajahi kedalaman wawasan terbaru kami di artikel ini..." : "Explore the depths of our latest insights in this article..."} style={{ fontFamily: "Poppins", fontWeight: "800" }} />
                <div className='absolute mt-24 lg:mt-0'>
                    {/* blur 80px */}
                    <div className=' bg-[#e78f9971] dark:bg-[#0F334F] relative -top-[20px] lg:-top-[50px] lg:w-96 lg:h-80 w-[100px] h-[100px] blur-[40px] lg:blur-[80px] rounded-md' />
                    <div className='bg-[#85a6f482] dark:bg-[#0F334F] absolute lg:-left-[600px] -bottom-[50px] right-[150px] lg:-bottom-[150px] lg:w-96 lg:h-80 w-[100px] h-[100px] blur-[40px] lg:blur-[80px] rounded-md' />
                </div>
            </section>

            <section className="flex justify-center items-center flex-col">
                <ArticleSearchBar setQuery={setQueryResult} source={articles} />
                <ButtonGroup variant="flat" className="mt-7">
                    <Button>
                        {getLabelForSelectedOption()}
                    </Button>
                    <Dropdown placement="bottom-end">
                        <DropdownTrigger>
                            <Button isIconOnly>
                                <RiArrowDropDownLine />
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu
                            disallowEmptySelection
                            aria-label="Merge options"
                            selectedKeys={new Set([selectedOption])}
                            selectionMode="single"
                            onSelectionChange={(keys: any) => setSelectedOption(keys.values().next().value)}
                            className="max-w-[300px] max-h-[400px] overflow-y-scroll"
                        >
                            {CategoryData.map((data: any) => (
                                <DropdownItem key={data.key} description={data.descriptionsMap}>
                                    {data.labelsMap}
                                </DropdownItem>
                            ))}
                        </DropdownMenu>
                    </Dropdown>
                </ButtonGroup>
            </section >

            <section className='py-16 relative z-10'>
                <div className='flex justify-center gap-6 flex-wrap'>
                    <div className='flex justify-center gap-6 flex-wrap'>
                        {queryResult?.length > 0 ? <>
                            {queryResult?.map((a: any, index: any) => (
                                <Link key={index} href={`article/${a.path}`} className='shadow-lg bg-white dark:bg-gray-900 dark:text-white rounded-t-lg max-h-[max-content] w-[300px] mt-4 cursor-pointer hover:scale-[1.05] transition-all'>
                                    <ArticleCard image={a.image} title={a.title} category={a.category} shortDescription={a.shortDescription} />
                                </Link>
                            ))}
                        </> : Category.length <= 0 ? <>
                            {articles?.map((a: any, index: number) => (
                                <Link key={index} href={`article/${a.path}`} className='shadow-lg bg-white dark:bg-gray-900 dark:text-white rounded-t-lg max-h-[max-content] w-[300px] mt-4 cursor-pointer hover:scale-[1.05] transition-all'>
                                    <ArticleCard image={a.image} title={a.title} category={a.category} shortDescription={a.shortDescription} />
                                </Link>
                            ))}
                        </> : <>
                            {
                                articles?.filter((a: any) => a.category === Category).map((a: any, index: number) => (
                                    <Link key={index} href={`article/${a.path}`} className='shadow-lg bg-white dark:bg-gray-900 dark:text-white rounded-t-lg max-h-[max-content] w-[300px] mt-4 cursor-pointer hover:scale-[1.05] transition-all'>
                                        <ArticleCard image={a.image} title={a.title} category={a.category} shortDescription={a.shortDescription} />
                                    </Link>
                                ))
                            }
                        </>
                        }
                    </div>
                    {
                        articles?.length <= 0 && <h3 className='text-center pt-8 pb-14'>No Post Found!.</h3>
                    }

                </div>
            </section>

        </>
    )
}