import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const titles = [
  "Backend Engineer",
  "Full Stack AI Engineer",
  "Python Developer",
  "GenAI Systems Builder",
];

const HeroSection = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];
    const timeout = deleting ? 40 : 80;

    if (!deleting && charIndex === current.length) {
      setTimeout(() => setDeleting(true), 2000);
      return;
    }
    if (deleting && charIndex === 0) {
      setDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timer = setTimeout(() => {
      setCharIndex((prev) => prev + (deleting ? -1 : 1));
    }, timeout);
    return () => clearTimeout(timer);
  }, [charIndex, deleting, titleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-accent/5 blur-3xl floating-element" />
        <div className="absolute bottom-1/4 -left-32 w-80 h-80 rounded-full bg-glow-secondary/5 blur-3xl floating-element" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-accent/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-accent/[0.03]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 md:gap-20 pt-24">
        {/* Profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="shrink-0"
        >
          <div className="relative">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden glow-border">
              <img
                src={profilePhoto}
                alt="Ritish Bhardwaj"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-green-500 border-4 border-background" />
          </div>
        </motion.div>

        {/* Content */}
        <div className="text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm font-mono text-accent tracking-widest uppercase mb-4"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-4"
          >
            Ritish Bhardwaj
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="h-8 mb-6"
          >
            <span className="text-lg md:text-xl font-mono text-muted-foreground">
              {titles[titleIndex].slice(0, charIndex)}
            </span>
            <span className="text-accent animate-pulse">|</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-muted-foreground max-w-xl leading-relaxed mb-8"
          >
            Software Developer at Amdocs building scalable backend systems,
            automation pipelines, and AI-powered solutions. Specialized in
            Python, FastAPI, distributed backend services, and
            Retrieval-Augmented Generation systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-3 justify-center md:justify-start"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
            >
              View Projects
              <ArrowDown size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full text-sm font-medium text-foreground hover:bg-secondary transition-colors"
            >
              <Mail size={16} />
              Contact Me
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full text-sm font-medium text-foreground hover:bg-secondary transition-colors"
            >
              <Download size={16} />
              Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
