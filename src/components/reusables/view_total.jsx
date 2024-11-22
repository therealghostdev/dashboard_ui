import React from "react";
import PropTypes from "prop-types";

const AnimatedCounter = ({ endValue, duration = 2000 }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let startTimestamp;
    const startValue = 0;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;

      if (progress < duration) {
        const nextCount = Math.min(
          startValue + (endValue - startValue) * (progress / duration),
          endValue
        );
        setCount(Math.floor(nextCount));
        requestAnimationFrame(step);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(step);
  }, [endValue, duration]);

  return count;
};

export default function ViewTotal({ icon, label, value, currency }) {
  return (
    <div className="lg:w-1/4 md:w-1/2 max-md:w-1/2 max-sm:w-full flex flex-col justify-center items-center py-3 px-4 gap-y-2 border-transparent rounded-lg shadow-lg mx-4 bg-[#F8F9FB]">
      <div className="w-full flex flex-col">
        <span className="w-10 h-10">
          <img src={icon} alt="menu-icon" />
        </span>
      </div>
      <small className="w-full text-gray-500">{label}</small>
      <h1 className="w-full text-gray-800 text-xl font-bold">
        {currency && "$"}
        <AnimatedCounter endValue={value} />
      </h1>
    </div>
  );
}

ViewTotal.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  currency: PropTypes.bool,
};
