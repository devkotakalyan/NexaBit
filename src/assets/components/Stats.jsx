import { motion } from "framer-motion";

function StatCard({ number, label, delay = 0 }) {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <motion.div
        className="text-5xl md:text-6xl font-bold text-[#f97316] mb-2"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay + 0.2, type: "spring" }}
      >
        {number}
      </motion.div>
      <div className="text-lg text-[#d1d5db] font-medium">{label}</div>
    </motion.div>
  );
}

function Stats() {
  return (
    <section className="py-20 bg-[#111827] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">Why Choose NexaBit</h2>
          <p className="text-[#d1d5db] text-lg">Fresh perspectives, innovative solutions, dedicated team</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCard number="100%" label="Dedicated Focus" delay={0.1} />
          <StatCard number="24/7" label="Support Available" delay={0.2} />
          <StatCard number="4+" label="Expert Founders" delay={0.3} />
          <StatCard number="2026" label="Founded" delay={0.4} />
        </div>
      </div>
    </section>
  );
}

export default Stats;

