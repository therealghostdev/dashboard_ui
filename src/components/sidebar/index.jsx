import dashboard_icon from "../../assets/dashboard_icon.svg";
import icon1 from "../../assets/Icon.svg";
import bag_icon from "../../assets/Bag.svg";
import chart_icon from "../../assets/Chart.svg";
import user_icon from "../../assets/3-User.svg";
import document_icon from "../../assets/Document.svg";
import { Link, useLocation } from "react-router-dom";
import SubscriptionProgress from "../reusables/progress_circle";
import propTypes from "prop-types";
import profile from "../../assets/Avatar.svg";
import mail_icon from "../../assets/mail.svg";
import skeleton_icon from "../../assets/Skeleton.svg";
import search_icon from "../../assets/Search.svg";
import bell_icon from "../../assets/bell.svg";

export default function Sidebar({ isMobile, onNavItemClick }) {
  const navigate = useLocation();

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
      <div className="w-full flex flex-col h-full md:px-2 max-sm:px-6">
        <div className="w-full my-5 px-4 overflow-hidden flex-shrink-0">
          <img src={dashboard_icon} alt="dashboard-image" />
        </div>

        <div className="w-full md:hidden py-8 my-12 space-y-6">
          <div className="w-full flex justify-between items-center">
            <div className="flex items-center gap-x-4">
              <span className="w-10 h-10 rounded-full">
                <img
                  src={profile}
                  alt="profile"
                  className="w-full h-full object-cover"
                />
              </span>
              <span className="text-[#111827] font-bold text-xl">
                Tynisha Obey
              </span>
            </div>

            <div className="flex items-center gap-x-6">
              <div className="w-5 h-5 relative">
                <img src={mail_icon} alt="mail" className="w-full h-full" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5">
                  <img
                    src={skeleton_icon}
                    alt="notification"
                    className="w-full h-full"
                  />
                </span>
              </div>

              <div className="w-5 h-5 relative">
                <img
                  src={bell_icon}
                  alt="notifications"
                  className="w-full h-full"
                />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5">
                  <img
                    src={skeleton_icon}
                    alt="notification"
                    className="w-full h-full"
                  />
                </span>
              </div>
            </div>
          </div>

          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search..."
              className="w-full rounded-xl border border-[#D9D9D9] outline-none py-2 px-4 pl-10"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5">
              <img src={search_icon} alt="search" className="w-full h-full" />
            </span>
          </div>
        </div>

        {isMobile && (
          <div className="w-1/4 h-10 flex absolute right-5 top-5 justify-center items-center z-30">
            <button
              className="w-full h-full text-4xl bg-transparent text-red-500 rounded-lg flex justify-center items-center"
              aria-label="toggle sidebar"
              onClick={onNavItemClick}
            >
              &#10006;
            </button>
          </div>
        )}

        <div className="w-full flex flex-col justify-center gap-y-8 text-[#8F95B2] font-bold my-8 mb-48 flex-grow">
          {[
            { icon: icon1, text: "Dashboard", link: "/" },
            { icon: bag_icon, text: "Orders", link: "#" },
            { icon: chart_icon, text: "Analytics", link: "#" },
            { icon: user_icon, text: "Customer", link: "#" },
            { icon: document_icon, text: "Menu", link: "#" },
          ].map((item, index) => {
            const isActive = navigate.pathname === item.link;

            return (
              <button
                key={index}
                className={`w-full flex gap-x-2 px-4 py-4 hover:bg-[#6C5DD3] border-none outline-none rounded-md ${
                  isActive ? "bg-[#6C5DD3] text-[#FFFFFF]" : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  if (isMobile) {
                    onNavItemClick();
                  }
                }}
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
              </button>
            );
          })}
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
