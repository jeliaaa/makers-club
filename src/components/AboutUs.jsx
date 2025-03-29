import HeroImg from "../assets/banners/about_hero.jpg";

const AboutUs = () => {
    return (
        <section className="flex flex-col md:flex-row w-full h-auto md:h-dvh">
            {/* Left Side - Text Content */}
            <div className="w-full md:w-1/2 flex flex-col items-start text-center md:text-left p-8 md:p-10 bg-yellowish text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase">About the Makers Club</h1>
                <p className="text-lg md:text-xl mt-3 mb-6 text-start">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam quia, atque facilis consequatur ullam porro necessitatibus animi autem. Placeat sapiente voluptatum accusamus ipsam iusto temporibus, libero molestias quam, asperiores quis nesciunt fugit, mollitia sequi repudiandae laudantium cupiditate voluptas earum similique aut distinctio molestiae. Provident sapiente incidunt sit, harum eius quod quidem cupiditate aliquam enim impedit voluptatibus inventore laboriosam, sequi possimus reprehenderit dignissimos quibusdam? Velit nobis veniam doloribus recusandae molestiae. Adipisci eligendi, rem consectetur enim deleniti, sequi aliquid iusto, magnam quasi quae optio cumque fugit earum repudiandae tempore id dicta. Cupiditate vitae exercitationem excepturi repellat laborum aut sequi esse quo eum!
                </p>

                {/* Benefits List */}
                <ul className="list-disc text-xl md:text-3xl font-bold list-inside text-start space-y-3">
                    <li>🔧 Hands-on workshops and training sessions</li>
                    <li>🤝 Collaborate with like-minded individuals</li>
                    <li>🚀 Access to cutting-edge tools and technology</li>
                    <li>🎤 Industry guest speakers and networking opportunities</li>
                    <li>🏆 Participate in exciting competitions and hackathons</li>
                    <li>📚 Learning resources and mentorship programs</li>
                </ul>
            </div>

            {/* Right Side - Image */}
            <div className="w-full md:w-1/2 h-72 md:h-auto">
                <img src={HeroImg} alt="Hero" className="w-full h-full object-cover" />
            </div>
        </section>
    );
};

export default AboutUs;
