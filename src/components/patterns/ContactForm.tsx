"use client"

import emailjs from '@emailjs/browser';
import { Buttons } from "../atoms/buttons"
import ReCAPTCHA from 'react-google-recaptcha';
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { Translate } from './Translator';
export const ContactForm = () => {
    const [ButtonSubmit, setButtonSubmit] = useState(true)
    const [Author, setAuthor] = useState<string>('')
    const [Email, setEmail] = useState<string>('')
    const [Message, setMessage] = useState<string>('')
    const form = useRef<HTMLFormElement>(null);
    const [Captcha, setCaptcha] = useState<boolean>(false)
    const sendEmail = (e: any) => {
        e.preventDefault();
        if (form && form.current) {
            emailjs
                .sendForm('service_6tbntfi', 'template_e00d8bq', form.current, {
                    publicKey: 'sTSn8MtJHc4iRdQ6l',
                })
                .then(
                    () => {
                        console.log('send');

                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
        };
    }

    useEffect(() => {
        if (Author.length >= 5 && Email.length >= 10 && Message.length >= 10 && Captcha) {
            setButtonSubmit(false)
        }
    }, [Captcha, Author.length, Email.length, Message.length])

    const ReCapcha = () => {
        setCaptcha(true)

    }

    return (
        <form onSubmit={sendEmail} ref={form} className='relative z-30 p-10 bg-white dark:bg-slate-800 shadow-lg rounded-2xl w-full lg:w-[500px] text-[#1B325B] dark:text-white'>
            <h2 className="font-semibold mb-3 text-4xl" style={{ fontFamily: "Poppins", fontWeight: "bold" }}><Translate to='Kirim pesan kepada kami'>Send us a message</Translate></h2>
            <p className='text-base mb-3'><Translate to='Jangan ragu untuk mengirimkan pertanyaan, masukan, atau saran apa pun kepada kami.'>Please feel free to send us any questions, feedback or suggestions you might have.</Translate></p>
            <div className="flex flex-col ">
                <label htmlFor="author" style={{ fontFamily: "Poppins", fontWeight: "bold" }}><Translate to='Penulis'>Author</Translate></label>
                <input type="text" name="author" required id="" autoComplete="off" placeholder="Author" className="md:mb-5 mb-3 p-2 md:p-3 text-sm rounded-[5px] border-solid border-black dark:border-white border-2 bg-transparent" onChange={({ target }) => setAuthor(target.value)} />
                <label htmlFor="email" style={{ fontFamily: "Poppins", fontWeight: "bold" }}>Email</label>
                <input type="text" name="email" required id="" autoComplete="off" placeholder="Email Address" className="md:mb-5 mb-3 p-2 md:p-3 text-sm rounded-[5px] border-solid border-black dark:border-white border-2 bg-transparent" onChange={({ target }) => setEmail(target.value)} />
                <label htmlFor="message" style={{ fontFamily: "Poppins", fontWeight: "bold" }}><Translate to='Pesan'>Message</Translate></label>
                <textarea name="message" id="" required cols={10} rows={10} placeholder="Message" style={{
                    resize: 'none'
                }} className="md:mb-5 mb-3 p-2 md:p-3 text-sm h-[100px] rounded-[5px] border-solid border-black dark:border-white border-2 bg-transparent" onChange={({ target }) => setMessage(target.value)}></textarea>
                <div>
                    <ReCAPTCHA
                        sitekey="6LcbAaspAAAAAFE_-GFQK0UxpygKCZ2OUVkgSOo3"
                        onChange={ReCapcha}
                        className='scale-75 w-0 md:w-full md::scale-90'
                    />
                    <Buttons type="submit" className='py-2 !px-10 !w-full' disabled={ButtonSubmit}><Translate to='Kirim'>Submit</Translate></Buttons>
                </div>
            </div>
        </form>
    )
}