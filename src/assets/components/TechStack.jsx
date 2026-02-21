import { motion } from "framer-motion";

function TechStack() {
  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Python", category: "Backend" },
    { name: "AWS", category: "Cloud" },
    { name: "Docker", category: "DevOps" },
    { name: "MongoDB", category: "Database" },
    { name: "TypeScript", category: "Frontend" },
    { name: "Kubernetes", category: "DevOps" },
  ];

  return (
    <section className="py-24 bg-[#e5e7eb]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-[#111827] mb-4">Our Technology Stack</h2>
          <p className="text-lg text-[#6b7280]">Cutting-edge tools for cutting-edge solutions</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="bg-[#f9fafb] p-6 rounded-xl border border-[#d1d5db] hover:border-[#ea580c] hover:shadow-lg transition-all duration-300 text-center group cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <div className="text-3xl font-bold text-[#374151] mb-2 group-hover:text-[#ea580c] transition-colors">
                {tech.name}
              </div>
              <div className="text-sm text-[#6b7280]">{tech.category}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;

