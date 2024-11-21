import React from "react";
import FoodItem from "../reusables/foodItem";

const FoodMenu = ({ data }) => {
  const [activeCategory, setActiveCategory] = React.useState("All Category");

  const filteredItems =
    activeCategory === "All Category"
      ? data
      : data.filter((item) => item.category === activeCategory);

  const first_two = filteredItems.slice(0, 2);
  const rest_of_item = filteredItems.slice(3);

  return (
    <div className="w-full flex flex-col px-4 py-4">
      <div className="w-full flex justify-between mb-4 border-b border-b-[#E6E8F0] items-center">
        <div className="w-2/4 flex justify-start items-center py-4">
          <h1 className="text-lg text-[#081735] font-bold">Menu</h1>
        </div>

        <nav className="flex justify-end items-baseline gap-x-4 w-2/4">
          <button
            className={`px-1 py-2 bg-transparent outline-none text-[#6C5DD3] ${
              activeCategory === "All Category"
                ? "link"
                : "hover:border-b-2 hover:text-[#6C5DD3]"
            }`}
            onClick={() => setActiveCategory("All Category")}
          >
            All Category
          </button>
          <button
            className={`px-1 py-2 bg-transparent outline-none ${
              activeCategory === "Breakfast"
                ? "link text-[#6C5DD3]"
                : "hover:border-b-2 hover:text-[#6C5DD3]"
            }`}
            onClick={() => setActiveCategory("Breakfast")}
          >
            Breakfast
          </button>
          <button
            className={`px-1 py-2 bg-transparent outline-none ${
              activeCategory === "Lunch"
                ? "link text-[#6C5DD3]"
                : "hover:border-b-2 hover:text-[#6C5DD3]"
            }`}
            onClick={() => setActiveCategory("Lunch")}
          >
            Lunch
          </button>
          <button
            className={`px-1 py-2 bg-transparent outline-none ${
              activeCategory === "Dinner"
                ? "link text-[#6C5DD3]"
                : "hover:border-b-2 hover:text-[#6C5DD3]"
            }`}
            onClick={() => setActiveCategory("Dinner")}
          >
            Dinner
          </button>
        </nav>
      </div>

      <div className="w-full min-h-[300px] flex flex-col justify-center items-center gap-y-4">
        {first_two.length > 0 ? (
          <>
            <div className="w-full flex gap-x-4">
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

            <div className="w-full flex gap-x-4">
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
            <div className="w-full h-full flex justify-center items-center">
              <h1 className="font-bold text-[#081735] text-4xl">
                No items to display.
              </h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodMenu;
