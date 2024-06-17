'use client'

import React, { useCallback, useState } from 'react';
import { FaRocket } from "react-icons/fa";
import { IoMdCloudUpload } from "react-icons/io";
import { v4 as uuidv4 } from 'uuid';

export default function Post() {
  const [text, setText] = useState<string>('');
  const [formattedText, setFormattedText] = useState<string>('');
  const [Title, setTitle] = useState<string>('Title');
  const [Desc, setDesc] = useState<string>('Description');
  const [ImageFile, setImage] = useState<File | null>(null);
  const [Fileurl, setFileurl] = useState<string>('')

  const addFormattedText = useCallback((tag: 'b' | 'i' | 'p') => {
    if (text.trim() !== '') {
      const newText = tag === 'p' ? text : `<${tag}>${text}</${tag}>`;
      setFormattedText((prev) => `${prev} ${newText}`);
      setText('');
    }
  }, [text]);

  const handlePost = useCallback(async () => {
    await postbanner();
  }, [Title, Desc, formattedText, ImageFile]);

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
      setFileurl(URL.createObjectURL(e.target.files[0]));
    }
  }, []);

  const getbanner = async (filename: string) => {
    const formdata = new FormData()
    formdata.append('banner-name', filename)
    const response = await fetch('/api/banner', {
      method: 'POST',
      body: formdata
    })
    const data = await response.json()
    if (data) {
      postdata(data.publicUrl)
    }
  }

  const postbanner = async () => {
    if (ImageFile) {
      const formData = new FormData();
      const filename = `banner-${uuidv4()}`
      formData.append('banner', ImageFile);
      formData.append('banner-name', filename);
      try {
        const res = await fetch('/api/postbanner', {
          method: 'POST',
          body: formData,
        });
        const data = await res.json();
        if (data) {
          getbanner(filename)
        }
      } catch (error) {
        console.error('Error posting banner:', error);
      }
    }
  }

  const postdata = async (publicurl: string) => {
    const formData = new FormData();
    formData.append('title', Title);
    formData.append('desc', Desc);
    formData.append('text', `<p>${formattedText.trim()}</p>`);
    formData.append('path', `${Title.toLowerCase().split(' ').join('-')}`);
    if (ImageFile) {
      formData.append('image', publicurl);
    }

    try {
      const res = await fetch('/api/postarticle', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error('Error posting article:', error);
    }
  }

  return (
    <div className="p-4 flex justify-evenly mt-10">
      <div
        className="formatted-content border border-white p-5 rounded-lg w-[50%] h-[500px] overflow-y-scroll"
        dangerouslySetInnerHTML={{
          __html: `
          <div style="display: flex; justify-content: space-between">
          <h1 style="font-weight: bold; font-size: 30px">${Title}</h1>
          <em style="color: gray; font-size: 10px">1/04/2024</em>
          </div>
          <p style="font-size: 15px; margin-bottom: 10px;">${Desc}</p>
          <img style="border-radius: 10px; margin-bottom: 10px" src=${Fileurl} alt=${Title}/>
        <p>${formattedText ? formattedText.trim() : 'Your Text'}</p>`
        }}
      />
      <div>
        <div className='pb-5 flex flex-col gap-2'>
          <input type="text" placeholder='Title' className='p-1 bg-slate-700 rounded-md' onChange={({ target }) => setTitle(target.value)} />
          <input type="text" placeholder='Description' className='p-1 bg-slate-700 rounded-md' onChange={({ target }) => setDesc(target.value)} />
          <label htmlFor="banner" className='flex items-center gap-1 p-2 bg-[#6C9BFF] rounded-md hover:cursor-pointer'>
            <IoMdCloudUpload />
            Upload Banner
          </label>
          <input type="file" name="banner" id="banner" hidden onChange={handleFileChange} />
          <textarea
            onChange={({ target }) => setText(target.value)}
            value={text}
            placeholder="Enter text here..."
            className='p-1 bg-slate-700 rounded-md resize-none h-[200px]'
          ></textarea>
        </div>
        <div className='flex gap-2'>
          <button className='px-3 py-1 bg-[#6C9BFF] rounded-sm' onClick={() => addFormattedText('b')}>Bold</button>
          <button className='px-3 py-1 bg-[#6C9BFF] rounded-sm' onClick={() => addFormattedText('i')}>Italic</button>
          <button className='px-3 py-1 bg-[#6C9BFF] rounded-sm' onClick={() => addFormattedText('p')}>Regular</button>
          <button className='px-3 py-1 bg-[#6C9BFF] rounded-sm flex items-center gap-2' onClick={handlePost}><FaRocket /> Post</button>
        </div>
      </div>
    </div>
  );
}
