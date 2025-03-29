import React from 'react'
import { useNavigate } from 'react-router-dom'
import arrowSvg from "../../assets/icons/arrowDown.svg"

const Card = ({ cardObject }) => {
    const nav = useNavigate();
    return (
        <div className={`relative border-yellowish border-2 ${!cardObject.disabled && 'hover:border-main-color'} transition-all delay-150 rounded-md h-[500px] w-[350px] p-5 flex flex-col items-center`}>
            {/* Gray Overlay when disabled */}
            {cardObject.disabled && (
                <>
                    <div className="absolute inset-0 bg-black z-3 opacity-50 flex items-center justify-center rounded-md"></div>
                    <div className='absolute top-1/2 -translate-y-1/2 left-0 z-10 bg-yellowish text-gray-50 p-3'>
                        Coming Soon...
                    </div>
                </>
            )}

            <div className='flex flex-col items-center h-[70%]'>
                <h1 className='text-center text-yellowish text-5xl'>{cardObject.title}</h1>
                <img src={cardObject.img} className='w-[60%] mt-5' />
            </div>
            <p className='mt-5 text-white'>{cardObject.description}</p>

            <button
                className={`flex items-center mt-5 gap-x-2 text-white! bg-yellowish  px-4 py-2 rounded-md 
                    ${cardObject.disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={cardObject.disabled}
                onClick={() => nav("/information")}
            >
                მეტის ნახვა...
                <img src={arrowSvg} className='-rotate-45 w-[30px]' />
            </button>
        </div>
    )
}

export default Card