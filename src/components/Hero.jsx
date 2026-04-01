import { motion } from "framer-motion";

// Main Component
export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white overflow-hidden flex flex-col">
      <AnimatedBackground />
      <div className="relative z-10 flex-1 flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <HeroContent />
            <Terminal />
          </div>
        </div>
      </div>
    </div>
  );
}

// Constants
const CODE_SYMBOLS = ["{}", "[]", "<>", "()", "&&", "||", "=>", "++"];
const CODE_SNIPPETS = [
  "const dev = true;",
  "function build() {",
  "return success;",
  "}",
];
const ANIMATION_COUNT = 20;

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
  });
};

// Animation Utilities
const getRandomPosition = (max) => Math.random() * max;
const getRandomDuration = (min, max) => Math.random() * (max - min) + min;
const getRandomDelay = (max) => Math.random() * max;
const getRandomSymbol = () =>
  CODE_SYMBOLS[Math.floor(Math.random() * CODE_SYMBOLS.length)];

// Subcomponents
const AnimatedBackground = () => (
  <div id="hero" className="min-h-[100vh] absolute inset-0 overflow-hidden">
    {Array.from({ length: ANIMATION_COUNT }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute text-green-500/10 text-xl sm:text-2xl font-mono"
        initial={{
          x:
            typeof window !== "undefined"
              ? getRandomPosition(window.innerWidth)
              : getRandomPosition(1000),
          y: -20,
          opacity: 0,
        }}
        animate={{
          y: typeof window !== "undefined" ? window.innerHeight + 20 : 820,
          opacity: [0, 0.5, 0],
        }}
        transition={{
          duration: getRandomDuration(10, 20),
          repeat: Infinity,
          delay: getRandomDelay(5),
        }}
      >
        {getRandomSymbol()}
      </motion.div>
    ))}
  </div>
);

const Badge = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4 }}
    className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 bg-green-500/10 border border-green-500/20 rounded-full"
  >
    <SparkleIcon />
    <span className="text-xs md:text-lg text-green-400 font-mono">
      Upgrade your website looks
    </span>
  </motion.div>
);

const SparkleIcon = () => (
  <svg
    className="w-3 h-3 sm:w-4 sm:h-4 text-green-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
    />
  </svg>
);

const Heading = () => (
  <motion.h1
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5 }}
    className="text-3xl sm:text-3xl md:text-5xl 2xl:text-6xl font-bold leading-tight"
  >
    Turn Your
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
      {" "}
      Idea{" "}
    </span>
    Into Wonderful
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
      {" "}
      Website
    </span>
  </motion.h1>
);

const Description = () => (
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.6 }}
    className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed"
  >
    Transform ideas into elegant solutions with cutting-edge technology. Build,
    deploy, and scale applications that make a difference.
  </motion.p>
);

const CTAButtons = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.7 }}
  >
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-6 py-3 sm:px-16 sm:py-4 text-sm sm:text-base bg-gradient-to-r from-green-500 to-blue-500 rounded-lg font-semibold shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-shadow"
      onClick={() => scrollToSection("about")}
    >
      Get Started
    </motion.button>
  </motion.div>
);

const FloatingIcon = ({ position, delay, gradient, children }) => (
  <motion.div
    animate={{
      y: [0, position === "top" ? -20 : 20, 0],
      rotate: [0, position === "top" ? 5 : -5, 0],
    }}
    transition={{
      duration: position === "top" ? 4 : 3,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
    className={`absolute ${
      position === "top"
        ? "-top-8 -left-4 2xl:-bottom-8 2xl:-right-6"
        : "-bottom-8 -right-4 2xl:-bottom-8 2xl:-right-6"
    } w-12 h-12 md:w-16 md:h-16 ${gradient} rounded-xl flex items-center justify-center shadow-xl`}
  >
    {children}
  </motion.div>
);

const CodeIcon = () => (
  <svg
    className="w-6 h-6 md:w-8 md:h-8"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    />
  </svg>
);

const TerminalIcon = () => (
  <svg
    className="w-6 h-6 md:w-8 md:h-8"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

const TerminalHeader = () => (
  <div className="bg-gray-800 px-3 py-2 sm:px-4 sm:py-3 flex items-center gap-2 border-b border-gray-700">
    <div className="flex gap-1.5 sm:gap-2">
      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500" />
      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" />
    </div>
    <div className="flex items-center gap-2 ml-2 sm:ml-4">
      <svg
        className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      <span className="text-xs sm:text-sm text-gray-400 font-mono">
        terminal
      </span>
    </div>
  </div>
);

const TerminalContent = () => (
  <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm space-y-2 sm:space-y-3">
    <div className="flex items-center gap-2 text-green-400">
      <span>$</span>
      <motion.span
        initial={{ width: 0 }}
        animate={{ width: "auto" }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        npm create awesome-app
      </motion.span>
    </div>

    {CODE_SNIPPETS.map((line, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2 + i * 0.2 }}
        className="text-gray-300"
      >
        {line}
      </motion.div>
    ))}

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.7 }}
      className="flex items-center gap-2 text-blue-400"
    >
      <span>✓</span>
      <span>Build successful!</span>
    </motion.div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0] }}
      transition={{
        delay: 3,
        duration: 1,
        repeat: Infinity,
      }}
      className="inline-block w-2 h-4 bg-green-400"
    />
  </div>
);

const Terminal = () => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.4 }}
    className="relative "
  >
    <FloatingIcon
      position="top"
      delay={0}
      gradient="bg-gradient-to-br from-blue-500 to-purple-500 hidden lg:flex"
    >
      <CodeIcon />
    </FloatingIcon>

    <FloatingIcon
      position="bottom"
      delay={0.5}
      gradient="bg-gradient-to-br from-green-500 to-teal-500 hidden lg:flex"
    >
      <TerminalIcon />
    </FloatingIcon>

    <div className="bg-gray-900 rounded-xl shadow-2xl border border-gray-800 overflow-hidden">
      <TerminalHeader />
      <TerminalContent />
    </div>
  </motion.div>
);

const HeroContent = () => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="space-y-4 sm:space-y-6"
  >
    <Badge />
    <Heading />
    <Description />
    <CTAButtons />
  </motion.div>
);