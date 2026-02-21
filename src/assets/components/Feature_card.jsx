import { motion } from "framer-motion";

function FeatureCard({ title1, title2, description1, description2, img }) {
  return (
    <>
      <motion.div
        className="grid md:grid-cols-2 gap-12 items-center bg-[#f9fafb] p-8 rounded-xl shadow-lg border border-[#d1d5db] hover:shadow-xl transition-shadow duration-300"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-left">
          <motion.h1
            className="text-3xl font-bold text-[#111827] mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {title1}
          </motion.h1>
          <motion.p
            className="text-[#6b7280] mb-8 leading-relaxed text-lg"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {description1}
          </motion.p>
          <motion.h1
            className="text-3xl font-bold text-[#111827] mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {title2}
          </motion.h1>
          <motion.p
            className="text-[#6b7280] leading-relaxed text-lg"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {description2}
          </motion.p>
        </div>
        <motion.div
          className="Image_left"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <img
            src={img}
            alt="Innovation"
            className="w-full h-auto rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          />
        </motion.div>
      </motion.div>
    </>
  );
}

export default FeatureCard;
