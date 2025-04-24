"use client";
import { useState } from "react";
import { motion, Variants } from "framer-motion";

const notifications = [
  {
    icon: "🦒",
    title: "RoughGiraffe24",
    text: "Looking for a no commitment good time.",
  },
  {
    icon: "🐘",
    title: "ElegantElephant75",
    text: "Enjoys candlelit dinners and genuine conversation.",
  },
  {
    icon: "👽",
    title: "WickedAlien95",
    text: "Seeking an out-of-this-world adventure partner.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 80 } },
};

const formVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: notifications.length * 0.5 + 0.5 },
  },
};

export default function SplashPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle waitlist sign-up logic
    alert(`Thanks for signing up, ${email}!`);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <motion.div
        className="space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {notifications.map((note, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="bg-white rounded-lg shadow-lg flex items-center p-4 space-x-4 max-w-md"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-100 text-2xl">
              {note.icon}
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-bold text-gray-900">{note.title}</h3>
              <p className="text-gray-800">{note.text}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.form
        className="mt-12 bg-white bg-opacity-90 backdrop-blur-md rounded-xl p-8 shadow-lg flex flex-col items-center w-full max-w-sm"
        variants={formVariants}
        initial="hidden"
        animate="visible"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Join the Waitlist
        </h2>
        <input
          type="email"
          required
          placeholder="Enter your email"
          className="w-full p-3 rounded-md border border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="w-full p-3 bg-indigo-600 text-white rounded-md font-semibold hover:bg-indigo-700 transition"
        >
          Sign Up
        </button>
      </motion.form>
    </div>
  );
}
