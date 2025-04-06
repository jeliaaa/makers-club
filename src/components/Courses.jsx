import React from 'react'
import printing from "../assets/courses/3d_printing.jpg"
import arduino from "../assets/courses/arduino.jpg"
import pcb from "../assets/courses/pcb.jpg"
import more from "../assets/courses/more.jpg"

import Card from './ReusableComponents/Card'

const Courses = () => {
    const services = [
        { id: 0, disabled: false, title: "3D Printing & Fusion360", description: "desc1", img: printing },
        { id: 1, disabled: false, title: "Arduino", description: "ჩვენს ონლაინ-პლატფორმაზე ინგლისური ენის 70-ზე მეტი, უნიკალური ტესტის ეგზემპლარია.", img: arduino },
        { id: 2, disabled: false, title: "PCB Design", description: "ჩვენს ონლაინ-პლატფორმაზე მათემატიკის 30-ზე მეტი, უნიკალური ტესტის ეგზემპლარია.", img: pcb },
        { id: 3, disabled: false, title: "3D Modeling", description: "desc1", img: printing },
        { id: 4, disabled: true, title: "More...", description: "", img: more }
    ]

    return (
        <div id='courses' className='bg-dark-color w-full p-10'>
            <h1 className='text-6xl mb-4 text-yellowish font-bold uppercase'>Our courses</h1>
            <div className='flex flex-wrap w-full py-10 p-5 bg-red-950 gap-x-10 gap-y-10 items-center justify-center'>
                {services.map((course) => (
                    <Card cardObject={course} />
                ))}
            </div>
        </div>
    )
}

export default Courses