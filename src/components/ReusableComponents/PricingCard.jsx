export default function PricingCard({ index, setChecked, checked, title, price, benefits, highlighted }) {
    return (
        <div onClick={() => setChecked(index)} className={`hover:max-w-[620px] transition-all delay-75 pb-10 cursor-pointer flex flex-col gap-y-2 p-6 relative rounded-xl w-full group-hover:translate-y-10 max-w-[600px] text-white shadow-lg ${highlighted ? 'bg-gradient-to-r from-yellowish to-yellow-400' : 'bg-gradient-to-l from-dark-color to-red-800'}`}>
            <div className={`rounded-full w-8 aspect-square border-2 absolute right-5 p-1`}>
                {checked && <div className="bg-white w-full aspect-square rounded-full" />}
            </div>
            <div>
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="mt-4 text-4xl font-bold">€{price}<span className="text-lg">/Mo</span></p>
            </div>
            <ul className="mt-4 space-y-2 text-lg flex flex-col">
                {benefits.map((benefit, index) => (
                    <li key={index} className="border-l-4 border-dark-color pl-2 flex items-center gap-2">
                        {benefit}
                    </li>
                ))}
            </ul>
            {/* <button className={`mt-6 py-3 px-6 rounded-md font-semibold ${highlighted ? 'bg-white text-yellowish' : 'bg-white text-dark-color'} cursor-pointer hover:-translate-y-1 transition-all delay-75`}>See more</button> */}
        </div>
    );
};