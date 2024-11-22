import React from "react";
import FoodItem from "../reusables/foodItem";
import PropTypes from "prop-types";

const FoodMenu = ({ data }) => {
  const [activeCategory, setActiveCategory] = React.useState("All Category");

  const filteredItems =
    activeCategory === "All Category"
      ? data
      : data.filter((item) => item.category === activeCategory);

  const first_two = React.useMemo(
    () => filteredItems.slice(0, 2),
    [filteredItems]
  );
  const rest_of_item = React.useMemo(
    () => filteredItems.slice(3),
    [filteredItems]
  );

  return (
    <div className="w-full flex flex-col px-4 py-4 overflow-y-auto">
      <div className="w-full flex flex-col justify-between mb-4 border-b border-b-[#E6E8F0]">
        <div className="w-full flex justify-start items-center py-4">
          <h1 className="text-lg text-[#081735] font-bold">Menu</h1>
        </div>

        <nav className="flex flex-wrap gap-y-2 md:flex-nowrap justify-end items-center gap-x-4 max-sm:gap-x-2 w-full">
          {["All Category", "Breakfast", "Lunch", "Dinner"].map((category) => (
            <button
              key={category}
              className={`px-1 py-2 bg-transparent outline-none ${
                activeCategory === category
                  ? "text-[#6C5DD3] border-b-2 border-[#6C5DD3]"
                  : "hover:text-[#6C5DD3]"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </nav>
      </div>

      <div className="w-full flex flex-col gap-y-6 overflow-y-auto max-h-[600px] md:max-h-[800px]">
        {first_two.length > 0 ? (
          <>
            <div className="w-full grid grid-cols-2 gap-4 md:flex md:gap-x-4">
              {first_two.map((item, index) => (
                <FoodItem
                  key={index}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  servings={item.servings}
                />
              ))}
            </div>

            <div className="w-full grid grid-cols-2 gap-4 md:flex md:gap-x-4">
              {rest_of_item.map((item, index) => (
                <FoodItem
                  key={index}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  servings={item.servings}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="w-full h-full flex justify-center items-center text-center text-gray-500">
            <h1 className="font-bold text-[#081735] text-2xl">
              No items to display.
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

FoodMenu.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
        .isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      servings: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      category: PropTypes.oneOf(["Breakfast", "Lunch", "Dinner"]).isRequired,
    })
  ).isRequired,
};

export default FoodMenu;
