import { motion } from "framer-motion";

function Reveal({ children, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 1.2 }}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;