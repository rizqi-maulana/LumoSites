"use client"
import { ContactForm } from "@/components/patterns/ContactForm"
import { Translate } from "@/components/patterns/Translator"
import { FaLocationDot } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { SparklesCore } from "@/components/atoms/sparkles";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Links } from "@/components/atoms/Links";

const ContactPage = () => {
    return (
        <>
            <section className="h-[40rem] w-full bg-[#1B2538] dark:bg-slate-900 flex flex-col items-center justify-center overflow-hidden rounded-md mb-28">
                <h1 className="text-5xl lg:text-9xl text-center text-white relative z-20" style={{ fontFamily: "Poppins", fontWeight: "bold" }}>
                    <Translate to="Kontak">Contact</Translate>
                </h1>
                <div className="w-[40rem] h-40 relative">
                    {/* Gradients */}
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                    {/* Core component */}
                    <SparklesCore
                        background="transparent"
                        minSize={0.4}
                        maxSize={1}
                        particleDensity={1200}
                        className="w-full h-full"
                        particleColor="#FFFFFF"
                    />

                    {/* Radial Gradient to prevent sharp edges */}
                    <div className="absolute inset-0 w-full h-full bg-[#1B2538] dark:bg-slate-900 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                </div>
            </section>

            <section className="mx-2 lg:mx-16 lg:flex block justify-evenly relative z-50">

                <div className='h-max overflow-hidden w-full lg:w-[600px] lg:pb-2 pb-10 text-[#1B325B] dark:text-white'>
                    <h1 className="text-base font-semibold mb-3 animate__animated animate__fadeInUp animate__fast text-[#6C9BFF]" style={{ fontFamily: "Poppins", fontWeight: "semibold" }}><Translate to="BERHUBUNGAN">GET IN TOUCH</Translate></h1>
                    <h3 className="text-xl lg:text-3xl mb-5" style={{ fontFamily: "Poppins", fontWeight: "bold" }}><Translate to="Komunikasi yang Mulus, Dampak Global.">Seamless Communication, Global Impact.</Translate></h3>
                    <p className="text-sm md:text-base"><Translate to="Jika Anda tertarik, kami menyambut Anda untuk menghubungi kami. Apakah Anda memiliki pertanyaan, memerlukan informasi lebih lanjut, atau siap memulai, tim kami siap membantu. Jangkau dan lihat bagaimana kami dapat mewujudkan visi Anda!">If you&apos;re interested, we welcome you to contact us. Whether you have questions, need more information, or are ready to begin, our team is here to help. Reach out and see how we can bring your vision to life!</Translate></p>
                    <div className="w-full mt-10 bg-gray-500 h-[2px]" />
                    <div>

                        <div className="flex flex-wrap gap-5 mt-10">
                            <div className="flex">
                                <div className="p-4 rounded-full w-max h-max bg-[#6C9BFF]">
                                    <FaLocationDot className="text-white md:text-2xl text-lg" />
                                </div>
                                <div className="ml-3 w-[250px]">
                                    <h3 className="font-semibold md:text-xl text-lg" style={{ fontFamily: "Poppins" }}><Translate to="Lokasi">Location</Translate></h3>
                                    <p className="text-sm md:text-base">Jln Raden Mas Panji Anom Pagutan Timur Krg Buaya No 13 Kota Mataram, NTB</p>
                                </div>
                            </div>

                            <div className="flex">
                                <div className="p-4 rounded-full w-max h-max bg-[#6C9BFF]">
                                    <MdAlternateEmail className="text-white md:text-2xl text-lg" />
                                </div>
                                <div className="ml-3 ">
                                    <h3 className="font-semibold md:text-xl text-lg" style={{ fontFamily: "Poppins" }}><Translate to="Dukungan Email">Email Support</Translate></h3>
                                    <p className="text-sm md:text-base">lumosites@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="p-4 rounded-full w-max h-max bg-[#6C9BFF]">
                                    <FaPhoneAlt className="text-white md:text-2xl text-lg" />
                                </div>
                                <div className="ml-3 ">
                                    <h3 className="font-semibold md:text-xl text-lg" style={{ fontFamily: "Poppins" }}><Translate to="Ayo Bicara">Let&apos;s Talk</Translate></h3>
                                    <p className="text-sm md:text-base">Phone: 081xxxxxxxxx</p>
                                    <p>WhatsApp: 081xxxxxxxxx</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full mt-10 bg-gray-500 h-[2px]" />
                        <div className="mt-5">
                            <h3 className="md:text-xl text-base mb-3"><Translate to="Ikuti sosial media kami">Follow our social media</Translate></h3>
                            <div className="flex gap-2 ml-2">
                                <Links className="p-3 rounded-full w-max h-max bg-[#6C9BFF] hover:bg-[#1B2538] hover:scale-[1.1] transition-all" href="https://www.facebook.com">
                                    <FaFacebookF className="text-white md:text-2xl text-base" />
                                </Links>
                                <Links className="p-3 rounded-full w-max h-max bg-[#6C9BFF] hover:bg-[#1B2538] hover:scale-[1.1] transition-all" href="https://www.instagram.com/lumosites?igsh=MTNhNnh1MmF3eWduZQ==">
                                    <FaInstagram className="text-white md:text-2xl text-base" />
                                </Links>
                            </div>
                        </div>
                    </div>
                </div>
                <ContactForm />
            </section>
            <section className="w-full h-[500px] mt-40">
                <div className="overflow-hidden lg:w-full h-[500px] w-full block">
                    <div id="g-mapdisplay" className="h-full w-full max-w-full">
                        <iframe className="h-full w-full" frameBorder="0" src="https://www.google.com/maps/embed/v1/place?q=Jl.+Raden+Mas+Panji+Anom+Jl.+Karang+Buaya+No.13,+Pagutan+Tim.,+Kec.+Mataram,+Kota+Mataram,+Nusa+Tenggara+Bar.+83117&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactPage