import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import estate from "../../assets/projects/estate.webp";
import hmtif from "../../assets/projects/hmtif.webp";
import taweb from "../../assets/projects/taweb.webp";
import taandroid from "../../assets/projects/taandroid.webp";
import moviemax from "../../assets/projects/moviemax.webp";
import crypto from "../../assets/projects/4crypto.webp";
import parksense from "../../assets/projects/parksense.webp";
import ghibli from "../../assets/projects/ghibli.webp";
import reqroom from "../../assets/projects/reqroom.webp";

const PROJECTS = [
  {
    title: "Real Estate",
    desc: "Real Estate Website.",
    img: estate,
    url: "https://ilthidin.github.io/RealEstate/",
  },
  {
    title: "HM-TIF Unissula",
    desc: "Student Organization Website.",
    img: hmtif,
    url: "https://hmtifunissula.com/",
  },
  {
    title: "Retro Anime Text to Image Generator",
    desc: "Create japanese retro anime style from text.",
    img: ghibli,
    url: "https://github.com/Ilthidin/Retro-Anime-Text-to-Image-Generator",
  },
  {
    title: "Terbang Aja Website",
    desc: "Plane ticket booking website.",
    img: taweb,
    url: "https://terbangaja-binar.vercel.app/",
  },
  {
    title: "Terbang Aja Android App",
    desc: "Plane ticket booking app.",
    img: taandroid,
    url: "https://github.com/Ilthidin/TerbangAja",
  },
  {
    title: "MovieMax App",
    desc: "New Release Movie App Using API.",
    img: moviemax,
    url: "https://github.com/Ilthidin/MovieMax",
  },
  {
    title: "4Crypto",
    desc: "Realtime Crypto Price App Using API.",
    img: crypto,
    url: "https://github.com/Ilthidin/4crypto",
  },
  {
    title: "ParkSense",
    desc: "Object Detection Website Using AI.",
    img: parksense,
    url: "https://park-sense-kelompok-abhinaya-ofa.streamlit.app/",
  },
  {
    title: "Reqroom Figma Design",
    desc: "Room management App Design.",
    img: reqroom,
    url: "https://www.figma.com/design/b9OIR4EWHfly6T5xDQEVCO/iimk",
  },
];

export default function ProjectCarousel() {
  const [[index, direction], setIndex] = useState([0, 0]);
  const intervalRef = useRef(null);

  const startInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIndex(([prev]) => [(prev + 1) % PROJECTS.length, 1]);
    }, 10000);
  };

  const next = () => {
    setIndex(([prev]) => [(prev + 1) % PROJECTS.length, 1]);
    startInterval();
  };

  const prev = () => {
    setIndex(([prev]) => [(prev - 1 + PROJECTS.length) % PROJECTS.length, -1]);
    startInterval();
  };

  useEffect(() => {
    startInterval();
    return () => clearInterval(intervalRef.current);
  }, []);

  const project = PROJECTS[index];

  return (
    <section
      id="projects"
      className="bg-gray-900 py-8 lg:py-24 overflow-hidden"
    >
      <div className="max-w-8xl mx-auto lg:mx-16 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          My Projects
        </h2>

        <div className="relative px-8">
          {/* Navigation */}
          <button
            onClick={prev}
            className="absolute flex items-center justify-center w-8 h-8 lg:w-12 lg:h-12 left-1 top-1/2 -translate-y-1/2 text-white ml-2 lg:ml-0"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={next}
            className="absolute flex items-center justify-center w-8 h-8 lg:w-12 lg:h-12 right-1 top-1/2 -translate-y-1/2 text-white mr-2 lg:mr-0"
          >
            <ChevronRight size={20} />
          </button>
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: direction > 0 ? 120 : -120 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -120 : 120 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="grid md:grid-cols-2 items-center"
            >
              {/* LEFT: Description */}
              <div className="text-white px-4 md:px-8 space-y-6 hidden md:block ">
                <h3 className="text-3xl font-bold">{project.title}</h3>

                <p className="text-gray-400 leading-relaxed">{project.desc}</p>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold transition"
                >
                  View Project
                </a>
              </div>

              {/* RIGHT: Image with Single Left Slash */}
              <div className="relative h-[200px] lg:h-[300px] 2xl:h-[360px] w-full">
                <div className="absolute inset-0 overflow-hidden mx-4 md:mx-0 md:px-4">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Mobile: Description */}
              <div className="text-white space-y-6 mt-4 px-4 sm:hidden">
                <h3 className="text-3xl font-bold">{project.title}</h3>

                <p className="text-gray-400 leading-relaxed">{project.desc}</p>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold transition"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
