import { motion } from "framer-motion";

function TestimonialCard({ quote, author, role, company, delay = 0 }) {
  return (
    <motion.div
      className="bg-[#f9fafb] p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#d1d5db]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
    >
      <div className="mb-6">
        <div className="flex text-[#f97316] text-2xl mb-4">
          {"★★★★★".split("").map((star, i) => (
            <span key={i}>{star}</span>
          ))}
        </div>
        <p className="text-[#6b7280] text-lg leading-relaxed italic">
          "{quote}"
        </p>
      </div>
      <div className="border-t border-[#e5e7eb] pt-4">
        <div className="font-bold text-[#111827]">{author}</div>
        <div className="text-sm text-[#374151]">
          {role} at {company}
        </div>
      </div>
    </motion.div>
  );
}

function Testimonials() {
  const testimonials = [
    {
      quote: "We're excited to be working with NexaBit on our digital transformation journey. Their fresh approach and innovative thinking are exactly what we need.",
      author: "Sarah Johnson",
      role: "CTO",
      company: "TechCorp"
    },
    {
      quote: "NexaBit brings a new perspective to technology solutions. Their team's passion and dedication to excellence is evident in everything they do.",
      author: "Michael Chen",
      role: "CEO",
      company: "InnovateLabs"
    },
    {
      quote: "As a new company, NexaBit demonstrates remarkable professionalism and technical expertise. We're confident they'll deliver exceptional results.",
      author: "Emily Rodriguez",
      role: "Director of IT",
      company: "Global Solutions"
    }
  ];

  return (
    <section className="py-24 bg-[#f3f4f6]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-[#111827] mb-4">What Our Partners Say</h2>
          <p className="text-lg text-[#6b7280]">Building relationships and delivering value from day one</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

