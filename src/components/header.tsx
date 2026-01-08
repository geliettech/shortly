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
      <div className="container flex justify-between items-center">
        <div className="flex gap-6">
          <a href="" className="">
            <img src="/images/logo.svg" alt="logo" />
          </a>

          {/* Nav Link */}
          {/* Desktop Navbar */}
          <div className="hidden md:flex gap-6">
            {navItems.map((item, index) => (
                <a  key={index}
                  href={item.href}
                  className="nav__link"
                >
                  {item.name}
                </a>
            ))}
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="nav__link">
            Login
          </a>
          <a href="#" className="btn-primary">
            Sign Up
          </a>
        </div>

        {/* Menu Icons */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <MdClose /> : <FaBars />}
        </button>

        {/* Mobile Navbar */}
        <nav
          className={`md:hidden flex flex-col items-center gap-4 py-8 absolute top-16 right-0 w-[50%] bg-white shadow-md transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {/* Nav Link */}
          <div className="flex flex-col gap-4">
            {navItems.map((item, index) => (
                <a
                  href={item.href} key={index}
                  className="nav__link"
                >
                  {item.name}
                </a>
            ))}
          </div>

          <div className="flex gap-4 items-center">
            <a href="#" className="nav__link">
              Login
            </a>
            <a href="#" className="btn-primary">
              Sign Up
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
