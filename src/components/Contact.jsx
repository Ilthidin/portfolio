import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Phone, Twitter } from "lucide-react";

const CONTACTS = [
  {
    name: "Gmail",
    href: "mailto:msh.webdev@gmail.com",
    icon: Mail,
    color: "hover:text-red-500",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/muhammad-syihab",
    icon: Linkedin,
    color: "hover:text-blue-500",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/6289668080668",
    icon: Phone,
    color: "hover:text-green-500",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative w-full pt-4 pb-16 bg-gray-900">
      <div className="mx-auto max-w-5xl px-2 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
          className="card-wrapper pointer-events-none"
        >
          <div className="card-content relative z-10 pointer-events-auto bg-gray-900">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="mb-8 text-center"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Let’s Connect
              </h2>
              <p className="mt-3 text-gray-400">
                I'm available to reach on these platform
              </p>
            </motion.div>

            {/* Icons */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.08 },
                },
              }}
              className="flex flex-wrap justify-center gap-4 lg:gap-16"
            >
              {CONTACTS.map(({ name, href, icon: Icon, color }) => (
                <motion.a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ y: -6, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 18,
                  }}
                  className={`group flex h-16 w-16 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white backdrop-blur ${color}`}
                  aria-label={name}
                >
                  <Icon className="h-8 w-8 transition-colors duration-200" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
