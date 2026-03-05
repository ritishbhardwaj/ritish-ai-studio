import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Briefcase, ChevronDown, ChevronUp } from "lucide-react";

const contributions = [
  "Designed request/response schema models using Pydantic and FastAPI ensuring strong validation and API contract integrity.",
  "Implemented telecom-standard TMF640 Open API design principles for lifecycle-based REST services.",
  "Built scalable backend services using FastAPI repository pattern separating business logic from persistence.",
  "Developed Python automation tools for Test Data Management workflows handling 230+ environment requests monthly, reducing manual work by 63%.",
  "Built SOAP API automation system processing 200+ user operations monthly via dynamic XML generation.",
  "Designed a GenAI-powered RAG system to centralize telecom lessons learned data.",
  "Implemented vector search pipeline using document chunking, embeddings (nomic-embed-text), and ChromaDB indexing.",
  "Integrated Ollama LLM (qwen2.5) with prompt orchestration for contextual answer generation.",
  "Conducted Root Cause Analysis for 50+ production batch failures using Linux logs, Control-M monitoring, and Oracle SQL.",
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [expanded, setExpanded] = useState(false);

  const visibleContributions = expanded ? contributions : contributions.slice(0, 5);

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-mono text-accent tracking-widest uppercase mb-3">Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 tracking-tight">
            Where I've contributed.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="glass-card p-6 md:p-8"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-xl bg-accent/10 text-accent shrink-0">
              <Briefcase size={22} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Software Developer</h3>
              <p className="text-sm text-muted-foreground">Amdocs — Client: Rogers Communications</p>
              <p className="text-xs text-muted-foreground mt-1">Pune, India · July 2024 – Present</p>
            </div>
          </div>

          <ul className="space-y-3">
            {visibleContributions.map((c, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.25 + i * 0.05 }}
                className="flex items-start gap-3 text-sm text-muted-foreground"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                <span>{c}</span>
              </motion.li>
            ))}
          </ul>

          {contributions.length > 5 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-4 flex items-center gap-1 text-xs text-accent hover:underline"
            >
              {expanded ? "Show less" : `Show ${contributions.length - 5} more`}
              {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
