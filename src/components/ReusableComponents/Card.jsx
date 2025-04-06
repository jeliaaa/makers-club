import React from 'react';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import arrowSvg from "../../assets/icons/arrowDown.svg";

const Card = ({ cardObject }) => {
    // const nav = useNavigate();
    return (
        <Link
            to={`/courses/${cardObject.id}`}
            className={`relative border-yellowish border-2 ${!cardObject.disabled && 'hover:border-main-color'} transition-all delay-150 rounded-md h-[500px] w-[350px] p-5 flex flex-col items-center justify-end bg-cover bg-center group`}
            style={{ backgroundImage: `url(${cardObject.img})` }}
        >
            {/* Gray Overlay when disabled */}
            {cardObject.disabled && (
                <>
                    <div className="absolute inset-0 bg-black z-3 opacity-50 flex items-center justify-center rounded-md"></div>
                    <div className='absolute top-1/2 -translate-y-1/2 left-0 z-10 bg-yellowish text-gray-50 p-3'>
                        Coming Soon...
                    </div>
                </>
            )}

            {/* Content Overlay */}
            {!cardObject.disabled && <div className='relative z-10 bg-amber-400 bg-opacity-50 p-5 rounded-md w-full text-center md:hidden block group-hover:block'>
                <h1 className='text-dark-color text-3xl font-bold'>{cardObject.title}</h1>
                {/* <p className='mt-3 text-white'>{cardObject.description}</p> */}
            </div>}
        </Link>
    );
};

export default Card;
