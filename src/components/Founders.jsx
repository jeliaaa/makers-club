import React from 'react'
import bgFounders from "../assets/banners/foundes.webp"
import fb from "../assets/icons/fb.svg"
import instagram from "../assets/icons/instagram.svg"

const Founders = () => {
    const founders = [
        {
            name: "John Doe",
            role: "Co-Founder & CEO",
            image: "https://via.placeholder.com/150",
            description: "John leads the company with a vision for innovation and excellence."
        },
        {
            name: "Jane Smith",
            role: "Co-Founder & CTO",
            image: "https://via.placeholder.com/150",
            description: "Jane drives the technology and product development with a focus on quality."
        }
    ];
    return (
        <div className='min-h-dvh w-full flex items-center justify-end' style={{ backgroundImage: `url(${bgFounders})` }}>
            <div className="flex flex-col items-center w-full md:w-4/5 md:p-10 md:flex-row justify-center md:justify-end md:gap-10">
                {founders.map((founder, index) => (
                    <div key={index} className="p-6 rounded-xl gap-y-3 max-w-xs flex flex-col items-center hover:scale-105 transition-transform">
                        <img src="https://mimicry.today/wp-content/uploads/2017/03/testy3-1.png" alt={founder.name} className="h- object-cover mb-4" />
                        <hr className='w-full h-1 bg-white' />
                        <h2 className="text-xl font-bold text-yellowish">{founder.name}</h2>
                        <p className="text-white">{founder.role}</p>
                        <p className="mt-2 text-sm text-white">{founder.description}</p>
                        <div className='flex gap-x-5'>
                            <a href="links"><img className='w-8' src={fb} alt="" /></a>
                            <a href="links"><img className='w-8' src={instagram} alt="" /></a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Founders