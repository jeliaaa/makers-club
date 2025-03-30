import React from 'react'
import MainHero from '../components/MainHero'
import AboutUs from '../components/AboutUs'
import Courses from '../components/Courses'
import PricingSection from '../components/Pricing'
import Founders from '../components/Founders'
import Partners from '../components/Partners'

const Main = () => {
    return (
        <div className='w-full flex flex-col items-center'>
            <MainHero />
            <AboutUs />
            <Courses />
            <PricingSection />
            <Founders />
            <Partners />
        </div>
    )
}

export default Main