"use client"
import { IconCloudContainer } from './IconCloudContainer';
import { Tagline } from '../organism/main/mainContent/tagline';


export const MainContent = () => {

    return (
        <main className="lg:flex block items-center justify-between w-full m-auto 2xl:w-[1400px] h-max lg:h-[560px] md:mb-0 pb-0 lg:pb-12 px-3 xl:px-32 md:px-[50px] 2xl:px-20 mt-16 lg:mt-0">
            <Tagline />
            <IconCloudContainer />
        </main >
    )
}