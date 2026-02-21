import { motion } from "framer-motion";

function Conact_Us() {
    return (
        <>
            <div className="max-w-4xl mx-auto px-6">
                <motion.h1
                    className="text-4xl md:text-5xl font-bold text-center text-[#111827] mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Contact Us
                </motion.h1>
                <motion.p
                    className="text-center text-[#6b7280] text-lg mb-12 leading-relaxed max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    We'd love to hear from you! Whether you have questions, feedback, or want to discuss potential collaborations, feel free to reach out to us.
                </motion.p>
                <motion.div
                    className="bg-gradient-to-br from-[#f3f4f6] to-[#e5e7eb] rounded-xl p-8 shadow-lg border border-[#d1d5db] hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <div className="grid md:grid-cols-1 gap-6">
                        <motion.div
                            className="flex items-start p-4 bg-white rounded-lg hover:bg-[#f3f4f6] transition-colors border border-[#e5e7eb]"
                            whileHover={{ x: 5 }}
                        >
                            <div className="mr-4 text-2xl">📧</div>
                            <div>
                                <span className="font-semibold text-[#111827] block mb-1">Email</span>
                                <a href="mailto:info@nexabit.com" className="text-[#ea580c] hover:text-[#c2410c] transition-colors">info@nexabit.com</a>
                            </div>
                        </motion.div>
                        <motion.div
                            className="flex items-start p-4 bg-white rounded-lg hover:bg-[#f3f4f6] transition-colors border border-[#e5e7eb]"
                            whileHover={{ x: 5 }}
                        >
                            <div className="mr-4 text-2xl">📞</div>
                            <div>
                                <span className="font-semibold text-[#111827] block mb-1">Phone</span>
                                <a href="tel:+11234567890" className="text-[#ea580c] hover:text-[#c2410c] transition-colors">+1 (123) 456-7890</a>
                            </div>
                        </motion.div>
                        <motion.div
                            className="flex items-start p-4 bg-white rounded-lg hover:bg-[#f3f4f6] transition-colors border border-[#e5e7eb]"
                            whileHover={{ x: 5 }}
                        >
                            <div className="mr-4 text-2xl">📍</div>
                            <div>
                                <span className="font-semibold text-[#111827] block mb-1">Address</span>
                                <span className="text-[#6b7280]">123 NexaBit Street, Tech City, Country</span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </>
    );
}

export default Conact_Us;
                
                