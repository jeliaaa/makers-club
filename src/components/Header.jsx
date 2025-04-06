import React, { useState } from 'react';
import menuSvg from "../assets/icons/menu.svg";
import XSvg from "../assets/icons/x.svg";


const navItems = [
    { name: "About", link: "about" },
    { name: "Courses", link: "courses" },
    { name: "Tiers", link: "tiers" },
    { name: "Team", link: "team" },
    // { name: "Events", link: "#" },
    // { name: "Contact Us", link: "#" }
];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="absolute top-0 left-0 w-full h-[10dvh] bg-dark-color text-white py-8 px-4 flex items-center justify-between z-50 border-b-2 border-white">
            <h1 className="text-xl font-bold">Logo</h1>
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden cursor-pointer">
                <img className='w-8' src={menuSvg} alt=".." />
            </button>

            <nav className="hidden font-bold text-xl md:flex gap-6">
                {navItems.map((item, index) => (
                    <a key={index} href={`#${item.link}`} className="hover:-translate-y-1 transition-all delay-75">
                        {item.name}
                    </a>
                ))}
            </nav>

            {/* Sidebar */}
            <div className={`fixed top-0 left-0 h-full w-64 bg-black/90 text-white p-5 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:hidden`}>
                <div className="flex justify-between items-center mb-5">
                    <h2 className="text-lg font-semibold">Menu</h2>
                    <button onClick={() => setIsOpen(false)} className='cursor-pointer'>
                        <img className='w-6' src={XSvg} alt=".." />
                    </button>
                </div>
                <nav className="flex flex-col gap-4">
                    {navItems.map((item, index) => (
                        <a key={index} href={`#${item.link}`} className="hover:underline">
                            {item.name}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;
