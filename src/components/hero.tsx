const Hero = () => {
  return (
    <section className="bg-white min-h-[600px] flex items-center pb-24">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center container">
        <div className="w-full max-w-3xl mx-auto text-center md:text-left mt-4 md:mt-0">
          <h2 className="text-3xl md:text-6xl font-bold text-gray-950 leading-tight">More than just shorter links</h2>
          <p className="mb-6 pr-0 md:pr-38">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="btn-primary">Get Started</button>
        </div>
        <div className="md:w-[900px] md:h-[400px]">
          <img
            src="/images/illustration-working.svg"
            alt="Illustration Working" className="h-full w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
