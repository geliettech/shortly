import StatisticsCard from "./statisticsCard";

const Statistics = () => {
  return (
    <section>
      <div className="container py-28">
        <div className="text-center max-w-xl mx-auto pt-4">
          <h2 className="font-bold text-3xl leading-loose text-gray-900">Advanced Statistics</h2>
          <p className="">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className="statistics-cards flex flex-col md:flex-row gap-12 md:gap-8 mt-16 relative z-0 after:content-[''] after:bg-blue-400 after:absolute after:-z-10 after:w-2 after:h-full after:left-[50%] md:after:h-2 md:after:w-full md:after:left-0 md:after:top-[50%]">
          <StatisticsCard
            image="/images/icon-brand-recognition.svg"
            alt="Brand Recognition"
            title="Brand Recognition"
            description="Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content."
              className="md:mb-16"
          />
          <StatisticsCard
            image="/images/icon-detailed-records.svg"
            alt="Detailed Records"
            title="Detailed Records"
            description="Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions." className="md:mt-8 md:mb-8"
          />
          <StatisticsCard
            image="/images/icon-fully-customizable.svg"
            alt="Fully Customizable"
            title="Fully Customizable"
            description="Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement." className="md:mt-16"
          />
        </div>
      </div>
    </section>
  );
};

export default Statistics;
