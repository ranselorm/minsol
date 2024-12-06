// components/Footer.tsx
import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const footerLinks = {
  company: [
    { label: "Home", url: "/" },
    { label: "About Us", url: "/about" },
    { label: "Services", url: "/services" },
    { label: "Products", url: "/products" },
    // { label: "Contact", url: "/contact" },
  ],
  socialMedia: [
    {
      label: "Instagram",
      icon: "iconoir:instagram",
      url: "https://instagram.com",
    },
    { label: "LinkedIn", icon: "circum:linkedin", url: "#" },
    { label: "Twitter", icon: "pajamas:twitter", url: "#" },
    { label: "Facebook", icon: "circum:facebook", url: "#" },
  ],
  contact: [
    { label: "info@minsolltd.com", icon: "mdi-light:email" },
    {
      label: "+233 30 254 3667",
      icon: "mdi-light:phone",
    },
    {
      label: "4 Apple Avenue",
      icon: "fluent:street-sign-24-regular",
    },
    {
      label: "East Legon, Accra",
      icon: "iconoir:city",
    },
  ],
};

const Footer: React.FC = () => (
  <footer className="bg-black text-white py-8 px-4 md:px-28">
    <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
      <Link to="/" className="md:w-full h-20">
        <img
          src="/images/sol.png"
          className="w-full h-full object-cover"
          alt="Logo"
        />
      </Link>

      <div>
        <h3 className="text-lg font-semibold mb-4">Popular Links</h3>
        <ul className="space-y-2">
          {footerLinks.company.map((link, index) => (
            <li key={index}>
              <Link
                to={link.url}
                className="hover:text-gray-300 flex items-center"
              >
                {link.label}{" "}
                <Icon icon="mdi:arrow-right" width="16" className="ml-2" />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Social Media</h3>
        <ul className="space-y-2">
          {footerLinks.socialMedia.map((link, index) => (
            <li key={index}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 flex items-center"
              >
                <Icon icon={link.icon} width="20" className="mr-2" />{" "}
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Contact</h3>
        <ul className="space-y-2">
          {footerLinks.contact.map((link, index) => (
            <li key={index} className="flex">
              <Icon icon={link.icon} width="20" className="mr-2" />
              <p className="hover:text-gray-300 flex items-center">
                {link.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
      © 2024 Minsol. All rights reserved.
    </div>
  </footer>
);

export default Footer;
