const Hero = () => {
  return (
    <section className="bg-white min-h-[500px] flex items-center pb-20">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-6xl font-bold text-gray-950 leading-tight">More than just shorter links</h2>
          <p className="mb-6 pr-38">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="btn-primary">Get Started</button>
        </div>
        <div className="w-[900px] h-[450px]">
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
