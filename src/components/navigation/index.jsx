import search_icon from "../../assets/Search.svg";
import mail_icon from "../../assets/mail.svg";
import bell_icon from "../../assets/bell.svg";
import profile from "../../assets/Avatar.svg";
import skeleton_icon from "../../assets/Skeleton.svg";
import propTypes from "prop-types";

export default function Navigation({ navClick, windowWidth }) {
  return (
    <nav className="w-full flex items-center px-4 bg-[#ffffff] py-4">
      <div className="w-3/4 flex justify-between items-center">
        <div className="flex flex-col justify-start w-1/4">
          <h1 className="text-[#111827] font-bold text-2xl md:text-wrap max-md:text-nowrap">
            Hi Taylor
          </h1>
          <small className="text-[#718096] text-md md:text-wrap max-md:text-nowrap">
            Let&apos;s check your store today
          </small>
        </div>

        <div className="w-3/4 md:flex max-md:hidden justify-end items-center gap-x-4">
          <span className="h-5 w-5 z-10">
            <img
              src={search_icon}
              alt="search-icon"
              className="w-full h-full"
            />
          </span>
          <input
            type="text"
            placeholder="search..."
            className="rounded-xl border border-[#D9D9D9] outline-none py-2 lg:px-10 px-8 lg:-ml-[9%] md:-ml-[14%]"
          />

          <div className="flex gap-x-6 items-center">
            <span className="w-5 h-5 relative">
              <img src={mail_icon} alt="mail-icon" className="w-full h-full" />
              <span className="w-[50%] h-[50%] rounded-full absolute right-0 top-0">
                <img
                  src={skeleton_icon}
                  alt="notification"
                  className="w-full h-full"
                />
              </span>
            </span>

            <span className="w-5 h-5 relative">
              <img src={bell_icon} alt="mail-icon" className="w-full h-full" />
              <span className="w-[50%] h-[50%] rounded-full absolute right-0 top-0">
                <img
                  src={skeleton_icon}
                  alt="notification"
                  className="w-full h-full"
                />
              </span>
            </span>
          </div>
        </div>
      </div>

      <div className="w-1/4 md:flex max-md:hidden justify-center items-center md:flex-wrap gap-x-2 border-l border-l-[#EEEFF2] lg:ml-12 ml-2">
        <span className="w-10 h-10 rounded-full md:m-auto">
          <img src={profile} alt="profile-image" className="w-full h-full" />
        </span>

        <small className="text-[#111827] font-bold text-xl md:text-center">
          Tynisha Obey
        </small>
      </div>

      {windowWidth < 768 && (
        <div className="w-1/4 h-10 flex justify-center items-center">
          <button
            className="w-full h-full text-5xl bg-transparent text-[#b0b2b4] rounded-lg flex justify-center items-center"
            aria-label="toggle sidebar"
            onClick={navClick}
          >
            &equiv;
          </button>
        </div>
      )}
    </nav>
  );
}

Navigation.propTypes = {
  navClick: propTypes.func.isRequired,
  windowWidth: propTypes.number.isRequired,
};
