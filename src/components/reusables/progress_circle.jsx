import { motion } from "framer-motion";

const SubscriptionProgress = () => {
  const progress = 86;

  const size = 48;
  const strokeWidth = 4;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;

  return (
    <div className="relative w-12 h-12">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="transform -rotate-90"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#E8ECF4"
          strokeWidth={strokeWidth}
        />

        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#6C5DD3"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{
            strokeDashoffset: circumference - (progress / 100) * circumference,
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
        />
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xs font-semibold text-[#6C5DD3]">
          {progress}%
        </span>
      </div>
    </div>
  );
};

export default SubscriptionProgress;
