import React from 'react'
import bgFounders from "../assets/banners/foundes.webp"
import linkedin from "../assets/icons/linkedin.svg"
import instagram from "../assets/icons/instagram.svg"

const Founders = () => {
    const founders = [
        {
            name: "David Rusia",
            role: "Co-Founder & CEO",
            image: "https://via.placeholder.com/150",
            description: "John leads the company with a vision for innovation and excellence.",
            linkedin: "https://www.linkedin.com/in/davidrusia?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
            ig: "https://www.instagram.com/david_rusia_?igsh=dmltcTBydzFrNDhy&utm_source=qr"
        },
        {
            name: "Saba Khaburzania",
            role: "Co-Founder & CTO",
            image: "https://via.placeholder.com/150",
            description: "Jane drives the technology and product development with a focus on quality.",
            linkedin: "https://www.linkedin.com/in/udefeated?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
            ig: "https://www.instagram.com/sabakhaburzania._.7?igsh=dmp0c250dXpqZzFs"
        }
    ];
    return (
        <div id='team' className='min-h-dvh w-full flex items-center justify-end' style={{ backgroundImage: `url(${bgFounders})` }}>
            <div className='flex flex-col gap-y-2 p-4  md:w-1/2'>
                <div className="flex flex-col items-center w-full md:w-4/5 md:p-10 md:flex-row justify-center md:justify-end md:gap-10">
                    {founders.map((founder, index) => (
                        <div key={index} className="p-6 rounded-xl gap-y-3 max-w-xs flex flex-col items-center hover:scale-105 transition-transform">
                            <img src="https://mimicry.today/wp-content/uploads/2017/03/testy3-1.png" alt={founder.name} className="h- object-cover mb-4 rounded-full" />
                            <hr className='w-full h-1 bg-white' />
                            <h2 className="text-xl font-bold text-yellowish bg-dark-color p-3 rounded-md">{founder.name}</h2>
                            <div className='flex gap-x-5'>
                                <a href="links"><img className='w-8' src={linkedin} alt="" /></a>
                                <a href="links"><img className='w-8' src={instagram} alt="" /></a>
                            </div>
                        </div>
                    ))}
                </div>
                <p className='text-white w-full bg-yellowish p-4 rounded-md text-xl'>
                    We’re Saba Khaburzania and David Rusia — best friends from Georgia with a shared passion for technology, innovation, and entrepreneurship. Since joining Constructor University, we’ve dedicated ourselves to launching initiatives that foster innovation and entrepreneurship, we founded <span className='font-extrabold underline text-2xl'>Momentum</span>, a two-man brand built on hands-on experience and bold ambition. With a track record of winning every major robotics competition in our country, our journey reached new heights when we had the incredible opportunity to visit the NASA Space Center in Houston.
                </p>
            </div>
        </div>
    )
}

export default Founders