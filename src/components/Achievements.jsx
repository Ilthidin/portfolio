import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import jetson from "src/assets/achievements/jetson.webp";
import english from "src/assets/achievements/english.webp";
import binar from "src/assets/achievements/binar.webp";
import orbit from "src/assets/achievements/orbit.webp";
import rakamin from "src/assets/achievements/rakamin.webp";
import rakaminweb from "src/assets/achievements/rakaminweb.webp";
import dicodingweb from "src/assets/achievements/dicodingweb.webp";
import dicodingpython from "src/assets/achievements/dicodingpython.webp";
import dicodingdata from "src/assets/achievements/dicodingdata.webp";
import diffusion from "src/assets/achievements/diffusion.webp";
import reqroom from "src/assets/achievements/reqroom.webp";

const achievements = [
  { id: 1, title: "English Proficiency", image: english },
  { id: 2, title: "Android Developer Bootcamp", image: binar },
  { id: 3, title: "AI4Jobs Bootcamp", image: orbit },
  { id: 4, title: "Nvidia Jetson Nano Class", image: jetson },
  { id: 5, title: "Rakamin Remote Golang Internship", image: rakamin },
  { id: 6, title: "Beginner Web Developer Class Rakamin", image: rakaminweb },
  {
    id: 7,
    title: "Beginner Data Visualization Bootcamp Dicoding",
    image: dicodingdata,
  },
  { id: 8, title: "Beginner Python Bootcamp Dicoding", image: dicodingpython },
  {
    id: 9,
    title: "Beginner Web Developer Bootcamp Dicoding",
    image: dicodingweb,
  },
  {
    id: 10,
    title: "Research and Publication on Text to Image Diffusion Models",
    image: diffusion,
  },
  {
    id: 11,
    title: "Research and Publication on Room Management UI/UX Design",
    image: reqroom,
  },
  { id: 11, title: "", image: reqroom },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Achievements() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section id="Achievements" className="bg-gray-800 py-20 px-4 max-h-[200vh]">
      <h2 className="text-4xl font-bold text-white text-center mb-12">
        Achievements
      </h2>

      {/* Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        {achievements.map((item) => (
          <motion.div
            key={item.id}
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
            className="bg-gray-700 rounded-xl overflow-hidden cursor-pointer"
            onClick={() => setActiveImage(item)}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-white font-semibold text-lg">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded"
              >
                Close
              </button>

              <img
                src={activeImage.image}
                alt={activeImage.title}
                className="w-full h-[80vh] object-contain rounded-lg"
              />

              <p className="text-white text-center mt-4 text-xl font-semibold">
                {activeImage.title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
