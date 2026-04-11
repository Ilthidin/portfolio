import { motion } from "framer-motion";

const services = [
  {
    title: "Custom Website Development",
    desc: "Build modern and scalable websites from scratch using clean and maintainable code.",
  },
  {
    title: "React Application Development",
    desc: "Develop fast and interactive web applications using React ecosystem and best practices.",
  },
  {
    title: "Responsive Design",
    desc: "Ensure websites work perfectly across desktop, tablet, and mobile devices.",
  },
  {
    title: "UI / UX Improvement",
    desc: "Enhance interface usability, layout structure, and overall user experience.",
  },
  {
    title: "Performance Optimization",
    desc: "Improve loading speed, SEO fundamentals, and overall web performance.",
  },
  {
    title: "Animation & Interaction",
    desc: "Create smooth animations and engaging user interactions using modern tools.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Services() {
  return (
    <section className="w-full bg-linear-to-bl from-gray-900 via-slate-800 to-gray-900 py-8 lg:py-16 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Services
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={card}
              whileHover={{ y: -8 }}
              className="group rounded-2xl border border-gray-800 bg-gray-900 p-6 hover:border-blue-500 transition"
            >
              <div className="mb-4 h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition">
                <span className="text-blue-400 font-bold">{index + 1}</span>
              </div>

              <h3 className="text:lg lg:text-xl font-semibold mb-2 lg:whitespace-nowrap">
                {service.title}
              </h3>

              <p className="text-gray-400 text-xs lg:text-sm leading-relaxed text-justify">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
