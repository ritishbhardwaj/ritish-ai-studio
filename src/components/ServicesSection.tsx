import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Server, Brain, Cpu, Globe } from "lucide-react";

const services = [
  {
    icon: Server,
    title: "Backend Engineering",
    desc: "Design and development of scalable backend systems using Python frameworks like FastAPI and Django with secure authentication and optimized database architectures.",
  },
  {
    icon: Brain,
    title: "Full Stack AI Engineering",
    desc: "Development of AI-powered applications including LLM integrations, vector search systems, and GenAI pipelines.",
  },
  {
    icon: Cpu,
    title: "GenAI Solutions",
    desc: "Design and implementation of Retrieval-Augmented Generation systems, document intelligence platforms, and internal knowledge assistants.",
  },
  {
    icon: Globe,
    title: "Web Development",
    desc: "Full-stack web application development with scalable backend architecture and responsive frontend interfaces.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-mono text-accent tracking-widest uppercase mb-3">Services</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 tracking-tight">
            What I can do for you.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 hover:glow-border transition-all duration-300 group"
            >
              <div className="p-3 rounded-xl bg-accent/10 text-accent w-fit mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                <s.icon size={22} />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
