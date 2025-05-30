import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png"; // ensure your logo path is correct

const Welcome = ({ onGetStarted }) => {
  return (
    <>
      {/* Global gradient background animation */}
      <style>{`
        @keyframes blackGradientAnimation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      <motion.div
        className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center px-6 text-center z-50"
        style={{
          background:
            "linear-gradient(144.39deg, #ffffff -278.56%, #6d6d6d -78.47%, #11101d 91.61%)",
          backgroundSize: "300% 300%",
          animation: "blackGradientAnimation 20s ease infinite",
          color: "#fff",
          fontFamily:
            "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 1 } }}
      >
        {/* Logo */}
        <motion.img
          src={logo}
          alt="Company Logo"
          className="w-24 h-24 rounded-full shadow-2xl mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
        />

        {/* Heading with gradient text including white */}
        <motion.h1
          className="text-5xl font-extrabold mb-4 leading-tight"
          style={{
            background:
              "linear-gradient(90deg, #ffffff 10%, #6ee7b7 50%, #3b82f6 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
          }}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
        >
          Welcome to <br /> Deepthi Labels
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="max-w-xl text-white mb-8"
          style={{ fontSize: "20px", lineHeight: 1.8, fontWeight: 500 }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          Empowering your business with cutting-edge technology and creative
          design.
        </motion.p>

        {/* Get Started Button */}
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow:
              "0 8px 15px rgba(59, 130, 246, 0.4), 0 0 10px rgba(110, 231, 183, 0.6)",
          }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-full font-semibold shadow-lg transition-shadow duration-300 ease-in-out"
          onClick={onGetStarted}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          Get Started
        </motion.button>
      </motion.div>
    </>
  );
};

export default Welcome;
