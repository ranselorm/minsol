// components/Navbar.tsx
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import SideDrawer from "./SideDrawer";
import { Link } from "react-router-dom";

const links = [
  {
    label: "Solutions",
    subItems: [
      { label: "ME FIT Grinding", path: "/solutions/me-fit-grinding" },
      { label: "ME FIT Crushing", path: "/solutions/me-fit-crushing" },
      { label: "Crushing", path: "/solutions/crushing" },
      { label: "Grinding", path: "/solutions/grinding" },
      { label: "Grinding Media", path: "/solutions/grinding-media" },
      { label: "Digital Solutions", path: "/solutions/digital-solutions" },
    ],
  },
  { label: "About Us", path: "/about" },
  { label: "Case Studies", path: "/case-study" },
  { label: "Sustainability", path: "/sustainability" },
  { label: "Investors", path: "/investors" },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // For desktop sidebar
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null); // Tracks which dropdown is active

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleDrawer = () => setIsDrawerOpen((prev) => !prev);
  const toggleDropdown = (index: number) =>
    setActiveDropdown(activeDropdown === index ? null : index);

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
            <div key={index} className="relative">
              {link.subItems ? (
                <div>
                  <button
                    className="flex items-center space-x-1 hover:underline"
                    onClick={() => toggleDropdown(index)}
                  >
                    <span>{link.label}</span>
                    <Icon
                      icon={
                        activeDropdown === index
                          ? "mdi:chevron-up"
                          : "mdi:chevron-down"
                      }
                      width="20"
                    />
                  </button>
                  {activeDropdown === index && (
                    <div className="absolute top-full left-0 w-screen bg-blue-700 text-white z-50 py-8">
                      <div className="container mx-auto px-4 md:px-28 grid grid-cols-2 gap-8">
                        {/* First Column */}
                        <div className="border-r border-white pr-8">
                          <div className="space-y-8">
                            {/* ME FIT Grinding */}
                            <div>
                              <h4 className="text-lg font-bold">
                                ME FIT Grinding
                              </h4>
                              <p className="text-sm mt-2">
                                This is a description for ME FIT Grinding.
                              </p>
                              <Link
                                to="/solutions/me-fit-grinding"
                                className="text-orange-400 mt-4 block hover:underline"
                                onClick={() => setActiveDropdown(null)}
                              >
                                Learn More →
                              </Link>
                            </div>
                            {/* ME FIT Crushing */}
                            <div>
                              <h4 className="text-lg font-bold">
                                ME FIT Crushing
                              </h4>
                              <p className="text-sm mt-2">
                                This is a description for ME FIT Crushing.
                              </p>
                              <Link
                                to="/solutions/me-fit-crushing"
                                className="text-orange-400 mt-4 block hover:underline"
                                onClick={() => setActiveDropdown(null)}
                              >
                                Learn More →
                              </Link>
                            </div>
                          </div>
                        </div>

                        {/* Second Column */}
                        <div className="grid grid-cols-2 gap-8">
                          {/* Crushing */}
                          <div>
                            <h4 className="text-lg font-bold">Crushing</h4>
                            <p className="text-sm mt-2">
                              This is a description for Crushing.
                            </p>
                            <Link
                              to="/solutions/crushing"
                              className="text-orange-400 mt-4 block hover:underline"
                              onClick={() => setActiveDropdown(null)}
                            >
                              Learn More →
                            </Link>
                          </div>
                          {/* Grinding */}
                          <div>
                            <h4 className="text-lg font-bold">Grinding</h4>
                            <p className="text-sm mt-2">
                              This is a description for Grinding.
                            </p>
                            <Link
                              to="/solutions/grinding"
                              className="text-orange-400 mt-4 block hover:underline"
                              onClick={() => setActiveDropdown(null)}
                            >
                              Learn More →
                            </Link>
                          </div>
                          {/* Grinding Media */}
                          <div>
                            <h4 className="text-lg font-bold">
                              Grinding Media
                            </h4>
                            <p className="text-sm mt-2">
                              This is a description for Grinding Media.
                            </p>
                            <Link
                              to="/solutions/grinding-media"
                              className="text-orange-400 mt-4 block hover:underline"
                              onClick={() => setActiveDropdown(null)}
                            >
                              Learn More →
                            </Link>
                          </div>
                          {/* Digital Solutions */}
                          <div>
                            <h4 className="text-lg font-bold">
                              Digital Solutions
                            </h4>
                            <p className="text-sm mt-2">
                              This is a description for Digital Solutions.
                            </p>
                            <Link
                              to="/solutions/digital-solutions"
                              className="text-orange-400 mt-4 block hover:underline"
                              onClick={() => setActiveDropdown(null)}
                            >
                              Learn More →
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link to={link.path} className="hover:underline">
                  {link.label}
                </Link>
              )}
            </div>
          ))}
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
                {link.subItems ? (
                  <div>
                    <button
                      className="w-full flex justify-between items-center"
                      onClick={() => toggleDropdown(index)}
                    >
                      <span>{link.label}</span>
                      <Icon
                        icon={
                          activeDropdown === index
                            ? "mdi:chevron-up"
                            : "mdi:chevron-down"
                        }
                        width="20"
                      />
                    </button>
                    {activeDropdown === index && (
                      <ul className="mt-2 ml-4 space-y-2">
                        {link.subItems.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              to={subItem.path}
                              className="hover:underline"
                              onClick={() => setIsMenuOpen(false)} // Close mobile menu on link click
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className="block hover:underline"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
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
