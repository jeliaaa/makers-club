import React from 'react'
import Card from './ReusableComponents/Card'

const Courses = () => {
    const services = [
        { disabled: false, title: "3D Printing & Fusion360", description: "ჩვენს ონლაინ-პლატფორმაზე მათემატიკის 30-ზე მეტი, უნიკალური ტესტის ეგზემპლარია.", img: "https://picsum/photos/300" },
        { disabled: false, title: "Arduino", description: "ჩვენს ონლაინ-პლატფორმაზე ინგლისური ენის 70-ზე მეტი, უნიკალური ტესტის ეგზემპლარია.", img: "https://picsum/photos/300" },
        { disabled: false, title: "PCB Design", description: "ჩვენს ონლაინ-პლატფორმაზე მათემატიკის 30-ზე მეტი, უნიკალური ტესტის ეგზემპლარია.", img: "https://picsum/photos/300" },
        { disabled: true, title: "More...", description: "", img: "https://picsum/photos/300" }
    ]

    return (
        <div className='bg-dark-color w-full p-10'>
            <h1 className='text-6xl text-yellowish  uppercase'>Our courses</h1>
            <div className='flex flex-wrap w-full py-10 p-5 bg-red-950 gap-x-10 gap-y-10 items-center justify-center'>
                {services.map((course) => (
                    <Card cardObject={course} />
                ))}
            </div>
        </div>
    )
}

export default Courses