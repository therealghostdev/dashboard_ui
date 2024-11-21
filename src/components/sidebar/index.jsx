import dashboard_icon from "../../assets/dashboard_icon.svg";
import icon1 from "../../assets/Icon.svg";
import bag_icon from "../../assets/Bag.svg";
import chart_icon from "../../assets/Chart.svg";
import user_icon from "../../assets/3-User.svg";
import document_icon from "../../assets/Document.svg";
import { Link } from "react-router-dom";
import SubscriptionProgress from "../reusables/progress_circle";
import propTypes from "prop-types";

export default function Sidebar({ isMobile, onNavItemClick }) {
  return (
    <nav
      className={`
      w-full 
      fixed 
      md:static 
      top-0 
      left-0 
      md:min-h-screen
      md:h-auto
      h-screen  
      bg-[#ffffff] 
      py-6 
      lg:px-4 
      ${isMobile ? "z-20 overflow-y-scroll" : "z-0"}
    `}
    >
      <div className="w-full flex flex-col h-full">
        <div className="w-full my-5 px-4 overflow-hidden flex-shrink-0">
          <img src={dashboard_icon} alt="dashboard-image" />
        </div>

        {isMobile && (
          <div className="w-1/4 h-10 flex absolute right-5 top-0 justify-center items-center z-30">
            <button
              className="w-full h-full text-4xl bg-[#F8F9FB] rounded-lg flex justify-center items-center"
              aria-label="toggle sidebar"
              onClick={onNavItemClick}
            >
              &#10006;
            </button>
          </div>
        )}

        <div className="w-full flex flex-col justify-center gap-y-8 text-[#8F95B2] font-bold my-8 mb-48 flex-grow">
          {[
            { icon: icon1, text: "Dashboard", link: "#" },
            { icon: bag_icon, text: "Orders", link: "#" },
            { icon: chart_icon, text: "Analytics", link: "#" },
            { icon: user_icon, text: "Customer", link: "#" },
            { icon: document_icon, text: "Menu", link: "#" },
          ].map((item, index) => (
            <div
              key={index}
              className="w-full flex gap-x-2 px-4 py-2 hover:bg-[#6C5DD3] rounded-md"
              onClick={onNavItemClick}
            >
              <span className="w-6 h-6">
                <img
                  src={item.icon}
                  alt={item.text}
                  className="w-full h-full"
                />
              </span>
              <Link to={item.link} className="">
                {item.text}
              </Link>
            </div>
          ))}
        </div>

        <div className="w-full flex flex-col bg-[#F8F9FB] rounded-md gap-y-6 py-6 px-4 relative mt-8 flex-shrink-0">
          <div className="flex flex-col justify-start gap-y-4">
            <SubscriptionProgress />

            <span>
              <p className="font-bold text-[#272D37]">Subscription Plan</p>
              <small className="text-[#5F6D7E]">
                Your Subscription plan will expire soon please upgrade!
              </small>
            </span>

            <div className="w-full flex">
              <button className="bg-transparent text-[#6C5DD3]">Upgrade</button>
            </div>

            <button className="absolute top-0 right-0 text-xl font-normal">
              &#x2715;
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

Sidebar.propTypes = {
  isMobile: propTypes.bool.isRequired,
  onNavItemClick: propTypes.func.isRequired,
};
