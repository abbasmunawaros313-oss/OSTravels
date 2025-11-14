import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Import your logo, just like in the Navbar
// Make sure the path is correct relative to this Footer component
// If this path is wrong, you can replace `logo` with the placeholder URL:
// const logoUrl = "https://placehold.co/150x50/ffffff/1d4ed8?text=O.S+Travels&font=inter";
import logo from "../assets/logoimg/image.png";

// Import icons
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";

// --- Animation Variants ---
const footerVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      staggerChildren: 0.1,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Footer() {
  const quickLinks = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/about" },
    { name: "Visa", to: "/visa" },
    { name: "File Process", to: "/process" },
    { name: "Contact", to: "/contact" },
  ];

  const servicesLinks = [
    { name: "Hotels", to: "/" },
    { name: "Flights", to: "/" },
    { name: "Insurance", to: "/" },
    { name: "Visa Services", to: "/visa" },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, href: "#" },
    { icon: <FaTwitter />, href: "#" },
    { icon: <FaInstagram />, href: "#" },
    { icon: <FaLinkedinIn />, href: "#" },
  ];

  return (
    <motion.footer
      variants={footerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-blue-500 text-white"
    >
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Logo, About, Socials */}
          <motion.div variants={itemVariant} className="space-y-6">
            <Link to="/">
              {/* Use your imported logo */}
              <img src={logo} alt="O.S Travel & Tours" className="h-10 rounded" />
            </Link>
            <p className="text-sm text-white">
              Your partner in creating unforgettable adventures. We are committed
              to delivering the highest level of service.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-white hover:text-white border border-white p-2 rounded transition-colors duration-300"
                  aria-label={`Follow us on ${social.icon.type.name}`}
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div variants={itemVariant}>
            <h5 className="font-bold text-white uppercase mb-4">Quick Links</h5>
            <nav className="flex flex-col space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  className="text-white hover:text-white hover:underline transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Column 3: Services */}
          <motion.div variants={itemVariant}>
            <h5 className="font-bold text-white uppercase mb-4">Our Services</h5>
            <nav className="flex flex-col space-y-2">
              {servicesLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  className="text-white hover:text-white hover:underline transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Column 4: Contact Info */}
          <motion.div variants={itemVariant} className="space-y-4">
            <h5 className="font-bold text-white uppercase mb-4">Get in Touch</h5>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MdLocationOn className="text-xl text-blue-400 mt-1 shrink-0" />
                <span className="text-sm">
                  Office # 3, Aaly Plaza, Fazal e Haq Rd, Block E G 6/2 Blue Area,
                  Islamabad
                </span>
              </li>
              <li className="flex items-center gap-3">
                <MdPhone className="text-xl text-blue-400" />
                <div>
                  <a href="tel:0512120700" className="text-sm hover:text-white transition-colors duration-300">
                    051-2120700-701
                  </a>
                  <br/>
                  <a href="tel:03335542877" className="text-sm hover:text-white transition-colors duration-3s00">
                    0333-5542877
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <MdEmail className="text-xl text-blue-400" />
                <a href="mailto:info@ostravels.com" className="text-sm hover:text-white transition-colors duration-300">
                  info@ostravels.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar: Copyright */}
      <div className="bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} O.S Travel & Tours. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="hover:text-gray-300 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="hover:text-gray-300 transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;