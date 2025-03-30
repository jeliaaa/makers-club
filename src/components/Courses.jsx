import React from 'react'
import printing from "../assets/courses/3d_printing.jpg"
import arduino from "../assets/courses/arduino.jpg"
import pcb from "../assets/courses/pcb.jpg"
import more from "../assets/courses/more.jpg"

import Card from './ReusableComponents/Card'

const Courses = () => {
    const services = [
        { disabled: false, title: "3D Printing & Fusion360", description: "desc1", img: printing },
        { disabled: false, title: "Arduino", description: "ჩვენს ონლაინ-პლატფორმაზე ინგლისური ენის 70-ზე მეტი, უნიკალური ტესტის ეგზემპლარია.", img: arduino },
        { disabled: false, title: "PCB Design", description: "ჩვენს ონლაინ-პლატფორმაზე მათემატიკის 30-ზე მეტი, უნიკალური ტესტის ეგზემპლარია.", img: pcb },
        { disabled: true, title: "More...", description: "", img: more }
    ]

    return (
        <div className='bg-dark-color w-full p-10'>
            <h1 className='text-6xl text-yellowish font-bold uppercase'>Our courses</h1>
            <div className='flex flex-wrap w-full py-10 p-5 bg-red-950 gap-x-10 gap-y-10 items-center justify-center'>
                {services.map((course) => (
                    <Card cardObject={course} />
                ))}
            </div>
        </div>
    )
}

export default Courses