import { motion } from "framer-motion";
import profileImg from "../../assets/profile.webp";

const DETAILS_DATA = [
  { label: "Professional Experience", value: "1 Year+" },
  { label: "Main Focus", value: "Frontend Web Developer" },
  { label: "Nationality", value: "Indonesia " },
  { label: "Completed Projects", value: "20+" },
];

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
  });
};

// Profile Image
const ProfileImage = () => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1, delay: 0.8 }}
    className="flex justify-center"
  >
    <div className="w-64 h-64 lg:w-100 lg:h-100 rounded-md overflow-hidden">
      <img
        src={profileImg}
        alt="Profile Photo"
        className="w-full h-full object-cover"
      />
    </div>
  </motion.div>
);

const SectionHeading = ({ children, className = "" }) => (
  <h2
    className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 ${className}`}
  >
    {children}
  </h2>
);

const Description = () => (
  <p className="text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed mb-6 text-justify">
    I'm a Front-End Engineer specializing in building modern, responsive, and
    high-performance web applications. Experienced in developing scalable user
    interfaces using React and contemporary web technologies, with a strong
    focus on clean design, accessibility, and optimal user experience.
  </p>
);

const DetailsInfo = ({ label, value }) => (
  <div>
    <p className="text-xs sm:text-sm text-gray-300">{label}</p>
    <p className="text-sm sm:text-base font-semibold text-white mt-1">
      {value}
    </p>
  </div>
);

const DetailsGrid = () => (
  <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
    {DETAILS_DATA.map((item) => (
      <DetailsInfo key={item.label} {...item} />
    ))}
  </div>
);

// CTA Button (onClick only)
const CTAButton = ({ onClick, primary = false, children }) => {
  const base =
    "inline-flex items-center justify-center rounded-lg px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-medium transition-all duration-300 transform hover:scale-105 active:scale-95";

  const variant = primary
    ? "bg-gradient-to-r from-green-500 to-blue-500 text-white hover:from-green-400 hover:to-blue-400 hover:shadow-xl"
    : "border border-gray-600 bg-gray-800 text-white hover:bg-gray-700 hover:shadow-lg";

  return (
    <button type="button" onClick={onClick} className={`${base} ${variant}`}>
      {children}
    </button>
  );
};

const AboutContent = () => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1, delay: 0.5 }}
  >
    <SectionHeading>About Me</SectionHeading>
    <Description />
    <DetailsGrid />

    <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
      <CTAButton primary onClick={() => scrollToSection("contact")}>
        Contact Me
      </CTAButton>
      <CTAButton onClick={() => scrollToSection("projects")}>
        View Projects
      </CTAButton>
    </div>
  </motion.div>
);

// Main Component
export default function About() {
  return (
    <section
      id="about"
      className="w-full bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-8 lg:pt-24 px-4 lg:px-12"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <ProfileImage />
          <AboutContent />
        </div>
      </div>
    </section>
  );
}
