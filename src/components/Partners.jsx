import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import partners from '../assets/banners/partners.jpg';


const advantages = [
    { img: '', name: 'Partner' },
    { img: '', name: 'Partner' },
    { img: '', name: 'Partner' },
    { img: '', name: 'Partner' },
    { img: '', name: 'Partner' },
];

const Partners = () => {
    return (
        <div className='w-full p-4 mx-auto overflow-hidden bg-cover bg-no-repeat rounded-md' style={{ backgroundImage: `url(${partners})` }}>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                modules={[Autoplay]}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {advantages.map((advantage, index) => (
                    <SwiperSlide key={index}>
                        <div className='flex flex-col items-center justify-center p-8 text-center rounded-md shadow-md' style={{ background: 'rgba(70, 8, 9, 0.3)' }}>
                            <img src='https://picsum.photos/100' className='z-10' />
                            <p className='mt-4 text-lg font-semibold text-white'>{advantage.name}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className='w-full mt-3 md:p-10 flex justify-center'>
                <div className='md:w-3/4 w-full p-10 flex-col flex items-center' style={{ background: 'rgba(173, 138, 42, 0.8)' }}>
                    <h1 className='text-5xl capitalize text-center font-bold text-white'>Join our club!</h1>
                    <button className='text-5xl capitalize text-white bg-dark-color py-4 rounded-md cursor-pointer px-10 mt-10 `'>Join</button>
                </div>
            </div>
        </div>
    );
};

export default Partners;