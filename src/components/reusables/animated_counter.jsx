import React from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
import PropTypes from "prop-types";

const AnimatedCounter = ({
  value,
  formatValue = (value) => value.toLocaleString(),
  duration = 2,
  delay = 0,
  className = "",
}) => {
  const count = useMotionValue(0);

  const springValue = useSpring(count, {
    from: 0,
    to: value,
    duration: duration * 1000,
    bounce: 0,
    type: "spring",
    stiffness: 50,
    damping: 15,
  });

  const rounded = useTransform(springValue, (latest) => {
    const rounded = Math.round(latest);
    return formatValue(rounded);
  });

  React.useEffect(() => {
    springValue.set(value);
  }, [value, springValue]);

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <motion.span>{rounded}</motion.span>
    </motion.div>
  );
};

export default AnimatedCounter;

AnimatedCounter.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  formatValue: PropTypes.func,
  duration: PropTypes.number,
  delay: PropTypes.number,
  className: PropTypes.string,
};
