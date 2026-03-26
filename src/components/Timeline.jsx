import { useState } from "react";
import { motion } from "framer-motion";

export default function Timeline() {
  const data = [
    {
      year: "2021",
      title: "University Student",
      desc: "Started my programming journey in university, developing logic, analitical, and core software engineering skills through academic coursework and personal projects.",
      icon: "🎓",
    },
    {
      year: "2023",
      title: "Student Organization",
      desc: "Actively participated in student organizations for 2 Years, collaborating on projects and strengthening leadership, teamwork, and communication skills.",
      icon: "⚙️",
    },
    {
      year: "2024",
      title: "Bootcamp Internship",
      desc: "Participated in a bootcamp internship in 1 Year, working on real-world development projects and applying modern tools, frameworks, and best practices.",
      icon: "👨🏻‍💼",
    },
    {
      year: "2025",
      title: "Graduate From University",
      desc: "Graduated from university in 3.5 years with a GPA of 3.78/4.00, proofing strong academic discipline and consistency while continuously developing practical software development skills through projects.",
      icon: "👨🏻‍🎓",
    },
    {
      year: "Present",
      title: "Focus on Frontend Web Development",
      desc: "Focusing in frontend web development, creating responsive and interactive web applications while continuously improving performance, UI/UX, and modern development workflows.",
      icon: "💼",
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <div
      id="timeline"
      className="w-full bg-gradient-to-b from-blue-800/90 via-slate-900 to-gray-900 text-white flex items-center justify-center px-6 py-8 lg:py-16"
    >
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl xl:text-5xl font-bold mb-2">Timeline</h2>
          <p className="text-slate-400">Strategic milestones over time</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ delay: 0.5, duration: 2, ease: "easeInOut" }}
            style={{ transformOrigin: "left" }}
            className="absolute top-6 lg:top-8 left-0 w-full h-[4px] bg-slate-700 rounded-5xl"
          />

          {/* Nodes */}
          <div className="relative z-10 flex justify-between">
            {data.map((item, index) => {
              const isActive = index === active;

              return (
                <button
                  key={index}
                  onClick={() => setActive(index)}
                  className="flex flex-col items-center w-full focus:outline-none"
                >
                  <div
                    className={`w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center text-xl transition-all duration-300
                      ${
                        isActive
                          ? "bg-gradient-to-br from-blue-500 to-green-500 scale-110 shadow-lg shadow-green-500/30"
                          : "bg-slate-800 hover:bg-slate-700"
                      }`}
                  >
                    {item.icon}
                  </div>

                  <span
                    className={`mt-4 text-sm transition-colors
                      ${isActive ? "text-blue-400" : "text-slate-400"}`}
                  >
                    {item.year}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Card */}
        <div className="mt-16 flex justify-center">
          <div className="max-w-xl w-full bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl transition-all duration-500">
            <h3 className="text-2xl font-semibold mb-3">
              {data[active].title}
            </h3>
            <p className="text-slate-400 leading-relaxed text-justify">
              {data[active].desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
