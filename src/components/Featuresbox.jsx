import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function Featuresbox({ image, title }) {
  return (
    <motion.div
      className="feature-box glow"
      variants={itemVariants}
      whileHover={{ scale: 1.06 }}
    >
      <div className="feature-box__img">
        <img src={image} alt={title} />
      </div>

      <div className="feature-box__content">
        <h3>{title}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </motion.div>
  );
}

export default Featuresbox;
