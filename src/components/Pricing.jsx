import PricingCard from "./ReusableComponents/PricingCard";
import bgPricing from "../assets/banners/pricing_bg.webp"

const PricingSection = () => {
    const plans = [
        {
            title: "Business Plan",
            price: 0,
            benefits: ["AI Advisor", "Unlimited auto tracking", "1 Day transaction clearing", "Priority customer support", "All Widget Access", "Everything in team plan"],
            highlighted: true
        },
        {
            title: "Enterprise Plan",
            price: 10,
            benefits: ["AI Advisor", "Unlimited auto tracking", "7 Day transaction clearing", "Priority customer support", "All Widget Access", "Everything in team plan"],
            highlighted: false
        }
    ];

    return (
        <div className="flex flex-col text-start p-10 w-full min-h-dvh" style={{ backgroundImage: `url(${bgPricing})` }}>
            <h1 className="text-6xl  uppercase text-yellowish font-bold">Tiers</h1>
            <div className="flex md:flex-row flex-col gap-6 mt-6 w-full justify-center">
                {plans.map((plan, index) => (
                    <PricingCard key={index} {...plan} />
                ))}
            </div>
        </div>
    );
};

export default PricingSection;