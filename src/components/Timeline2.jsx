import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Constants
const TIMELINE_EVENTS = [
  {
    year: "January 2020",
    title: "Tech hardware Consultant Freelance",
    desc: "My first professional work with focus on provide company with tech hardware.",
  },
  {
    year: "September 2021",
    title: "Became Informatic Engineer Student",
    desc: "Started my journey in programming world and a lot of experieces.",
  },
  {
    year: "March 2025",
    title: "Graduate From University",
    desc: "Graduate with a Bachelor's degree in Informatic Engineering with GPA 3.79 in 3.5 years.",
  },
  {
    year: "Now",
    title: "Focus on Frontend Developer Path",
    desc: "Building modern & polished websites using ReactJS.",
  },
];

const CARD_HEIGHTS = {
  mobile: {
    collapsed: 140,
    expanded: 200,
  },
  tablet: {
    collapsed: 160,
    expanded: 220,
  },
  desktop: {
    collapsed: 140,
    expanded: 240,
  },
};

const BREAKPOINTS = {
  tablet: 640,
  desktop: 1024,
};

// Animation Variants
const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

// Custom Hooks
const useResponsive = () => {
  const [breakpoint, setBreakpoint] = useState("mobile");

  useEffect(() => {
    const checkBreakpoint = () => {
      const width = window.innerWidth;
      if (width >= BREAKPOINTS.desktop) {
        setBreakpoint("desktop");
      } else if (width >= BREAKPOINTS.tablet) {
        setBreakpoint("tablet");
      } else {
        setBreakpoint("mobile");
      }
    };

    checkBreakpoint();
    window.addEventListener("resize", checkBreakpoint);
    return () => window.removeEventListener("resize", checkBreakpoint);
  }, []);

  return breakpoint;
};

// Subcomponents
const TimelineLine = () => {
  return (
    <>
      {/* Vertical line — small & medium screens */}
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1, duration: 1, ease: "easeOut" }}
        className="
          lg:hidden
          absolute
          left-1/2
          top-4
          bottom-4
          h-150
          w-[12px]
          bg-gray-600
          -translate-x-1/2
          origin-top
          z-0
        "
      />

      {/* Horizontal line — large screens */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
        className="
          hidden lg:block
          absolute
          top-1/2
          left-2
          right-2
          h-[12px]
          bg-gray-600
          -translate-y-1/2
          origin-left
          z-0
        "
      />
    </>
  );
};

const TimelineCard = ({ event, index, isActive, breakpoint, onClick }) => {
  const heights = CARD_HEIGHTS[breakpoint];
  const isMobile = breakpoint === "mobile";
  const cardHeight = isMobile || isActive ? heights.expanded : heights.expanded;
  const descriptionOpacity = isMobile || isActive ? 1 : 0;
  const descriptionY = isMobile || isActive ? 0 : 10;

  return (
    <motion.div
      variants={cardVariants}
      onClick={isMobile ? undefined : onClick}
      animate={{
        height: cardHeight,
        opacity: 1,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="relative z-10 bg-gray-800 rounded-xl p-3 m-2 sm:p-4 md:p-5 shadow-lg shadow-black/40 cursor-pointer overflow-hidden
                 min-w-[160px] max-h-[130px]
                 lg:min-h-[260px] lg:max-h-[260px]
                 lg:min-w-[200px] lg:max-w-[200px]
                 xl:min-w-[240px] xl:max-w-[240px]"
    >
      <span className="text-xs sm:text-sm md:text-base text-gray-400">
        {event.year}
      </span>

      <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mt-1.5 sm:mt-2 leading-tight">
        {event.title}
      </h3>

      <motion.p
        initial={false}
        animate={{
          opacity: descriptionOpacity,
          y: descriptionY,
        }}
        transition={{ delay: 0.1, duration: 0.25 }}
        className="text-sm sm:text-sm md:text-base lg:text-lg text-gray-400 mt-2 sm:mt-3 leading-relaxed"
      >
        {event.desc}
      </motion.p>
    </motion.div>
  );
};

// Main Component
export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const breakpoint = useResponsive();

  const handleCardClick = (index) => {
    if (breakpoint !== "mobile") {
      setActiveIndex(index);
    }
  };

  return (
    <section
      id="Timeline"
      className="w-full bg-gray-900 py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-8 sm:mb-10 md:mb-12 text-center">
          Timeline
        </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:flex lg:gap-8 xl:gap-12 lg:justify-center"
        >
          <TimelineLine />

          {TIMELINE_EVENTS.map((event, index) => (
            <TimelineCard
              key={index}
              event={event}
              index={index}
              isActive={index === activeIndex}
              breakpoint={breakpoint}
              onClick={() => handleCardClick(index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
