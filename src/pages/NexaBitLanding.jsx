import { motion } from "framer-motion";
import Hero_Image from "../Images_For_Website/Hero_Img_code.webp";
import logo from "../assets/logo_head.png";
import Card from "../assets/components/card";
import FeatureCard from "../assets/components/Feature_card";
import Navbar from "../assets/components/Navbar";
import Contact_Us from "../assets/components/Contact_Us";
import Footer from "../assets/components/Footer";
import Stats from "../assets/components/Stats";
import Testimonials from "../assets/components/Testimonial";
import TechStack from "../assets/components/TechStack";

function NexaBitLanding() {
  return (
    <>
      <section
        className="relative h-screen bg-center flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: `url(${Hero_Image})` }}
      >
        {/* Abstract Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#0ea5e9]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#38bdf8]/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#111827]/50 to-[#111827]/70"></div>

        {/* Content */}
        <motion.div
          className="relative text-center text-white px-6"
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

          {/* Heading */}
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Welcome to <span className="text-[#f97316]">NexaBit</span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            className="text-lg md:text-xl text-[#d1d5db] mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Your gateway to the future of technology. We transform ideas into innovative digital solutions.
          </motion.p>

          {/* Button */}
          <motion.a
            href="#Moto"
            className="inline-block bg-[#ea580c] hover:bg-[#c2410c] text-white transition duration-300 px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
          >
            Lets Get Started
          </motion.a>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#111827]">Our Mission</h2>
          <p className="text-lg md:text-xl text-[#6b7280] max-w-4xl mx-auto leading-relaxed px-6">
            At NexaBit, we build intelligent technology that empowers businesses
            and individuals to thrive in the digital era. We focus on seamless,
            secure, and scalable solutions that simplify complexity and unlock new
            opportunities. Innovation isn't just our goal — it's our standard.
          </p>
        </motion.div>
      </section>
      <section id="Services" className="py-24 bg-[#e5e7eb] text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#0ea5e9] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#38bdf8] rounded-full blur-3xl"></div>
        </div>
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#111827]">Our Services</h2>
          <p className="text-lg text-[#6b7280] mb-12 max-w-2xl mx-auto px-6">
            Comprehensive technology solutions designed to drive your business forward
          </p>
        </motion.div>
        <div className="cards flex flex-wrap justify-center gap-8 max-w-7xl mx-auto px-6 relative z-10">
          <Card
            service="Web Development"
            description="Custom web development tailored to your business needs. We create responsive, scalable, and high-performance websites that engage users and drive conversions."
            img="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            features={["Responsive Design", "SEO Optimized", "Fast Performance", "Modern UI/UX"]}
          />
          <Card
            service="IT Consulting"
            description="Expert IT consulting to optimize your technology strategy. We help businesses align technology with their goals and maximize ROI through strategic planning."
            img="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            features={["Strategic Planning", "Technology Assessment", "Digital Transformation", "Cloud Migration"]}
          />
          <Card
            service="App Development"
            description="End-to-end mobile and web application development for modern businesses. From concept to deployment, we bring your ideas to life."
            img="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            features={["Native & Hybrid Apps", "Cross-Platform", "API Integration", "App Store Optimization"]}
          />
        </div>
      </section>
      <Stats />
      <section id="Contact" className="py-24 bg-gradient-to-b from-[#e5e7eb] to-[#f3f4f6] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#0ea5e9] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#38bdf8] rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#111827] mb-10"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Values
          </motion.h2>
          <FeatureCard
            title1="Innovation"
            description1="We are committed to pushing the boundaries of technology to create innovative solutions that drive progress and empower our clients. Our team stays ahead of industry trends to deliver cutting-edge solutions."
            title2="Integrity"
            description2="We uphold the highest standards of integrity in all our actions, ensuring transparency, honesty, and ethical practices in everything we do. Trust is the foundation of every relationship we build."
            img="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5ub3ZhdGlvb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
          />
        </div>
      </section>
      <TechStack />
      <Testimonials />
      <section id="Contact_Us" className="py-24 bg-[#f9fafb] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-72 h-72 bg-[#0ea5e9] rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10">
          <Contact_Us />
        </div>
      </section>
      <section id="Footer" className="bg-[#111827] text-white py-6 text-center">
        <Footer />
      </section>
    </>
  );
}

export default NexaBitLanding;
