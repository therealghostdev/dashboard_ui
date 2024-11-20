import dashboard_icon from "../../assets/dashboard_icon.svg";
import icon1 from "../../assets/Icon.svg";
import bag_icon from "../../assets/Bag.svg";
import chart_icon from "../../assets/Chart.svg";
import user_icon from "../../assets/3-User.svg";
import document_icon from "../../assets/Document.svg";
import { Link } from "react-router-dom";
import SubscriptionProgress from "../reusables/progress_circle";

export default function Sidebar() {
  return (
    <nav className="w-[18%] absolute top-0 left-0 min-h-[150vh] bg-[#ffffff] py-6 px-4 overflow-y-auto">
      <div className="w-full h-full flex flex-col justify-between px-4 gap-y-12">
        <div className="w-full my-5 px-4 overflow-hidden">
          <img src={dashboard_icon} alt="dashboard-image" />
        </div>

        <div className="w-full flex flex-col justify-center gap-y-8 text-[#8F95B2] font-bold my-8 mb-48">
          <div className="w-full flex gap-x-2 px-4 py-2 hover:bg-[#6C5DD3] rounded-md bg-[#6C5DD3]">
            <span className="w-6 h-6">
              <img src={icon1} alt="dashboard" className="w-full h-full" />
            </span>
            <Link to="#" className="">
              Dashboard
            </Link>
          </div>

          <div className="w-full flex gap-x-2 px-4 py-2 hover:bg-[#6C5DD3] rounded-md">
            <span className="w-6 h-6">
              <img src={bag_icon} alt="dashboard" className="w-full h-full" />
            </span>
            <Link to="#" className="">
              Orders
            </Link>
          </div>

          <div className="w-full flex gap-x-2 px-4 py-2 hover:bg-[#6C5DD3] rounded-md">
            <span className="w-6 h-6">
              <img src={chart_icon} alt="analytics" className="w-full h-full" />
            </span>
            <Link to="#" className="">
              Analytics
            </Link>
          </div>

          <div className="w-full flex gap-x-2 px-4 py-2 hover:bg-[#6C5DD3] rounded-md">
            <span className="w-6 h-6">
              <img src={user_icon} alt="customer" className="w-full h-full" />
            </span>
            <Link to="#" className="">
              Customer
            </Link>
          </div>

          <div className="w-full flex gap-x-2 px-4 py-2 hover:bg-[#6C5DD3] rounded-md">
            <span className="w-6 h-6">
              <img src={document_icon} alt="menu" className="w-full h-full" />
            </span>
            <Link to="#" className="">
              menu
            </Link>
          </div>
        </div>

        <div className="w-full flex flex-col bg-[#F8F9FB] rounded-md gap-y-6 py-6 px-4 relative mt-8">
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
