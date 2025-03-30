import React from 'react'
import instagram from "../assets/icons/instagram.svg"


const Footer = () => {

  const navItems = [
    { name: "About", link: "#" },
    { name: "Courses", link: "#" },
    { name: "Tiers", link: "#" },
    { name: "Team", link: "#" },
    { name: "Events", link: "#" },
    { name: "Contact Us", link: "#" }
  ];


  return (
    <div className='flex items-center justify-center flex-col w-full bg-dark-color text-white'>
      <footer className="w-full box-border">
        <div className="container mx-auto flex sm:flex-row flex-col gap-y-5 items-center justify-between py-10 p-4 sm:items-start">
          <div className='flex flex-col gap-y-8'>
            <div className='flex items-end gap-x-3'>
              Logo
              <span className='text-3xl'>Makers Club</span>
            </div>
            <div className='flex gap-x-2 justify-center sm:justify-start'>
              <a href="https://instagram.com" className="bg-yellowish p-3 rounded-full group">
                <img src={instagram} alt='...' className='w-[30px]' />
              </a>
              <a href="https://instagram.com" className="bg-yellowish p-3 rounded-full group">
                <img src={instagram} alt='...' className='w-[30px]' />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center sm:items-start space-y-3">

            {navItems.map((item) => (
              <a href={item.link} className='text-gray-300'>{item.name}</a>
            ))}
          </div>
        </div>
      </footer>
      <div className="bg-dark-color py-4 w-full border-t px-3 border-gray-300">
        <div className="container mx-auto text-center flex sm:flex-row flex-col gap-y-5 justify-between">
          <p className="text-lg"><a href="mailto:sazrisibatumi@gmail.com" className="hover:text-gray-400">etst@gmail.com</a></p>
          <p className="text-lg">All Rights Reserved&copy;</p>
          <p className="text-lg"><a href="tel:+995579166280" className="hover:text-gray-400">+995 579 166280</a></p>
        </div>
      </div>
    </div>
  )
}

export default Footer