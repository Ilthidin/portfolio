import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { name: "Home", targetId: "hero" },
  { name: "About", targetId: "about" },
  { name: "Timeline", targetId: "timeline" },
  { name: "Projects", targetId: "projects" },
];

const CTA = {
  name: "Get In Touch",
  targetId: "contact",
};

const MenuIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const XIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const GradientBorderButton = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="relative inline-block rounded-full bg-linear-to-r from-green-400 to-blue-500 p-px overflow-hidden"
  >
    <motion.span
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="relative block rounded-full bg-gray-900 px-5 py-2 text-sm font-semibold text-gray-200"
    >
      <motion.span
        variants={{
          rest: { scaleX: 0 },
          hover: { scaleX: 1 },
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="absolute inset-0 origin-left bg-linear-to-r from-green-500 to-blue-500"
      />
      <span className="relative z-10 cursor-pointer">{children}</span>
    </motion.span>
  </button>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* NAVBAR — uses opacity fade only, no y-translate that can cause layout shift */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-10000 bg-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4 xl:px-8 2xl:px-0 h-16 flex items-center justify-between">
          <span className="text-xl font-bold bg-linear-to-r from-green-400 to-blue-500 bg-clip-text text-transparent 2xl:text-2xl">
            Muhammad Syihab Habibi
          </span>

          {/* Mobile button */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden p-1 text-gray-300"
            aria-label="Open menu"
          >
            <MenuIcon />
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.targetId)}
                className="text-gray-400 font-bold hover:text-blue-500 cursor-pointer"
              >
                {item.name}
              </button>
            ))}

            <GradientBorderButton onClick={() => scrollToSection(CTA.targetId)}>
              {CTA.name}
            </GradientBorderButton>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-10001 bg-gray-900"
          >
            <div className="h-16 px-4 flex items-center justify-between border-b border-gray-700">
              <span className="text-xl font-bold bg-linear-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Muhammad Syihab Habibi
              </span>

              <button
                onClick={() => setOpen(false)}
                className="p-3 text-gray-300"
                aria-label="Close menu"
              >
                <XIcon />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center h-[calc(100%-4rem)] space-y-8">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    scrollToSection(item.targetId);
                    setOpen(false);
                  }}
                  className="text-xl font-medium text-gray-300 hover:text-blue-500"
                >
                  {item.name}
                </button>
              ))}

              <GradientBorderButton
                onClick={() => {
                  scrollToSection(CTA.targetId);
                  setOpen(false);
                }}
              >
                {CTA.name}
              </GradientBorderButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}