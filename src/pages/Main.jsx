import React from 'react'
import MainHero from '../components/MainHero'
import AboutUs from '../components/AboutUs'
import Courses from '../components/Courses'

const Main = () => {
    return (
        <div className='w-full flex flex-col items-center'>
            <MainHero />
            <AboutUs />
            <Courses />
        </div>
    )
}

export default Main