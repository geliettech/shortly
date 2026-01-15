import FooterCard from "./footerCard";

const FooterItems = [
  {
    title: "Features",
    text: ["Link Shortening", "Branded Links", "Analytics"],
  },
  {
    title: "Resources",
    text: ["Blog", "Developers", "Support"],
  },
  {
    title: "Company",
    text: ["About", "Our Team", "Careers", "Contact"],
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container flex flex-col lg:flex-row justify-center items-center lg:justify-between lg:items-start">
        {/* Logo */}
        <div className="text-2xl font-bold mb-12 lg:mb-0">Shortly</div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-24 text-center lg:text-left">
          {/* Footer Links */}
          {FooterItems.map((item) => (
            <FooterCard key={item.title} title={item.title} text={item.text} />
          ))}

          {/* Social Links */}
          <div className="flex gap-4">
            {["facebook", "twitter", "pinterest", "instagram"].map((icon) => (
              <a key={icon} href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src={`/images/icon-${icon}.svg`}
                  alt={icon}
                  className="w-5 h-5 cursor-pointer hover:opacity-70 transition"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
