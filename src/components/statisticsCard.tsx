

interface CardProps {
    image: string;
    alt: string;
    title: string;
    description: string;
    className?: string;
}

const StatisticsCard = ({image, alt, title, description, className}: CardProps) => {
  return (
    <div className={`statistics-card bg-white p-4 rounded-lg ${className}`}>
      <div className="bg-purple-950 p-3 rounded-full w-16 h-16 mb-6 -mt-12">
        <img src={image} alt={alt} loading="lazy" className="w-full h-full object-contain" />
      </div>
      <h3 className="font-bold py-4 text-xl text-gray-900">{title}</h3>
      <p className="leading-loose">{description}</p>
    </div>
  );
};

export default StatisticsCard;