import IconCloud from "../atoms/icon-cloud"
import { IconCloudData } from "@/data/IconCloudData"

export const IconCloudContainer = () => {
  return (
    <div className='relative md:-left-5 md:flex justify-center items-center '>
      {/* <div className='absolute z-[100]'>
        <IconCloud iconSlugs={IconCloudData} />
      </div> */}
      {/* <div className='md:flex flex-col absolute left-10 md:left-[200px] lg:left-[-50px] items-center gap-4 pt-8 z-[100]'>
                    <div className='w-[240px] animate-floating backdrop-blur-sm bg-white/65 dark:bg-white/80 shadow-lg h-[85px] border border-black rounded-md flex ml-6 md:ml-0 justify-center items-center'>
                        <h3 className='text-[#8D868C]'>Responsive Design</h3>
                    </div>
                    <div className='flex justify-center relative gap-10'>
                        <div className='mt-10 pr-8 pl-8 animate-floating pb-3  pt-3 backdrop-blur-sm bg-white/65 dark:bg-white/80 shadow-lg flex-col border border-black rounded-md flex justify-center items-center'>
                            <h3 className='text-[#216BFF] font-semibold'>Include</h3>
                            <p className='text-[#8D868C] text-[13px] text-center'>Domain & hosting</p>
                        </div>
                        <div className='mt-6 mr-10 pr-5 pl-5 animate-floating backdrop-blur-sm bg-white/65 dark:bg-white/80 shadow-lg h-[50px] py-8 md:py-0 border border-black rounded-md flex justify-center items-center text-[#8D868C] text-[13px] text-center'>High level SEO</div>
                    </div>
                </div> */}

      <div className='lg :bg-[#E78F9A] bg-[#e78f9971] dark:bg-[#0F334F] z-[10] relative md:-top-[50px] md:w-96 w-80 h-80 blur-[80px] rounded-md' />
      <div className='lg :bg-[#85A6F4] bg-[#85a6f482] dark:bg-[#0F334F] z-[10] absolute -left-[200px] md:bottom-[-150px] w-96 h-80 blur-[80px] rounded-md' />
    </div>
  )
}