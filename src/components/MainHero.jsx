import React from 'react'
import mainHero from "../assets/banners/main_hero.webp"
import arrowDown from "../assets/icons/arrowDown.svg"
import { animateScroll } from 'react-scroll'
import fb from "../assets/icons/fb.svg"
import instagram from "../assets/icons/instagram.svg"
import youtube from "../assets/icons/youtube.svg"



const MainHero = () => {
    return (
        <div className='relative pt-30 px-10 flex w-full h-dvh bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `url(${mainHero})` }}>
            <div className='w-full lg:w-1/2'>
                <h1 className="[text-shadow:_0_2px_4px_rgb(0_0_0_/_0.8)] text-white text-7xl lg:text-9xl uppercase font-bold">Welcome to the makers club</h1>
                <h6 className='text-white text-5xl lg:text-7xl [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.8)] ml-5'>If stark had a club, this would be it.</h6>
                <button className='w-[90%] mt-20 p-5 md:w-fit flex gap-x-10 items-center bg-red-950 group md:p-10 text-white rounded-xl md:mt-10 cursor-pointer hover:border border-white text-4xl uppercase tracking-wide font-extrabold'>
                    <span>join club</span>
                    <img src={arrowDown} className='-rotate-90 w-[30px] group-hover:translate-x-5 group-hover:-rotate-180 transition-all delay-150' />
                </button>
            </div>

            <div className='absolute rounded-l-xl right-0 top-1/2  -translate-y-1/2 bg-red-950 text-white flex flex-col'>
                <a href='fb' className='p-4 hover:-translate-x-1.5 transition-all delay-75'>
                    <img src={fb} alt='...' className='w-[30px]' />
                </a>
                <hr />
                <a href='fb' className='p-4 hover:-translate-x-1.5 transition-all delay-75'>
                    <img src={instagram} alt='...' className='w-[30px]' />
                </a>
                <hr />

                <a href='fb' className='p-4 hover:-translate-x-1.5 transition-all delay-75'>
                    <img src={youtube} alt='...' className='w-[30px]' />
                </a>
            </div>
            <button onClick={() => animateScroll.scrollTo(1000)} className='cursor-pointer group w-[80px] flex items-center justify-center aspect-square rounded-full border border-white absolute right-1/2 translate-x-1/2 bottom-2'>
                <img src={arrowDown} alt='...' className='group-hover:translate-y-4 delay-100 transition-all w-[30px]' />
            </button>
        </div>
    )
}

export default MainHero