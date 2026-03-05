import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Server, Brain, Workflow } from "lucide-react";

const highlights = [
  { icon: Server, label: "Backend Architecture", desc: "Scalable APIs & distributed systems" },
  { icon: Brain, label: "AI / GenAI Systems", desc: "RAG, LLMs, vector search pipelines" },
  { icon: Workflow, label: "Automation", desc: "Batch jobs, ETL, workflow tooling" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-mono text-accent tracking-widest uppercase mb-3">About</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 tracking-tight">
            Building the backbone of modern software.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid md:grid-cols-5 gap-12 mb-16"
        >
          <div className="md:col-span-3 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Ritish Bhardwaj is a Software Developer working at Amdocs, contributing to telecom solutions for Rogers Communications. His work focuses on backend architecture, API design, automation tooling, and AI-powered knowledge systems.
            </p>
            <p>
              He specializes in building scalable services using Python, FastAPI, and modern database systems, along with developing GenAI-driven solutions such as Retrieval-Augmented Generation systems using LangChain, Ollama, and ChromaDB.
            </p>
            <p>
              He also has strong foundations in Data Structures & Algorithms (400+ LeetCode problems solved), system design, and distributed backend systems.
            </p>
          </div>

          <div className="md:col-span-2 space-y-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="glass-card p-4 flex items-start gap-4 hover:glow-border transition-all duration-300"
              >
                <div className="p-2 rounded-lg bg-accent/10 text-accent shrink-0">
                  <h.icon size={20} />
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">{h.label}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{h.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
