import StatisticsCard from "./statisticsCard";

const cardData = [
  {
    image: "/images/icon-brand-recognition.svg",
    title: "Brand Recognition",
    description:
      "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
  },
  {
    image: "/images/icon-detailed-records.svg",
    title: "Detailed Records",
    description:
      "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
  },
  {
    image: "/images/icon-fully-customizable.svg",
    title: "Fully Customizable",
    description:
      "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
  },
];

const Statistics = () => {
  return (
    <section className="container pt-46 pb-28">
      <div className="text-center max-w-xl mx-auto">
        <h2 className="font-bold text-3xl lg:text-4xl leading-loose text-gray-900">
          Advanced Statistics
        </h2>
        <p className="">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="statistics-cards">
        {cardData.map((card, index) => (
          <StatisticsCard
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            className={`${index === 0 ? "lg:mt-12 lg:mb-36" : ""} ${
              index === 1 ? "lg:mt-24 lg:mb-24" : ""
            } ${index === 2 ? "lg:mt-36 lg:mb-12" : ""}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Statistics;