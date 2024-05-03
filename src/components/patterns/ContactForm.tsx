"use client"

import emailjs from '@emailjs/browser';
import { Buttons } from "../atoms/buttons"
import ReCAPTCHA from 'react-google-recaptcha';
import { use, useEffect, useRef } from 'react';
import { useState } from 'react';
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
        <form onSubmit={sendEmail} ref={form}>
            <h2 className="font-semibold mb-3">Get in touch</h2>
            <div className="flex flex-col w-max">
                <input type="text" name="author" required id="" autoComplete="off" placeholder="Author" className="md:mb-5 mb-3 p-2 md:p-3 text-sm w-[250px] md:w-[400px] rounded-[5px] border-solid border-black border-2 bg-transparent" onChange={({ target }) => setAuthor(target.value)} />
                <input type="text" name="email" required id="" autoComplete="off" placeholder="Email Address" className="md:mb-5 mb-3 p-2 md:p-3 text-sm w-[250px] md:w-[400px] rounded-[5px] border-solid border-black border-2 bg-transparent" onChange={({ target }) => setEmail(target.value)} />
                <textarea name="message" id="" required cols={10} rows={10} placeholder="Message" style={{
                    resize: 'none'
                }} className="md:mb-5 mb-3 p-2 md:p-3 text-sm h-[100px] w-[250px] md:w-[400px] rounded-[5px] border-solid border-black border-2 bg-transparent" onChange={({ target }) => setMessage(target.value)}></textarea>
                <div className='md:flex block'>
                    <ReCAPTCHA
                        sitekey="6LcbAaspAAAAAFE_-GFQK0UxpygKCZ2OUVkgSOo3"
                        onChange={ReCapcha}
                        className='scale-75 w-0 md:w-full md::scale-90'
                    />
                    <Buttons type="submit" disabled={ButtonSubmit}>Submit</Buttons>
                </div>
            </div>
        </form>
    )
}