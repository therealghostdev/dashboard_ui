import PropTypes from "prop-types";
import AnimatedCounter from "./animated_counter";

export default function ViewTotal({ icon, label, value, currency }) {
  return (
    <div className="lg:w-1/4 md:w-[42%] max-md:w-[40%] max-sm:w-[39.5%] flex flex-col justify-center items-center py-3 px-4 gap-y-2 border-transparent rounded-lg shadow-shadow1 mx-4 bg-[#F8F9FB]">
      <div className="w-full flex flex-col">
        <span className="w-10 h-10">
          <img src={icon} alt="menu-icon" />
        </span>
      </div>
      <small className="w-full text-gray-500">{label}</small>
      <h1 className="w-full text-gray-800 text-xl font-bold flex">
        {currency && <span className="mr-1">$</span>}
        <AnimatedCounter
          value={value}
          formatValue={(value) => `${value.toLocaleString()}`}
          duration={5}
          className="flex"
        />
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
