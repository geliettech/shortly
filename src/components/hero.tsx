
const Hero = () => {
  return (
    <section className="bg-white flex items-center md:relative overflow-hidden min-h-screen">
      <div className="container flex flex-col-reverse lg:flex-row">
        
        {/* Text Content */}
        <div className="w-full max-w-2xl text-center lg:text-left mt-12 lg:mt-0 pb-28">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
            More than just shorter links
          </h1>
          <p className="mb-8 max-w-sm lg:max-w-md mx-auto lg:mx-0">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="btn-primary">Get Started</button>
        </div>

        {/* Image */}
        <div className="w-full lg:w-[746px] lg:absolute lg:-right-38 lg:top-0">
          <img
            src="/images/illustration-working.svg"
            alt="Illustration Working"
            className="w-full"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;