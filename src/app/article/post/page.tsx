"use client";

import React, { useCallback, useState, useRef, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { v4 as uuidv4 } from "uuid";
import { createClient } from "@/utils/supabase/client";
import { IoMdLogOut } from "react-icons/io";
import { generateUniqKey } from "@/utils/generateUniqKey";
import clsx from "clsx";
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Post() {
  const supabase = createClient();
  const router = useRouter()
  const [isPreview, setIsPreview] = useState<boolean>(false);
  const [Title, setTitle] = useState<string>("No title");
  const [Desc, setDesc] = useState<string>("No description");
  const [ImageFile, setImage] = useState<File | Blob>();
  const [Fileurl, setFileurl] = useState<string>("");
  const storyRef = useRef<HTMLDivElement>(null);
  const [storyText, setStoryText] = useState<string>("");
  const [Author, setAuthor] = useState<string>('');
  const [Login, setLogin] = useState<Boolean>(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await HandlePostImage()
    // const { error } = await supabase.from("article").insert({
    //   title: Title,
    //   path: generateUniqKey(),
    //   image: "abc", // Nih masukkin dan image nya disini
    //   shortDescription: Desc,
    //   text: storyText,
    // });

    // if (error) throw new Error(error.message);

    // alert("masukk tuh");
  };

  const HandleUploadData = async (url: string) => {
    const formdata = new FormData()
    formdata.append('image', url)
    formdata.append('title', Title)
    formdata.append('desc', Desc)
    formdata.append('text', storyText)
    formdata.append('author', Author)
    formdata.append('path', generateUniqKey())
    const res = await fetch('/api/postarticle', {
      method: "POST",
      body: formdata
    })
    const data = await res.json()
    if (data.status === 'success') {
      toast.success("Success Post", {
        position: "top-center"
      });
      setTimeout(() => {
        router.push('/article')
      }, 3000);
    } else {
      toast.error("Article Alredy Exist", {
        position: "top-left"
      });
    }
  }

  const HandleGetImageUrl = async (Filename: string) => {
    const formdata = new FormData()
    formdata.append('file-name', Filename)
    const res = await fetch('/api/getbanner', {
      method: "POST",
      body: formdata
    })
    const data = await res.json()
    if (data) {
      HandleUploadData(data.publicUrl)
    }
  }

  const HandlePostImage = async () => {
    const formdata = new FormData()
    const filename: string = `banner-${uuidv4()}`
    if (ImageFile) {
      formdata.append('banner', ImageFile)
      formdata.append('banner-name', filename)
      const res = await fetch('/api/banner', {
        method: 'POST',
        body: formdata
      })
      const data = await res.json()
      if (data) {
        HandleGetImageUrl(filename)
      }
    }
  }

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        setImage(e.target.files[0]);
        setFileurl(URL.createObjectURL(e.target.files[0]));
      }
    },
    []
  );

  const applyStyle = (style: Partial<CSSStyleDeclaration>, tagName: string) => {
    if (!storyRef.current) return;

    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
    const selectedText = range.toString();

    if (selectedText.length === 0) return;

    // Check if the selection is within the storyRef
    const commonAncestor = range.commonAncestorContainer;
    if (!storyRef.current.contains(commonAncestor)) {
      return;
    }

    const fragment = range.extractContents();
    const newElement = document.createElement(tagName);
    Object.assign(newElement.style, style);
    newElement.appendChild(fragment);

    // Find the parent element
    let parentElement = range.startContainer.parentElement;
    if (parentElement && storyRef.current.contains(parentElement)) {
      if (
        parentElement !== storyRef.current &&
        parentElement.tagName.toLowerCase() !== "div"
      ) {
        if (parentElement.parentNode) {
          parentElement.parentNode.replaceChild(newElement, parentElement);
        }
      } else {
        range.deleteContents();
        range.insertNode(newElement);
      }
    }

    // Ensure the selection is within the new element
    const newRange = document.createRange();
    newRange.selectNodeContents(newElement);
    selection.removeAllRanges();
    selection.addRange(newRange);

    setStoryText(storyRef.current.innerHTML);
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLDivElement>) => {
    event.preventDefault();
    const text = event.clipboardData.getData("text/plain");
    if (storyRef.current) {
      // Insert plain text at cursor position
      const selection = window.getSelection();
      if (selection) {
        const range = selection.getRangeAt(0);
        range.deleteContents();
        range.insertNode(document.createTextNode(text));
        // Move cursor to the end of the inserted text
        range.setStartAfter(range.endContainer);
        selection.removeAllRanges();
        selection.addRange(range);
        setStoryText(storyRef.current.innerHTML);
      }
    }
  };

  const makeBold = () =>
    applyStyle({ fontWeight: "bold", display: "inline-block" }, "strong");
  const makeItalic = () =>
    applyStyle({ fontStyle: "italic", display: "inline-block" }, "em");
  const makeRegular = () =>
    applyStyle(
      {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "16px",
        lineHeight: "27px",
        display: "inline-block",
      },
      "span"
    ); // Use span for inline block regular text

  const makeH2 = () =>
    applyStyle(
      {
        fontWeight: "bold",
        fontSize: "24px",
        lineHeight: "normal",
        display: "block",
        margin: "16px 0",
      },
      "h2"
    );

  const makeH3 = () =>
    applyStyle(
      {
        fontWeight: "bold",
        fontSize: "20px",
        lineHeight: "normal",
        display: "block",
        margin: "16px 0",
      },
      "h3"
    );

  const makeH4 = () =>
    applyStyle(
      {
        fontWeight: "bold",
        fontSize: "18px",
        lineHeight: "normal",
        display: "block",
        margin: "16px 0",
      },
      "h4"
    );

  const makeH5 = () =>
    applyStyle(
      {
        fontWeight: "bold",
        fontSize: "16px",
        lineHeight: "normal",
        display: "block",
        margin: "16px 0",
      },
      "h5"
    );

  const HandleLogin = useCallback(async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    })
  }, [])

  useEffect(() => {
    const checklogin = async () => {
      const { data, error } = await supabase.auth.getSession()
      if (data.session) {
        setLogin(true)
      }
    }
    checklogin()
  }, [])

  const HandleLogout = useCallback(async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.log(error)
    }
    setLogin(false)
  }, [])

  return (
    <div>
      <ToastContainer className='z-[1000]' />
      <div className="w-full flex items-center justify-center mt-10">
        {
          Login === false ?
            <button onClick={() => HandleLogin()} className="flex items-center p-2 gap-2 dark:bg-white bg-slate-800 rounded-lg dark:text-black text-white font-semibold hover:cursor-pointer"><FcGoogle className="w-6 h-6" /> Login Google Dulu Bos</button>
            : <button onClick={() => HandleLogout()} className="flex items-center p-2 gap-2 dark:bg-white bg-slate-800 rounded-lg dark:text-black text-white font-semibold hover:cursor-pointer"><IoMdLogOut className="w-6 h-6" /> Pencet nih Kalau Mau Keluar</button>
        }
      </div>
      <form onSubmit={handleSubmit} className="md:mx-[100px] m-auto mb-[100px]">
        <div className="mt-8 flex md:flex-row flex-col">
          <label htmlFor="title">Article title / </label>
          <input
            required
            onChange={({ target }) => setTitle(target.value)}
            className="bg-transparent mr-2 outline-none rounded-md border border-gray-700 h-[30px] p-2"
            type="text"
            id="title"
          />
          <label htmlFor="description">with description / </label>
          <input
            required
            onChange={({ target }) => setDesc(target.value)}
            className="bg-transparent mr-4 outline-none rounded-md w-[300px] border border-gray-700 h-[30px] p-2"
            type="text"
            id="description"
          />
          <label htmlFor="banner">banner / </label>
          <input onChange={handleFileChange} type="file" id="banner" accept="image/*" />
        </div>
        <div className="flex justify-evenly mt-5 flex-col rounded-lg dark:border-gray-700 border-gray-300 border ">
          <div className="flex justify-between dark:bg-[#0000004a] items-center px-4 py-2 border-b dark:border-gray-600 border-gray-300">
            <div className="text-[13px] flex items-center">
              <button
                type="button"
                onClick={() => setIsPreview(false)}
                className={`${!isPreview ? "border" : ""
                  } dark:bg-black p-2 rounded-md dark:border-gray-400 border-black`}
              >
                Edit
              </button>
              <button
                type="button"
                onClick={() => setIsPreview(true)}
                className={`${isPreview ? "border" : ""
                  } dark:bg-black p-2 rounded-md dark:border-gray-400 border-black`}
              >
                Preview
              </button>
            </div>
            {isPreview ? (
              <>💀</>
            ) : (
              <div className="w-max sticky flex gap-2 text-[12px] border-[#0000002e] dark:border-[#ffffff2a]">
                <button
                  type="button"
                  onClick={makeBold}
                  className="font-bold font-inter border h-6 dark:bg-[#0000003a] px-2 rounded-md border-gray-700 flex items-center justify-center text-[14px]"
                >
                  B
                </button>
                <button
                  type="button"
                  onClick={makeItalic}
                  className="italic font-inter border h-6 dark:bg-[#0000003a] px-2 rounded-md border-gray-700 flex items-center justify-center text-[14px]"
                >
                  I
                </button>
                <button
                  type="button"
                  onClick={makeRegular}
                  className="font-regular font-inter border h-6 dark:bg-[#0000003a] px-2 rounded-md border-gray-700 flex items-center justify-center text-[14px]"
                >
                  Regular
                </button>
                <button
                  type="button"
                  onClick={makeH2}
                  className="font-bold font-inter border w-6 h-6 dark:bg-[#0000003a] rounded-md border-gray-700 flex items-center justify-center"
                >
                  H2
                </button>
                <button
                  type="button"
                  onClick={makeH3}
                  className="font-bold font-inter border w-6 h-6 dark:bg-[#0000003a] rounded-md border-gray-700 flex items-center justify-center"
                >
                  H3
                </button>
                <button
                  type="button"
                  onClick={makeH4}
                  className="font-bold font-inter border w-6 h-6 dark:bg-[#0000003a] rounded-md border-gray-700 flex items-center justify-center"
                >
                  H4
                </button>
                <button
                  type="button"
                  onClick={makeH5}
                  className="font-bold font-inter border w-6 h-6 dark:bg-[#0000003a] rounded-md border-gray-700 flex items-center justify-center"
                >
                  H5
                </button>
              </div>
            )}
          </div>

          {isPreview ? (
            <article className="p-4">
              <h2 className="block font-extrabold text-[32px] mb-2">{Title}</h2>
              <p className="block mb-3">{Desc}</p>
              <Image src={Fileurl} width={900} height={350} alt={Title} className="w-full h-max object-cover rounded-md" sizes="100vw" />
              <div
                className="bg-transparent pb-10 outline-none resize-none font-inter leading-[27px] pt-6 w-full text-[16px]"
                dangerouslySetInnerHTML={{ __html: storyText }}
              />
            </article>
          ) : (
            ""
          )}

          <div
            spellCheck="false"
            ref={storyRef}
            contentEditable={true}
            onInput={(e) => {
              setStoryText(e.currentTarget.innerHTML);
            }}
            // onPaste={handlePaste}
            className={`${isPreview ? "hidden" : ""
              } bg-transparent px-4 pb-10 outline-none resize-none font-inter leading-[27px] pt-6 w-full text-[16px]`}
            style={{ minHeight: "52px", whiteSpace: "pre-wrap" }}
          >
            Mulai menulis dari sini..
          </div>

          <div
            className={`${isPreview ? "hidden" : ""
              } text-[12px] font-extralight text-gray-500 px-3 py-2`}
          >
            <p>Select text terlebih dahulu sebelum mengubah style.</p>
            <p>Waktu penerbitan artikel akan otomatis terekam oleh database.</p>
          </div>
        </div>
        <div className="py-4 flex flex-row-reverse items-center">
          <button
            type="submit"
            className={clsx('bg-gray-300 px-5 py-1 font-extrabold rounded-lg text-black', {
              'hover:cursor-not-allowed': Login === false,
              '!bg-white': Login
            })}
            disabled={!Login}
          >
            Post
          </button>
          <input
            required
            onChange={({ target }) => setAuthor(target.value)}
            className="bg-transparent mr-2 outline-none rounded-md border border-gray-700 h-[30px] p-2 ml-1"
            type="text"
            id="author"
          />
          <label htmlFor="author">Penulis / </label>
        </div>
      </form>
    </div >
  );
}
