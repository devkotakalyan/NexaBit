import { motion } from "framer-motion";

function Face_Card({ name, title, image, description }) {
    return(
        <>
        <motion.div
            className="face-card bg-[#f9fafb] p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full md:w-[300px] border border-[#d1d5db] overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -8, scale: 1.02 }}
        >
            {image && (
                <motion.div
                    className="mb-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                >
                    <img
                        src={image}
                        alt={name}
                        className="rounded-full h-48 w-48 object-cover mx-auto border-4 border-[#d1d5db] shadow-lg group-hover:border-[#ea580c] transition-colors"
                    />
                </motion.div>
            )}
            <h3 className="text-xl font-bold mb-2 text-[#111827] text-center">{name}</h3>
            <h4 className="text-md font-semibold mb-3 text-[#ea580c] text-center">{title}</h4>
            <p className="text-[#6b7280] leading-relaxed text-center">{description}</p>
        </motion.div>
        </>
    );
};

export default Face_Card;