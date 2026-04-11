import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

// Main Component
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 px-4 lg:px-18 2xl:px-0">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
          <BrandSection />
          <SocialSection />
        </div>
        <CopyrightSection />
      </div>
    </footer>
  );
}

// Constants
const SOCIAL_LINKS = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "#", label: "Email" },
];

const ANIMATION_CONFIG = {
  brand: { duration: 1, delay: 0.5 },
  nav: { duration: 1, delay: 0.6 },
  social: { duration: 1, delay: 0.7 },
  copyright: { duration: 1, delay: 1 },
};

// Subcomponents
const BrandSection = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={ANIMATION_CONFIG.brand}
    viewport={{ once: true }}
    className="text-center md:text-left"
  >
    <h2 className="text-xl sm:text-2xl md:text-2xl px-4 lg:px-0 font-bold tracking-tight">
      Thanks for Scrolling This Far
    </h2>
    <p className="mt-2 text-sm px-4 lg:px-0 sm:text-base md:text-md text-gray-300 lg:pr-32 text-justify">
      I designed and developed this website as a personal portfolio to showcase
      my projects in web development. For futher information, you can acess my
      linkedin account above. Thanks!
    </p>
  </motion.div>
);

const NavLink = ({ name, href }) => (
  <a
    href={href}
    className="hover:text-blue-200 transition text-sm sm:text-base"
  >
    {name}
  </a>
);

const SocialLink = ({ icon: href, label }) => (
  <motion.a
    href={href}
    whileHover={{ scale: 1.15 }}
    whileTap={{ scale: 0.95 }}
    className="p-2 sm:p-2.5 rounded-full bg-gray-700 hover:bg-gray-600 transition"
    aria-label={label}
  >
    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
  </motion.a>
);

const SocialSection = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={ANIMATION_CONFIG.social}
    viewport={{ once: true }}
    className="flex justify-center md:justify-end gap-3 sm:gap-4"
  >
    <ul className="text-md hidden md:block list-disc text-gray-300">
      <li className="text-2xl font-bold list-none text-white">What I Do</li>
      <li className="lg:hover:text-gray-500">
        Develop Responsive Websites from Scratch
      </li>
      <li className="lg:hover:text-gray-500">
        Build Modern Web Applications Using React
      </li>
      <li className="lg:hover:text-gray-500">
        Implement Interactive UI Animations
      </li>
      <li className="lg:hover:text-gray-500">
        Enhance User Interface & User Experience (UI/UX)
      </li>
      <li className="lg:hover:text-gray-500">
        Optimize Website Performance & Load Speed
      </li>
    </ul>
  </motion.div>
);

const CopyrightSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={ANIMATION_CONFIG.copyright}
      viewport={{ once: true }}
      className="mt-2 sm:mt-8 border-t border-gray-700 pt-4 text-center text-xs sm:text-sm text-blue-200"
    >
      © {currentYear} Muhammad Syihab. All rights reserved.
    </motion.div>
  );
};

