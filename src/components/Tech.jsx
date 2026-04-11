import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { useRef, useLayoutEffect, useState } from "react";

import js from "../assets/js.webp";
import react from "../assets/react.webp";
import tailwind from "../assets/tailwind.webp";
import framer from "../assets/motion.webp";
import ts from "../assets/ts.webp";
import github from "../assets/github.webp";
import redux from "../assets/redux.webp";
import figma from "../assets/figma.webp";

const TECH_STACK = [
  { name: "React", src: react },
  { name: "Tailwind", src: tailwind },
  { name: "TypeScript", src: ts },
  { name: "JavaScript", src: js },
  { name: "Framer Motion", src: framer },
  { name: "Redux", src: redux },
  { name: "GitHub", src: github },
  { name: "Figma", src: figma },
];

export default function Tech() {
  const x = useMotionValue(0);
  const contentRef = useRef(null);
  const [width, setWidth] = useState(0);

  const SPEED = 80;

  useLayoutEffect(() => {
    if (contentRef.current) {
      setWidth(contentRef.current.offsetWidth);
    }
  }, []);

  useAnimationFrame((_, delta) => {
    if (!width) return;

    const move = (SPEED * delta) / 1000;
    let next = x.get() - move;

    if (next <= -width) {
      next += width;
    }

    x.set(next);
  });

  // 🔥 create multiple clones (not just 2)
  const MULTIPLIER = 4;

  return (
    <section className="bg-linear-to-br from-gray-900 to-black py-16 lg:py-20 2xl:py-16 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-3xl font-bold text-white text-center mb-10">
          What I Use to Create Websites
        </h2>

        <div className="overflow-hidden">
          <motion.div style={{ x }} className="flex will-change-transform">
            <div ref={contentRef} className="flex">
              {TECH_STACK.map((tech) => (
                <Item key={tech.name} tech={tech} />
              ))}
            </div>

            {Array(MULTIPLIER - 1)
              .fill(TECH_STACK)
              .flat()
              .map((tech, i) => (
                <Item key={`clone-${i}`} tech={tech} />
              ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function Item({ tech }) {
  return (
    <div className="flex flex-col items-center px-8 lg:px-12 shrink-0">
      <div className="h-24 w-24 mb-4">
        <img
          src={tech.src}
          alt={tech.name}
          draggable="false"
          className="h-full w-full object-contain rounded-xl"
        />
      </div>
      <span className="text-white text-sm">{tech.name}</span>
    </div>
  );
}
