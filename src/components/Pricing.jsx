import PricingCard from "./ReusableComponents/PricingCard";
import bgPricing from "../assets/banners/pricing_bg.webp"
import { useState } from "react";


const PricingSection = () => {
    const [checked, setChecked] = useState(null)
    const pricingOptions = [
        {
            index: 0,
            title: "Basic Tier",
            price: 0,
            highlighted: false,
            benefits: [
                "3D Modelling (Basics) – Learn the very basics of 3D design and digital prototyping.",
                "Arduino 101 – Introduction to coding and microcontroller basics using Tinkercad simulations and hands-on kits.",
                "Introduction to 3D Printing – Understand slicers, filament types, and machine operation for successful prints.",
            ],
        },
        {
            index: 1,
            title: "Advanced Tier",
            price: 10,
            highlighted: true,
            benefits: [
                "Fusion 360 – Advanced parametric design and functional / precision prototyping.",
                "Advanced 3D Printing – Multi-material printing, support optimization, print troubleshooting & print post-processing.",
                "PCB Design with Altium – Create and develop custom printed circuit boards for real-world electronics.",
                "Soldering & Circuit Fundamentals – Learn essential soldering skills and assemble functional electronic circuits.",
            ],
        },
    ];

    return (
        <div id="tiers" className="flex flex-col text-start p-10 w-full min-h-dvh" style={{ backgroundImage: `url(${bgPricing})` }}>
            <h1 className="text-6xl  uppercase text-yellowish font-bold">Tiers</h1>
            <div className="flex md:flex-row flex-col gap-6 mt-6 w-full justify-center">
                {pricingOptions.map((option, i) => (
                    <PricingCard
                        key={i}
                        index={option.index}
                        setChecked={setChecked}
                        checked={checked === option.index}
                        title={option.title}
                        price={option.price}
                        benefits={option.benefits}
                        highlighted={option.highlighted}
                    />
                ))}
            </div>
            {checked !== null && <a href="https://docs.google.com/forms/d/e/1FAIpQLSfH1dEWa0P78v8aOS7vjWyrkqUwb12o1VJQ9bAbuC6chxHkOQ/viewform?usp=dialog" className="text-center text-white text-4xl mt-15 bg-dark-color rounded-xl p-5 hover:-translate-y-1">Apply</a>}
        </div>
    );
};

export default PricingSection;