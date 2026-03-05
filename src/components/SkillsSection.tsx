import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    title: "Programming",
    skills: ["Python (Advanced)", "SQL", "Bash / Shell", "C++", "Java (Basic)"],
  },
  {
    title: "Backend Technologies",
    skills: ["FastAPI", "Django", "REST APIs", "SOAP APIs", "JWT Auth"],
  },
  {
    title: "Databases",
    skills: ["Oracle DB", "MySQL", "SQLite", "PostgreSQL"],
  },
  {
    title: "Systems & DevTools",
    skills: ["Linux (RHEL)", "Control-M", "Jenkins", "Git", "Docker", "JIRA"],
  },
  {
    title: "CS Fundamentals",
    skills: ["DSA (400+ LC)", "OOP", "Operating Systems", "DBMS"],
  },
  {
    title: "Engineering",
    skills: ["ETL Processing", "Batch Automation", "Log Analysis", "RCA", "API Integration"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-mono text-accent tracking-widest uppercase mb-3">Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 tracking-tight">
            Technical toolkit.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
              className="glass-card p-6 hover:glow-border transition-all duration-300 group"
            >
              <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-secondary text-muted-foreground group-hover:bg-accent/10 group-hover:text-accent transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
