// components/Footer.tsx
import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const footerLinks = {
  company: [
    { label: "Contact", url: "/contact" },
    { label: "Privacy policies", url: "/privacy" },
    { label: "Data Governance Statement", url: "/data-governance" },
    { label: "Cookie Policy", url: "/cookie-policy" },
    { label: "Terms of Use", url: "/terms-of-use" },
  ],
  socialMedia: [
    { label: "Instagram", icon: "mdi:instagram", url: "https://instagram.com" },
    { label: "LinkedIn", icon: "mdi:linkedin", url: "https://linkedin.com" },
    { label: "Twitter", icon: "mdi:twitter", url: "https://twitter.com" },
    { label: "Facebook", icon: "mdi:facebook", url: "https://facebook.com" },
  ],
  additional: [
    { label: "Canal de denuncias", url: "/canal-de-denuncias" },
    { label: "Whistleblower Channel", url: "/whistleblower-channel" },
    { label: "投诉渠道", url: "/complaint-channel" },
  ],
};

const Footer: React.FC = () => (
  <footer className="bg-black text-white py-8 px-4 md:px-28">
    <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
      <Link to="/" className="text-lg font-bold inline-flex">
        <img src="/images/logo.svg" className="w-[80%]" />
      </Link>

      <div>
        <h3 className="text-lg font-semibold mb-4">ME Elecmetal</h3>
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
        <ul className="space-y-2">
          {footerLinks.additional.map((link, index) => (
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
    </div>
    <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
      © 2024, ME Elecmetal or its affiliates. All rights reserved.
    </div>
  </footer>
);

export default Footer;
