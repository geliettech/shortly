

interface FooterCardProps {
  title: string;
  text: string[];
}

const FooterCard = ({ title, text }: FooterCardProps) => {
  return (
    <div className="">
      <h3>{title}</h3>
      <ul className="space-y-2">
        {text.map((item, index) => (
          <li
            key={index}
            className="text-sm text-gray-400 hover:text-white cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterCard;
