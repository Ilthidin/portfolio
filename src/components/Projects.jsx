import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import evercrest from "../assets/projects/evercrest.webp";
import hmtif from "../assets/projects/hmtif.webp";
import taweb from "../assets/projects/taweb.webp";
import portfolio from "../assets/projects/portfolio.webp";

const PROJECTS = [
  {
    title: "Evercrest",
    img: evercrest,
    url: "https://evercrestrealty.vercel.app/",
  },
  {
    title: "HM-TIF Unissula",
    img: hmtif,
    url: "https://hmtifunissula.com/",
  },
  {
    title: "Terbang Aja Web",
    img: taweb,
    url: "https://terbangaja-binar.vercel.app/",
  },
  {
    title: "Terbang Aja App",
    img: portfolio,
    url: "https://yunitasulistiyowati.vercel.app/",
  },
];

export default function Carousel3D() {
  const [[index, direction], setIndex] = useState([0, 0]);
  const [isHovered, setIsHovered] = useState(false);

  const timerRef = useRef(null);

  const paginate = (dir) => {
    setIndex(([prev]) => {
      let next = prev + dir;

      if (next < 0) next = PROJECTS.length - 1;
      if (next >= PROJECTS.length) next = 0;

      return [next, dir];
    });
  };

  // Reset auto slide timer
  const resetAutoSlide = () => {
    clearTimeout(timerRef.current);

    if (!isHovered) {
      timerRef.current = setTimeout(() => {
        paginate(1);
      }, 5000);
    }
  };

  // Auto slide
  useEffect(() => {
    resetAutoSlide();

    return () => clearTimeout(timerRef.current);
  }, [index, isHovered]);

  // Swipe power
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const variants = {
    enter: ({ position }) => {
      if (position === "left")
        return { x: -300, scale: 0.7, opacity: 0, rotateY: 40 };

      if (position === "right")
        return { x: 300, scale: 0.7, opacity: 0, rotateY: -40 };

      return { opacity: 0 };
    },

    center: ({ position }) => {
      if (position === "center")
        return {
          x: 0,
          scale: 1,
          opacity: 1,
          zIndex: 3,
          rotateY: 0,
          filter: "blur(0px)",
        };

      if (position === "left")
        return {
          x: -260,
          scale: 0.85,
          opacity: 0.6,
          zIndex: 2,
          rotateY: 35,
          filter: "blur(2px)",
        };

      if (position === "right")
        return {
          x: 260,
          scale: 0.85,
          opacity: 0.6,
          zIndex: 2,
          rotateY: -35,
          filter: "blur(2px)",
        };

      return { opacity: 0, scale: 0.5, zIndex: 0 };
    },

    exit: ({ direction }) => ({
      x: direction > 0 ? -350 : 350,
      opacity: 0,
      scale: 0.6,
      rotateY: direction > 0 ? 45 : -45,
    }),
  };

  function getPosition(i, current, total) {
    if (i === current) return "center";

    if (i === (current - 1 + total) % total) return "left";

    if (i === (current + 1) % total) return "right";

    return "hidden";
  }

  return (
    <section id="projects" className="bg-gray-900 py-8 lg:py-24 overflow-hidden">
      <h2 className="text-white text-3xl sm:text-4xl font-bold text-center lg:mb-16 px-4">
        My Projects
      </h2>

      <div
        className="relative flex items-center justify-center h-100"
        style={{ perspective: "1200px" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={resetAutoSlide}
        onTouchMove={resetAutoSlide}
        onTouchEnd={resetAutoSlide}
      >
        <AnimatePresence mode="popLayout">
          {PROJECTS.map((project, i) => {
            const position = getPosition(i, index, PROJECTS.length);

            return (
              <motion.div
                key={i}
                custom={{ position, direction }}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute cursor-pointer"
                drag={position === "center" ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                onDragStart={resetAutoSlide}
                onDrag={resetAutoSlide}
                onDragEnd={(e, info) => {
                  resetAutoSlide();

                  const swipe = swipePower(
                    info.offset.x,
                    info.velocity.x
                  );

                  if (swipe < -5000) paginate(1);
                  else if (swipe > 5000) paginate(-1);
                }}
                onClick={() => {
                  resetAutoSlide();

                  if (position === "left") paginate(-1);
                  else if (position === "right") paginate(1);
                  else window.open(project.url, "_blank");
                }}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  draggable={false}
                  className="w-80 h-60 md:w-120 md:h-70 lg:w-180 lg:h-100 2xl:w-240 2xl:h-120 object-fill rounded-2xl shadow-2xl"
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
}