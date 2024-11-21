import { motion } from "framer-motion";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import arrow_icon from "../../assets/Arrow.svg";
import arrow_icon1 from "../../assets/Arrow1.svg";
import propTypes from "prop-types";

ChartJS.register(ArcElement, Tooltip, Legend);

const CircularProgress = ({ percentage, colors, label, border }) => {
  const progress = percentage;

  const size = 48;
  const strokeWidth = 4;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  return (
    <div className="flex md:flex-row flex-col items-center w-full gap-x-2 flex-wrap">
      <div className="relative w-12 h-12">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: border,
          }}
        />

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
            stroke={border}
            strokeWidth={strokeWidth}
          />

          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={colors[0]}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{
              strokeDashoffset:
                circumference - (progress / 100) * circumference,
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
          />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center w-full">
          <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
            <img
              src={label.includes("Daily") ? arrow_icon1 : arrow_icon}
              alt="arrow"
              className="w-3/4 h-full"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center md:justify-start justify-center">
          <span className="text-lg font-semibold" style={{ color: colors[0] }}>
            +{percentage}%
          </span>
        </div>
        <span className="text-sm text-gray-500 text-ellipsis text-nowrap">{label}</span>
      </div>
    </div>
  );
};

export default CircularProgress;

CircularProgress.propTypes = {
  percentage: propTypes.number.isRequired,
  colors: propTypes.array.isRequired,
  label: propTypes.string.isRequired,
  border: propTypes.string.isRequired,
};
