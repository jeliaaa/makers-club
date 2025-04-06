import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Mock data for investors
const makerQuotes = [
    {
        name: "Probably Tony Stark… or your average Makers Club member at –2AM",
        quote: "Sometimes you gotta build the thing before anyone asks for it.",
    },
    {
        name: "Makers Club Motto #47",
        quote: "If it works on the first try, you definitely forgot something.",
    },
    {
        name: "Makers Club Energy™",
        quote: "We’re not saying we’re superheroes. But we do have soldering irons, caffeine, and questionable sleep schedules.",
    },
    {
        name: "The Makers Club Engineering Philosophy",
        quote: "We don’t fail. We just prototype aggressively.",
    },
    {
        name: "Makers Club Reality Check",
        quote: "Genius is great. A glue gun and a deadline are better.",
    },
];


export default function Quotes() {

    return (
        <section className="py-12 bg-dark-color w-full">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-6xl text-center text-white mb-8">
                    What Do <span className="text-yellowish">They</span> Say
                </h2>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {makerQuotes.map((quote, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-yellowish shadow-lg rounded-lg text-4xl p-6 text-center">
                                <p className="italic text-white mb-4">
                                    "{quote.quote}"
                                </p>
                                <div className="text-xl text-white mb-2">
                                    Joined: {quote.joined}
                                </div>
                                <h3 className="text-3xl text-dark-color font-semibold my-5">{quote.name}</h3>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}