import { motion } from "framer-motion";
import Featuresbox from "./Featuresbox";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

function Features() {
  return (
    <section id="features">
      <motion.div
        className="features-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Featuresbox title="Modern Equipment" image="src/assets/1.svg" />
        <Featuresbox title="Expert Trainers" image="src/assets/2.svg" />
        <Featuresbox title="Flexible Schedule" image="src/assets/3.svg" />
        <Featuresbox title="Cardio Exercises" image="src/assets/4.svg" />
      </motion.div>
    </section>
  );
}

export default Features;
