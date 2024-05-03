import Stars from '@/assets/images/Stars.png'
import Image from 'next/image'
export const TermsHeader = () => {
    return (
        <div className="px-32 hidden md:block" >
            <div className=" bg-[#1B2538] h-[200px] w-full mt-10 rounded-2xl p-10 flex justify-between">
                <h1 className="text-5xl font-semibold w-[30%] text-white">Terms & <span className="text-[#6C9BFF]">Conditions</span></h1>
                <div className='flex'>
                    <Image
                        src={Stars}
                        width={200}
                        height={200}
                        alt='Stars Image'
                        className='relative top-[-25px]'
                    />
                    <Image
                        src={Stars}
                        width={200}
                        height={200}
                        alt='Stars Image'
                        className='absolute right-32'
                    />
                </div>
            </div>

        </div>
    )
}