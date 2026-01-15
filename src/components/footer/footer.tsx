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
    <footer className="bg-gray-950 text-white px-6 py-10">
      <div className="container flex justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">Shortly</div>


        <div className="grid grid-cols-1 md:grid-cols-4 gap-24">
          {/* Footer Links */}
          {FooterItems.map((item) => (
            <FooterCard key={item.title} title={item.title} text={item.text} />
          ))}

          {/* Social links */}
          <div className="flex gap-4">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="images/icon-facebook.svg"
                alt="facebook"
                className="w-5 h-5"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="images/icon-twitter.svg"
                alt="facebook"
                className="w-5 h-5"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="images/icon-pinterest.svg"
                alt="facebook"
                className="w-5 h-5"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="images/icon-instagram.svg"
                alt="facebook"
                className="w-5 h-5"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
