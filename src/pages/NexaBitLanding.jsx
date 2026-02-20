import { motion } from "framer-motion";
import Hero_Image from "../Images_For_Website/Hero_Img_code.webp";
import logo from "../assets/logo_head.png";
import Card from "../assets/components/card";
import FeatureCard from "../assets/components/Feature_card";
import Navbar from "../assets/components/navbar";

function NexaBitLanding() {
  return (
    <>
      <section
        className="relative h-screen bg-center flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: `url(${Hero_Image})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 "></div>

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
            Welcome to <span className="text-[#3396CD]">NexaBit</span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            className="text-lg md:text-xl text-[#D4EDF8] mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Your gateway to the future of technology.
          </motion.p>

          {/* Button */}
          <motion.a
            href="#Moto"
            className="inline-block bg-[#3396CD] hover:bg-[#255068] transition duration-300 px-8 py-3 rounded-lg font-semibold"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
          >
            Lets Get Started
          </motion.a>
        </motion.div>
      </section>
      <section>
        <Navbar />
      </section>
      <section id="Moto" className="py-20 bg-[#D4EDF8] text-center">
        <h2 className="text-3xl font-bold mb-6 text-[#255068]">Our Motto</h2>
        <p className="text-lg text-gray-700 max-w-[70%] mx-auto leading-relaxed">
          At NexaBit, we build intelligent technology that empowers businesses
          and individuals to thrive in the digital era. We focus on seamless,
          secure, and scalable solutions that simplify complexity and unlock new
          opportunities. Innovation isn’t just our goal — it’s our standard.
        </p>
      </section>
      <section id="Services" className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6 text-[#0A345D]">Our Services</h2>
        <div className="cards flex justify-center gap-8 max-w-5xl mx-auto">
          <Card
            service="Web Development"
            description="Custom web development tailored to your business needs."
            img="#"
          />
          <Card
            service="IT Consulting"
            description="Expert IT consulting to optimize your technology strategy."
            img="#"
          />
          <Card
            service="Web/App Development"
            description="End-to-end web and application development for modern businesses."
            img="#"
          />
        </div>
      </section>
      <section id="Contact" className="py-24 bg-[#D4EDF8]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#255068] mb-10">
            Our Values
          </h2>
          <FeatureCard
            title1="Innovation"
            description1="We are committed to pushing the boundaries of technology to create innovative solutions that drive progress and empower our clients."
            title2="Integrity"
            description2="We uphold the highest standards of integrity in all our actions, ensuring transparency, honesty, and ethical practices in everything we do."
            img="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5ub3ZhdGlvb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
          />
        </div>
      </section>
    </>
  );
}

export default NexaBitLanding;
