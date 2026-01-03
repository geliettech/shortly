const Hero = () => {
  return (
    <section className="bg-white">
      <div className="flex justify-between items-center container">
        <div className="max-w-3xl mx-auto">
          <h2>More than just shorter links</h2>
          <p>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.{" "}
          </p>
          <button>Get Started</button>
        </div>
        <div>
          <img
            src="/images/illustration-working.svg"
            alt="Illustration Working"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
