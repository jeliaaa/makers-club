import React, { useEffect } from 'react'
import printing from "../assets/courses/3d_printing.jpg"
import arduino from "../assets/courses/arduino.jpg"
import pcb from "../assets/courses/pcb.jpg"
import more from "../assets/courses/more.jpg"
import { useParams } from 'react-router-dom'
import { Element, scroller } from 'react-scroll'

const CardsSingle = () => {
    const { id } = useParams();
    const services = [
        {
            id: 0,
            disabled: false,
            title: "3D Printing & Fusion360",
            description: `
            <h3 style="font-size:35px; margin-bottom:10px; font-weight:bold">Design to Production</h3>
            <p>Print your CAD models, enclosures, gears, and absolutely anything. Everything you model and design in previous courses comes alive here.</p>
            <ul style="list-style: disc">
              <li>Learn slicing, filaments, printer setup & tuning</li>
              <li>Print your Fusion 360 models for Arduino/PCB projects</li>
              <li>Print your own parts from CAD models</li>
              <li>Directly applies your past course work</li>
              <li>Troubleshoot prints and optimize quality</li>
            </ul>
          `,
            img: printing,
        },
        {
            id: 1,
            disabled: false,
            title: "Arduino",
            description: `
            <h3 style="font-size:35px; margin-bottom:10px; font-weight:bold">Arduino for Innovators: From Basics to Projects</h3>
            <p>Bring your designs to life with electronics! Learn how to program microcontrollers and connect your sensors, motors, and LEDs to the 3D models and circuits you create.</p>
            <ul style="list-style: disc">
              <li>Understand electronic components</li>
              <li>Basics of C/C++ for Arduino microcontrollers</li>
              <li>Build real-world projects</li>
              <li>Used directly in 3D designs and PCB planning</li>
            </ul>
          `,
            img: arduino,
        },
        {
            id: 2,
            disabled: false,
            title: "PCB Design",
            description: `
            <h3 style="font-size:35px; margin-bottom:10px; font-weight:bold">Build Real-World Electronics</h3>
            <p>Take your Arduino projects to the next level by creating custom circuit boards. The PCB designs you make here fit inside the models you created in Fusion 360 and work seamlessly with your Arduino code.</p>
            <ul style="list-style: disc">
              <li>Build Real-World Electronics</li>
              <li>Learn schematic design and layout</li>
              <li>Create professional, manufacturable PCBs</li>
              <li>Design custom PCBs in Altium</li>
              <li>Manufacture and solder your own boards</li>
              <li>Ties directly into Arduino and 3D model work</li>
            </ul>
          `,
            img: pcb,
        },
        {
            id: 3,
            disabled: false,
            title: "3D Modeling",
            description: `
            <h3 style="font-size:35px; margin-bottom:10px; font-weight:bold">Mastering 3D Design with Fusion 360</h3>
            <p>Learn the foundations of 3D modelling to create parts for your electronics projects, robots, and custom devices. The designs you create here will be used in your Arduino builds and printed in the 3D Printing course.</p>
            <ul style="list-style: disc">
              <li>Learn to design mechanical parts and enclosures</li>
              <li>Parametric modelling & assemblies</li>
              <li>Real project-based learning</li>
              <li>Perfect for robotics, prototyping, and product design</li>
              <li>Essential for Arduino enclosures and PCB holders</li>
            </ul>
          `,
            img: printing,
        },
        {
            id: 4,
            disabled: true,
            title: "More...",
            description: `
            <h3 style="font-size:35px; margin-bottom:10px; font-weight:bold">Bonus Courses</h3>
            <p>In addition to the main four core courses, we’re opening up space for creativity, innovation, and mentorship through our Bonus Courses. These are special courses run by our core team mentors, each sharing their unique skillsets — from advanced robotics and AI to wearable tech, game development, and beyond.</p>
          `,
            img: more,
        }
    ];


    useEffect(() => {
        scroller.scrollTo(id);
    }, [id])
    return (
        <div className='mt-[10dvh]'>
            {services.map((serv) => (
                <Element name={serv.id} key={serv.id} className="flex flex-col md:flex-row w-full h-auto md:h-dvh">
                    {/* Left Side - Text Content */}
                    {serv.id % 2 === 0 && <div className="w-full hidden md:block md:w-1/2 h-72 md:h-auto">
                        <img src={serv.img} alt="Hero" className="w-full h-full object-cover" />
                    </div>}
                    <div className="w-full md:w-1/2 flex flex-col items-start text-center md:text-left p-8 md:p-10 bg-yellowish text-white">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase">{serv.title}</h1>
                        <p dangerouslySetInnerHTML={{ __html: serv.description }} className="text-lg md:text-xl mt-3 mb-6 text-start"></p>
                    </div>
                    {serv.id % 2 !== 0 && <div className="w-full hidden md:block md:w-1/2 h-72 md:h-auto">
                        <img src={serv.img} alt="Hero" className="w-full h-full object-cover" />
                    </div>}
                    <div className="w-full block md:hidden md:w-1/2 h-72 md:h-auto">
                        <img src={serv.img} alt="Hero" className="w-full h-full object-cover" />
                    </div>
                </Element>
            ))}
        </div>
    )
}

export default CardsSingle