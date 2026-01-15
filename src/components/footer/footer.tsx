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
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo */}
        <div className="text-2xl font-bold">Shortly</div>

        {/* Footer Links */}
        {FooterItems.map((item) => (
          <FooterCard key={item.title} title={item.title} text={item.text} />
        ))}

        {/* Social links */}
        <div className="">
          <a href="#" target="_blank" rel="noopener noreferrer">fb</a>
          <a href="#" target="_blank" rel="noopener noreferrer">x</a>
          <a href="#" target="_blank" rel="noopener noreferrer">t</a>
          <a href="#" target="_blank" rel="noopener noreferrer">ig</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
