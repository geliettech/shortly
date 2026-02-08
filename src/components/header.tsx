import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const Header = () => {
  const navItems = [
    { name: "Features", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Resources", href: "#" },
  ];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white">
      <div className="container relative flex items-center justify-between">
        {/* Logo + Desktop Nav */}
        <div className="flex items-center gap-8">
          <img src="/images/logo.svg" alt="Shortly logo" />

          <nav className="hidden md:flex gap-6">
            {navItems.map((item, index) => (
              <a key={index} href={item.href} className="nav__link">
                {item.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Desktop Auth */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="nav__link">
            Login
          </a>
          <a href="#" className="btn-primary">
            Sign Up
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl"
          aria-label="Toggle menu"
        >
          {isOpen ? <MdClose /> : <FaBars />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`
            md:hidden
            absolute left-6 right-6 top-full mt-4
            bg-purple-950 rounded-xl
            grid gap-6 text-center
            p-8
            transform transition-all duration-300
            ${isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}
          `}
        >
          {navItems.map((item, index) => (
            <a key={index} href={item.href} className="text-white nav__link">
              {item.name}
            </a>
          ))}

          <hr className="border-gray-500/60" />

          <a href="#" className="text-white nav__link">
            Login
          </a>
          <a href="#" className="btn-primary w-full py-3">
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
