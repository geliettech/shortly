interface CardProps {
  image: string;
  title: string;
  description: string;
  className?: string;
}

const StatisticsCard = ({
  image,
  title,
  description,
  className,
}: CardProps) => {
  return (
    <div className={`bg-white p-4 rounded-lg flex flex-col items-center lg:items-start text-center lg:text-left ${className}`}>
      <div className="bg-purple-950 p-4 rounded-full w-16 h-16 mb-6 -mt-12">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-contain"
        />
      </div>
      <h3 className="font-bold py-4 text-xl text-gray-900">{title}</h3>
      <p className="leading-loose">{description}</p>
    </div>
  );
};

export default StatisticsCard;
