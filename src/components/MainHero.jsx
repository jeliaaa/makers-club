import React from 'react'
import mainHero from "../assets/banners/main_hero.webp"
import arrowDown from "../assets/icons/arrowDown.svg"
import { animateScroll } from 'react-scroll'
import fb from "../assets/icons/fb.svg"
import instagram from "../assets/icons/instagram.svg"
import tiktok from "../assets/icons/tiktok.svg"
import whatsapp from "../assets/icons/whatsapp.svg"
import discord from "../assets/icons/discord.svg"




const MainHero = () => {
    const socials = [
        { to: '', img: fb },
        { to: 'https://www.instagram.com/makersclub_cub?igsh=MWhhYTl5N2Z1bTFrdA%3D%3D&utm_source=qr ', img: instagram },
        { to: 'https://discord.gg/FQw5vYXY', img: discord },
        { to: 'https://chat.whatsapp.com/ET3NT1DwFAWFwcgjhtXeun', img: whatsapp },
        { to: '', img: tiktok }
    ]
    return (
        <div className='relative pt-[11dvh] px-10 flex w-full h-dvh bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `url(${mainHero})` }}>
            <div className='w-full lg:w-1/2'>
                <h1 className="[text-shadow:_0_2px_4px_rgb(0_0_0_/_0.8)] text-white text-4xl lg:text-7xl uppercase font-bold">Welcome <br /> to the<br /> makers club</h1>
                <h6 className='text-white text-3xl lg:text-5xl [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.8)] mt-2'>If stark had a club, <br /> this would be it.</h6>
                <a href='https://eur01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fapps.powerapps.com%2Fplay%2Fe%2Fdefault-f78e973e-5c0b-4ab8-bbd7-9887c95a8ebd%2Fa%2Ffbf8e4bd-5b65-4f44-a23e-f7a2ca3cfbc2%3FtenantId%3Df78e973e-5c0b-4ab8-bbd7-9887c95a8ebd%26sourcetime%3D1738580797169&data=05%7C02%7Cdrusiia%40constructor.university%7C59d035bae6f44bead84108dd615336d9%7Cf78e973e5c0b4ab8bbd79887c95a8ebd%7C0%7C0%7C638773732212242352%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=SNDCqKNzg%2BXCIoOWP6O4wmPdoVN80PMToit6YXFmxFw%3D&reserved=0' className='w-[90%] p-3 md:w-fit flex gap-4 mt-30 lg:gap-x-10 items-center bg-red-950 group md:p-10 text-white rounded-xl lg:mt-60 cursor-pointer hover:border border-white text-2xl lg:text-4xl uppercase tracking-wide font-extrabold'>
                    <span>join club</span>
                    <img src={arrowDown} className='-rotate-90 w-[30px] group-hover:translate-x-5 group-hover:-rotate-180 transition-all delay-150' />
                </a>
            </div>

            <div className='absolute rounded-l-xl right-0 top-1/2  -translate-y-1/2 bg-red-950 text-white flex flex-col'>
                {socials.map((elem, _id) => (
                    <>
                        <a href={elem.to} className='p-4 hover:-translate-x-1.5 transition-all delay-75'>
                            <img src={elem.img} alt='...' className='w-[30px]' />
                        </a>
                        {_id !== 4 && <hr />}
                    </>
                ))}
            </div>
            <button onClick={() => animateScroll.scrollTo(1000)} className='cursor-pointer group w-[80px] flex items-center justify-center aspect-square rounded-full border border-white absolute right-1/2 translate-x-1/2 bottom-2'>
                <img src={arrowDown} alt='...' className='group-hover:translate-y-4 delay-100 transition-all w-[30px]' />
            </button>
        </div>
    )
}

export default MainHero