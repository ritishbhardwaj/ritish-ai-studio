import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Shipper – Backend as a Service",
    description:
      "A backend platform providing shipment and user management APIs designed with scalable REST architecture.",
    features: [
      "15+ RESTful API endpoints",
      "JWT authentication & RBAC",
      "SQLAlchemy ORM integration",
      "Transaction-safe DB handling",
      "OpenAPI documentation",
    ],
    tech: ["Python", "FastAPI", "SQLAlchemy", "JWT", "PostgreSQL"],
    github: "https://github.com/ritishbhardwaj/Shipper",
    codePreview: `@app.get("/shipments/{id}")
async def get_shipment(id: int, db: Session):
    shipment = db.query(Shipment).get(id)
    if not shipment:
        raise HTTPException(404)
    return shipment`,
  },
  {
    title: "AI GPT Bot – RAG System",
    description:
      "An AI knowledge assistant built using Retrieval-Augmented Generation architecture to enable semantic search across documents.",
    features: [
      "1000+ document embeddings",
      "Semantic vector search",
      "Persistent conversational memory",
      "20% response latency improvement",
    ],
    tech: ["LangChain", "Ollama", "ChromaDB", "SQLite"],
    github: "https://github.com/ritishbhardwaj/GptBOT",
    codePreview: `retriever = vectorstore.as_retriever(
    search_type="similarity",
    search_kwargs={"k": 5}
)
chain = RetrievalQA.from_chain_type(
    llm=ollama, retriever=retriever
)`,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* AI grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle, hsl(var(--accent)) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }} />

      <div className="max-w-5xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-mono text-accent tracking-widest uppercase mb-3">Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 tracking-tight">
            What I've built.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card overflow-hidden hover:glow-border transition-all duration-500 group"
            >
              {/* Code preview */}
              <div className="bg-foreground/[0.03] p-5 border-b border-border/50">
                <div className="flex items-center gap-1.5 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                </div>
                <pre className="text-xs font-mono text-muted-foreground overflow-x-auto leading-relaxed">
                  <code>{project.codePreview}</code>
                </pre>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-foreground">{project.title}</h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    <Github size={18} />
                  </a>
                </div>

                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

                <ul className="space-y-1.5 mb-5">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="w-1 h-1 rounded-full bg-accent" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-[10px] font-mono font-medium rounded-full bg-accent/10 text-accent"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
