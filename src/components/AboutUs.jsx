import HeroImg from "../assets/banners/about_hero.jpg";

const AboutUs = () => {
    return (
        <section id="about" className="flex flex-col md:flex-row w-full h-auto md:h-dvh">
            {/* Left Side - Text Content */}
            <div className="w-full md:w-1/2 flex flex-col items-start text-center md:text-left p-8 md:p-10 bg-yellowish text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase">About the Makers Club</h1>
                <p className="text-lg md:text-xl mt-3 mb-6 text-start">
                    The Makers Club is a hub for innovation, engineering, robotics, and entrepreneurship. Our mission is to empower students to transform ideas into reality through hands-on experience in 3D printing, electronics, and prototyping. We provide access to industry-standard tools, workshops, and a collaborative space to develop groundbreaking projects. Whether building robots, designing products, or launching startups, our members gain practical skills and the support needed to make a real impact.
                </p>

            </div>

            {/* Right Side - Image */}
            <div className="w-full md:w-1/2 h-72 md:h-auto">
                <img src={HeroImg} alt="Hero" className="w-full h-full object-cover" />
            </div>
        </section>
    );
};

export default AboutUs;
