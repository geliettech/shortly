

interface FooterCardProps {
  title: string;
  text: string[];
}

const FooterCard = ({ title, text }: FooterCardProps) => {
  return (
    <div className="">
      <h3 className="">{title}</h3>
      <ul className="space-y-2 mt-4">
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
