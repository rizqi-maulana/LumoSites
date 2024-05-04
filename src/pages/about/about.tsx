import { AboutHeader } from "@/components/patterns/AboutHeader"
import { WhyShould } from "@/components/patterns/WhyShould"
import Image from "next/image"
const AboutPage = () => {
    return (
        <>
            <AboutHeader />
            <WhyShould />
            <section className="w-full flex justify-evenly pt-[150px]">
                {/* children */}
                <div className="w-[400px] text-[24px]">
                    <h3 className="text-[#407FFF] font-semibold mb-2">Our vision</h3>
                    <p className="w-[440px] text-[#303232]">Merancang website yang menarik dan fungsional sebagai pilihan terbaik bagi klien yang ingin meningkatkan kehadiran online pelanggan dengan inovasi dan kreativitas. </p>
                    <div className="mt-[60px] border-b-2 h-2 opacity-100 border-black w-[100px]"></div>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="w-full float-right opac">#activity</h3>
                    <div className="bg-[#D4D5D6] h-[200px] w-[450px]"></div>
                    <div className="bg-[#D4D5D6] h-[200px] w-[320px]"></div>
                    {/* <Image src={} alt="activity1" /> */}
                </div>
            </section>

            <section className="w-full flex justify-evenly pt-[150px] bg-[#F7FCFD] mt-[150px] pb-[150px]">
                {/* children */}
                <div className="flex flex-col gap-4">
                    <h3 className="w-full text-[46px] font-bold text-[#1B325B]">Our team</h3>
                    <div className="w-[550px] flex flex-wrap gap-4 flex-shrink-0">
                        {/* card team */}
                        <div className="w-[160px] mb-[20px] h-[220px] bg-[#D4D5D6] rounded-md shadow-lg"></div>
                        <div className="w-[160px] mb-[20px] h-[220px] bg-[#D4D5D6] rounded-md shadow-lg"></div>
                        <div className="w-[160px] mb-[20px] h-[220px] bg-[#D4D5D6] rounded-md shadow-lg"></div>
                        <div className="w-[160px] mb-[20px] h-[220px] bg-[#D4D5D6] rounded-md shadow-lg"></div>
                        <div className="w-[160px] mb-[20px] h-[220px] bg-[#D4D5D6] rounded-md shadow-lg"></div>
                        <div className="w-[160px] mb-[20px] h-[220px] bg-[#D4D5D6] rounded-md shadow-lg"></div>
                    </div>
                    {/* <Image src={} alt="activity1" /> */}
                </div>
                <div className="w-[400px] text-[24px]">
                    <h3 className="font-semibold mb-2">Our vision</h3>
                    <ul className="w-[440px] text-[#303232] text-[16px] flex flex-col gap-3">
                        <li>1. Menyediakan desain web yang unik yang sesuai dengan kebutuhan setiap klien.</li>
                        <li>2. Memberikan layanan pengembangan web berkualitas tinggi yang fokus pada kecepatan, keamanan, dan responsif.</li>
                        <li>3. Meningkatkan kepuasan pelanggan dengan melakukan komunikasi yang jelas, kerja sama yang erat, dan memberikan layanan purna jual terbaik.</li>
                        <li>4. Menjadi yang pertama dalam memanfaatkan teknologi terkini dalam pembuatan dan pengelolaan situs web.</li>
                    </ul>
                    <div className="mt-[60px] border-b-2 h-2 opacity-100 border-black w-[100px]"></div>
                </div>
            </section>

        </>
    )
}

export default AboutPage;