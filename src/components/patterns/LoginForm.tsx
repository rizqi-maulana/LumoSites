"use client"

import { Buttons } from "../atoms/buttons"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import CryptoJS from "crypto-js"

export const LoginForm = () => {
    const route = useRouter()
    const SecretKey = process.env.NEXT_PUBLIC_SECRET_KEY;
    const [Email, setEmail] = useState<string>('')
    const [Password, setPassword] = useState<string>('')
    const [Data, setData] = useState<any>([])

    useEffect(() => {
        const FetchUser = async () => {
            const response = await fetch('/api/users', {
                method: "GET"
            })
            const data = await response.json()
            setData(data[0])


        }
        FetchUser()
    }, [])

    const setCookie = () => {
        var expires = ""
        const dayExpired = 7
        var date = new Date()
        date.setDate(date.getDate() + dayExpired * 24 * 60 * 60 * 1000)
        expires = "; login=" + date.toUTCString()
        document.cookie = "login" + "=" + true + expires + "; path=/";
    }

    const HandleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (SecretKey) {
            // console.log(CryptoJS.AES.encrypt(Data.password, SecretKey).toString());
            var PasswordDec = CryptoJS.AES.decrypt(Data.password, SecretKey).toString(CryptoJS.enc.Utf8)


            if (Data.email === Email && PasswordDec === Password) {
                setCookie()
                route.push('/')
            } else {
                console.log('wrong');

            }
        }

    }

    return (
        <form onSubmit={HandleLogin} className="w-[500px] h-[200px] text-white  rounded-[5px] p-5 flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <label htmlFor="email">Email</label>
            <input type="email" name="" id="email" placeholder="Email" className="text-black px-1" onChange={({ target }) => setEmail(target.value)} />
            <label htmlFor="password">Password</label>
            <input type="password" name="" id="password" placeholder="Password" className="text-black px-1" onChange={({ target }) => setPassword(target.value)} />
            <Buttons type="submit">Login</Buttons>
        </form>
    )
}