import { motion } from "framer-motion";
import Navbar from "../assets/components/Navbar";
import Face_Card from "../assets/components/Face_Card";
import Footer from "../assets/components/Footer";
import Bibek from "../Images_For_Website/Bibek_Photo.jpeg";
import Kalyan from "../Images_For_Website/Kalyan_Photo.jpg";
import logo from "../assets/logo_head.png";

function nexaBitAbout() {
  return (
    <>
      <section
        className="relative h-screen bg-center flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)`,
        }}
      >
        {/* Abstract Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#0ea5e9]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#38bdf8]/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#111827]/50 to-[#111827]/70"></div>
        
        {/* Hero Content */}
        <motion.div
          className="relative z-10 text-center text-white px-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          {/* Logo */}
          <motion.img
            src={logo}
            alt="NexaBit Logo"
            className="mx-auto lg:w-64 w-48 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            About <span className="text-[#f97316]">NexaBit</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-[#d1d5db] max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Empowering businesses through innovative technology solutions
          </motion.p>
        </motion.div>
      </section>
      <section id="Navbar" className="sticky top-0 z-50">
        <Navbar />
      </section>
      <section id="Moto" className="py-24 bg-[#f3f4f6] text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#0ea5e9] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#38bdf8] rounded-full blur-3xl"></div>
        </div>
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#111827]">Our Story</h2>
          <p className="text-lg md:text-xl text-[#6b7280] max-w-4xl mx-auto leading-relaxed px-6">
            Founded in February 2026, NexaBit is a fresh, innovative technology company born from a vision 
            to transform how businesses interact with technology. We are a team of passionate experts 
            dedicated to providing cutting-edge solutions that drive growth, efficiency, and digital 
            transformation. Specializing in software development, cloud computing, and IT consulting, 
            we bring a modern approach to technology services. At NexaBit, we believe in fostering a culture 
            of creativity, collaboration, and continuous learning as we build our journey from the ground up, 
            committed to delivering exceptional results for every client we serve.
          </p>
        </motion.div>
      </section>
      
      {/* Mission & Vision Section */}
      <section className="py-24 bg-[#e5e7eb] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#0ea5e9] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#38bdf8] rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4">Mission & Vision</h2>
            <p className="text-lg text-[#6b7280] max-w-2xl mx-auto">
              Our guiding principles that drive everything we do
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              className="bg-gradient-to-br from-[#f3f4f6] to-[#e5e7eb] p-8 rounded-xl shadow-lg border border-[#d1d5db]"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-3xl font-bold text-[#111827] mb-4">Our Mission</h3>
              <p className="text-[#6b7280] text-lg leading-relaxed">
                To empower businesses worldwide with innovative technology solutions that drive growth, 
                efficiency, and digital transformation. We strive to be the trusted partner that helps 
                organizations navigate the complexities of the digital age and achieve their strategic goals.
              </p>
            </motion.div>
            <motion.div
              className="bg-gradient-to-br from-[#f9fafb] to-[#e5e7eb] p-8 rounded-xl shadow-lg border border-[#d1d5db]"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-5xl mb-4">🔮</div>
              <h3 className="text-3xl font-bold text-[#111827] mb-4">Our Vision</h3>
              <p className="text-[#6b7280] text-lg leading-relaxed">
                To become a globally recognized leader in technology innovation, known for delivering 
                transformative solutions that create lasting value for our clients. We envision a future 
                where technology seamlessly integrates with business needs, enabling unprecedented growth 
                and success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Company Values Section */}
      <section className="py-24 bg-[#f3f4f6] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#0ea5e9] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#38bdf8] rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4">Our Core Values</h2>
            <p className="text-lg text-[#6b7280] max-w-2xl mx-auto">
              The principles that guide our work and define our culture
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "💡", title: "Innovation", desc: "We constantly push boundaries and explore new possibilities in technology." },
              { icon: "🤝", title: "Integrity", desc: "We maintain the highest ethical standards in all our business practices." },
              { icon: "🎯", title: "Excellence", desc: "We strive for perfection in every project and deliver exceptional results." },
              { icon: "🌱", title: "Growth", desc: "We foster continuous learning and development for our team and clients." },
              { icon: "🤲", title: "Collaboration", desc: "We believe in the power of teamwork and building strong partnerships." },
              { icon: "⚡", title: "Agility", desc: "We adapt quickly to change and respond with speed and precision." }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-[#f9fafb] p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#d1d5db] text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-[#111827] mb-3">{value.title}</h3>
                <p className="text-[#6b7280] leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Journey Section */}
      <section className="py-24 bg-[#e5e7eb] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#0ea5e9] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#38bdf8] rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4">Our Journey</h2>
            <p className="text-lg text-[#6b7280] max-w-2xl mx-auto">
              The beginning of our story - building the future, one step at a time
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              className="bg-gradient-to-br from-[#f9fafb] to-[#e5e7eb] p-8 rounded-xl shadow-lg border border-[#d1d5db] hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-4xl font-bold text-[#ea580c] mb-2">February 2026</div>
              <h3 className="text-2xl font-bold text-[#111827] mb-4">Company Founded</h3>
              <p className="text-[#6b7280] leading-relaxed text-lg">
                NexaBit was officially launched with a vision to revolutionize technology solutions for businesses. 
                Our founding team came together with a shared passion for innovation, excellence, and a commitment 
                to delivering cutting-edge solutions.
              </p>
            </motion.div>
            <motion.div
              className="bg-gradient-to-br from-[#f3f4f6] to-[#e5e7eb] p-8 rounded-xl shadow-lg border border-[#d1d5db] hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-[#374151] mb-2">2026</div>
              <h3 className="text-2xl font-bold text-[#111827] mb-4">Building Our Foundation</h3>
              <p className="text-[#6b7280] leading-relaxed text-lg">
                We are currently building our portfolio, establishing strategic partnerships, and working on 
                exciting projects that will shape the future of technology services. Every day brings new 
                opportunities to innovate and grow.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* What We're Building Section */}
      <section className="py-24 bg-[#f9fafb] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#0ea5e9] rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4">What We're Building</h2>
            <p className="text-lg text-[#6b7280] max-w-2xl mx-auto">
              Our focus areas as we grow and innovate
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "🚀", title: "Innovative Solutions", desc: "Developing cutting-edge technology solutions that solve real business challenges." },
              { icon: "🤝", title: "Strong Partnerships", desc: "Building lasting relationships with clients and technology partners." },
              { icon: "💡", title: "Future-Ready Tech", desc: "Embracing the latest technologies to stay ahead of industry trends." }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-[#f3f4f6] p-6 rounded-xl shadow-lg border border-[#d1d5db] hover:shadow-xl transition-all text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-[#111827] mb-3">{item.title}</h3>
                <p className="text-[#6b7280] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-[#e5e7eb] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#0ea5e9] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#38bdf8] rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#111827] mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Meet The Founders
          </motion.h2>
          <motion.p
            className="text-lg text-[#6b7280] mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The passionate leaders driving innovation at NexaBit
          </motion.p>
        </div>
        <div className="flex justify-center gap-8 max-w-7xl mx-auto px-6 relative z-10">
          <Face_Card
            name="Kalyan Devkota"
            title="CEO & CFO"
            image={Kalyan}
            description="Kalyan is the visionary behind NexaBit, leading the company with a passion for innovation and a commitment to excellence."
          />
          <Face_Card
            name="Bibek Upadhayay"
            title="CTO"
            image={Bibek}
            description="Bibek oversees all technical aspects of the company, ensuring we stay at the forefront of technology trends."
          />
          <Face_Card
            name="Aayush Neupane"
            title="Head of Human Resources & Project Management"
            image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
            description="Aayush leads our human resources and project management efforts, ensuring smooth operations and team success."
          />
          <Face_Card
            name="Jenish Neupane"
            title="Lead for Research & Development"
            image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
            description="Jenish drives our research and development efforts, pushing boundaries and creating innovative solutions."
          />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-[#111827] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-96 h-96 bg-[#0ea5e9] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#38bdf8] rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-[#d1d5db] mb-8 max-w-2xl mx-auto">
              As a fresh and innovative technology company, we're excited to partner with forward-thinking businesses. 
              Let's build something amazing together and shape the future of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/#Contact_Us"
                className="inline-block bg-[#ea580c] hover:bg-[#c2410c] text-white transition duration-300 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="/#Services"
                className="inline-block bg-transparent border-2 border-[#e5e7eb] hover:bg-[#e5e7eb] hover:text-[#111827] text-white transition duration-300 px-8 py-4 rounded-lg font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Our Services
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
      <section id="Footer" className="bg-[#111827] text-white py-6 text-center">
        <Footer />
      </section>
    </>
  );
}

export default nexaBitAbout;