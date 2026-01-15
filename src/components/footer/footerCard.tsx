interface FooterCardProps {
  title: string;
  text: string[];
}

const FooterCard = ({ title, text }: FooterCardProps) => {
  return (
    <div className="">
      <h3 className="font-medium text-white mb-4">{title}</h3>
      <div className="space-y-2 flex flex-col">
        {text.map((item, index) => (
          <a href="#"
            key={index}
            className="text-sm text-gray-400 hover:text-blue-400 transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterCard;
