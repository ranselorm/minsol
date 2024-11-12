import React, { useState } from "react";
import { Icon } from "@iconify/react";
import SideDrawer from "./SideDrawer";
import { Link } from "react-router-dom";
import ContactModal from "./ContactModal";

const links = [
  { label: "Solutions", path: "/solutions" },
  { label: "About Us", path: "/about" },
  { label: "Case Studies", path: "/case-study" },
  { label: "Sustainability", path: "/sustainability" },
  { label: "Investors", path: "/investors" },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleDrawer = () => setIsDrawerOpen((prev) => !prev);
  const toggleModal = () => setIsModalOpen((prev) => !prev);

  return (
    <nav className="bg-blue-800 text-white py-4 px-4 md:px-28 relative">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-lg font-bold">
          Logo
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          {links.map((link, index) => (
            <Link key={index} to={link.path} className="hover:underline">
              {link.label}
            </Link>
          ))}
          <button
            onClick={toggleModal}
            className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md"
          >
            Contact us
          </button>
        </div>

        {/* Desktop Sidebar Menu Button */}
        <button
          className="hidden md:block text-2xl"
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

      {/* Mobile Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-[75%] h-full bg-blue-700 text-white z-50 p-6">
          <button
            className="text-2xl mb-6"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close Menu"
          >
            <Icon icon="mdi:close" />
          </button>
          <ul className="space-y-4">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className="block hover:underline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  toggleModal();
                }}
                className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md w-full"
              >
                Contact us
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

      {/* Contact Modal */}
      {isModalOpen && <ContactModal onClose={toggleModal} />}
    </nav>
  );
};

export default Navbar;
