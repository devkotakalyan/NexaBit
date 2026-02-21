import { motion } from "framer-motion";

function card({service, description, img, features}) {
  return (
    <motion.div 
      className="card bg-[#f9fafb] p-0 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 w-full md:w-[350px] border border-[#d1d5db] overflow-hidden group cursor-pointer"
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#0ea5e9] to-[#38bdf8]">
        {img && img !== "#" ? (
          <img
            src={img}
            alt={service}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0ea5e9]/90 to-[#38bdf8]/90"></div>
            <div className="relative z-10 text-white text-6xl font-bold opacity-30">{service.charAt(0)}</div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-2xl font-bold text-white drop-shadow-lg">{service}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-[#374151] leading-relaxed mb-4">{description}</p>
        {features && features.length > 0 && (
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start text-sm text-[#6b7280]">
                <span className="text-[#ea580c] mr-2">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-4 pt-4 border-t border-[#e5e7eb]">
          <span className="text-[#ea580c] font-semibold text-sm group-hover:text-[#c2410c] transition-colors">
            Learn More →
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default card;