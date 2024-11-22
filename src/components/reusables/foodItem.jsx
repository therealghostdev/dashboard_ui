import PropTypes from "prop-types";

const FoodItem = ({ image, name, price, servings }) => {
  return (
    <div className="relative w-full h-64 rounded-lg overflow-hidden">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-center object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center w-full px-4 bg-transparent">
        <div className="bg-white absolute bottom-8 max-md:left-1 bg-opacity-80 backdrop-blur-sm p-4 rounded-lg md:text-center w-[95%]">
          <div className="w-full flex md:justify-between md:items-center  justify-start text-nowrap max-md:flex-col gap-x-2 font-semibold">
            <h3 className="text-md text-[#1E293B]">{name}</h3>
            <p className="text-gray-700 font-medium">Price: ${price}</p>
          </div>
          <div className="w-full flex justify-start">
            <p className="text-gray-600 text-sm">{servings} served</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;

FoodItem.propTypes = {
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  servings: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};
