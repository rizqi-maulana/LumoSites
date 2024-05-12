'use client'

import { useParams } from 'next/navigation'
import MarkdownComponent from '@/pages/article/content'


export default function page() {
    const params = useParams()
    const contentID = params?.contentid
    // console.log(typeof(contentID))

  return (
    <div className='markdown-container pt-4 lg:px-[200px] px-2 pb-[100px]'>
        <MarkdownComponent contentID={`${contentID}`}/>
    </div>
  )
}
