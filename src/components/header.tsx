import {useState} from "react"
import Logo from "../assets/images/logo.svg";
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
    <header className="header">
      <div className="flex justify-between">
        <div className="flex">
          <a href="" className="">
            <img src={Logo} alt="logo" />
          </a>

          {/* Nav Link */}
          {/* Desktop Navbar */}
          <ul className="hidden md:flex">
            {navItems.map((item, index) => (
              <li className="" key={index}>
                <a href={item.href} className="nav__link">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:flex">
          <a href="#" className="nav__link">
            Login
          </a>
          <a href="#" className="nav__link">
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
        <nav className={`md:hidden absolute top-10 left-0 w-full bg-white shadow-md transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}>
          {/* Nav Link */}
          <ul className="nav__links | primary">
            {navItems.map((item, index) => (
              <li className="" key={index}>
                <a href={item.href} className="nav__link">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <ul className="nav__links | secondary">
            <a href="#" className="nav__link">
              Login
            </a>
            <a href="#" className="nav__link | btn">
              Sign Up
            </a>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
