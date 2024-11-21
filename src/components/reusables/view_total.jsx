import propTypes from "prop-types";

export default function View_total({ icon, label, value, currency }) {
  return (
    <div className="lg:w-1/4 md:w-[42%] max-md:w-[40%] max-sm:w-[39.5%] flex flex-col justify-center items-center py-3 px-4 gap-y-2 border-transparent rounded-lg shadow-shadow1 mx-4 bg-[#F8F9FB]">
      <div className="w-full flex flex-col">
        <span className="w-10 h-10">
          <img src={icon} alt="menu-icon" />
        </span>
      </div>

      <small className="w-full text-[#64748B]">{label}</small>

      <h1 className="w-full text-[#1E293B] text-xl font-bold">
        {currency && "$"}
        {value}
      </h1>
    </div>
  );
}

View_total.propTypes = {
  icon: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  value: propTypes.number.isRequired,
  currency: propTypes.bool,
};
