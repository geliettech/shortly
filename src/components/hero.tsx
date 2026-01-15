const Hero = () => {
  return (
    <section className="bg-white flex items-center md:relative overflow-hidden min-h-screen">
      <div className="container flex flex-col-reverse md:flex-row">
        
        {/* Text Content */}
        <div className="w-full max-w-2xl text-center md:text-left mt-6 md:mt-0 pb-34">
          <h2 className="text-3xl md:text-6xl font-bold text-gray-950 leading-tight">
            More than just shorter links
          </h2>
          <p className="mb-6 md:pr-40">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="btn-primary px-4 py-2">Get Started</button>
        </div>

        {/* Image */}
        <div className="w-full md:w-[648px] md:absolute md:-right-28 md:top-0">
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
