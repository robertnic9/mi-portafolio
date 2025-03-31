"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const greetings = [
  "Hello",
  "Hola",
  "Bonjour",
  "Ciao",
  "Hallo",
  "こんにちは",
  "안녕하세요",
  "Привет",
  "你好",
];

export default function HelloAnimation({ onAnimationEnd }) {
  const [index, setIndex] = useState(0);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const hasSeenAnimation = sessionStorage.getItem("hasSeenAnimation");

    if (!hasSeenAnimation) {
      setShowAnimation(true);
      sessionStorage.setItem("hasSeenAnimation", "true");
    } else {
      onAnimationEnd(); // Si ya la vio en esta sesión, saltamos la animación
    }
  }, []);

  useEffect(() => {
    if (showAnimation && index < greetings.length - 1) {
      const timeout = setTimeout(() => setIndex(index + 1), 350);
      return () => clearTimeout(timeout);
    } else if (showAnimation) {
      setTimeout(() => {
        setShowAnimation(false);
        onAnimationEnd();
      }, 1000);
    }
  }, [index, showAnimation]);

  return (
    <AnimatePresence>
      {showAnimation && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center text-6xl"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
        >
          <motion.h1
            key={greetings[index]}
            className="font-bold"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.5 }}
            style={{ color: "#FED7AA" }}
          >
            {greetings[index]}
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
