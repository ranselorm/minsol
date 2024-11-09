// components/Navbar.tsx
import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import SideDrawer from "./SideDrawer";
import { Link } from "react-router-dom";

const links = [
  {
    label: "Solutions",
    subItems: ["ME FIT Programs", "Products and Services", "Mining 4.0"],
  },
  { label: "About Us", path: "/about" },
  { label: "Case Studies", path: "/case-study" },
  { label: "Sustainability", path: "sustainability" },
  { label: "Investors", path: "investors" },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      setIsVisible(true);
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsVisible(false);
      setTimeout(() => setIsMenuOpen(false), 300);
    } else {
      setIsMenuOpen(true);
    }
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleDropdown = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const closeMenu = () => {
    setIsVisible(false);
    setTimeout(() => setIsMenuOpen(false), 300);
  };

  return (
    <nav className="bg-blue-800 text-white py-4 px-4 md:px-28">
      <div className="flex justify-between items-center">
        <Link to="/">Logo</Link>
        {/* Desktop Nav Links and Icons */}
        <div className="hidden md:flex items-center space-x-4">
          {links.map((link, index) => (
            <Link
              to={`${link.path}`}
              key={index}
              className="hidden md:inline-block"
            >
              {link.label}
            </Link>
          ))}
          {/* Menu Icon for Desktop Side Drawer */}
        </div>
        <button
          className="text-2xl hidden md:block"
          onClick={toggleDrawer}
          aria-label="Toggle Side Drawer"
        >
          <Icon icon="mdi:menu" width="24" />
        </button>
        {/* Mobile Menu Button */}
        <button className="block md:hidden text-2xl" onClick={toggleMenu}>
          <Icon icon={isMenuOpen ? "mdi:close" : "mdi:menu"} width="24" />
        </button>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeMenu}
        ></div>
      )}

      {/* Responsive Mobile Nav Links */}
      {isMenuOpen && (
        <div
          className={`fixed top-0 right-0 h-full w-[80%] bg-blue-700 z-50 transition-transform duration-300 transform ${
            isVisible ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between p-4">
            <div className="text-2xl font-bold">Menu</div>
            <button onClick={closeMenu} aria-label="Close Menu">
              <Icon icon="mdi:close" width="24" />
            </button>
          </div>
          <ul className="p-6 space-y-4 text-white">
            {links.map((link, index) => (
              <li key={index}>
                <button
                  className="w-full text-left flex justify-between items-center"
                  onClick={() =>
                    link.subItems ? toggleDropdown(index) : undefined
                  }
                >
                  {link.label}
                  {link.subItems && (
                    <Icon
                      icon={
                        activeDropdown === index
                          ? "mdi:chevron-up"
                          : "mdi:chevron-down"
                      }
                      width="20"
                    />
                  )}
                </button>
                {link.subItems && activeDropdown === index && (
                  <ul
                    className={`mt-2 ml-4 space-y-1 overflow-hidden transition-max-height duration-500 ease-in-out ${
                      activeDropdown === index ? "max-h-40" : "max-h-0"
                    }`}
                    style={{ transition: "max-height 0.5s ease-in-out" }}
                  >
                    {link.subItems.map((subItem, subIndex) => (
                      <li key={subIndex} className="text-sm">
                        {subItem}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="px-4 py-2">
              <button className="bg-orange-600 w-full px-4 py-2 rounded-md">
                Contact Us
              </button>
            </li>
          </ul>
        </div>
      )}

      {/* Desktop Side Drawer */}
      {isDrawerOpen && (
        <div className="hidden md:block">
          <SideDrawer closeDrawer={toggleDrawer} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
