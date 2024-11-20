import search_icon from "../../assets/Search.svg";
import mail_icon from "../../assets/mail.svg";
import bell_icon from "../../assets/bell.svg";
import profile from "../../assets/Avatar.svg";
import skeleton_icon from "../../assets/Skeleton.svg";

export default function Navigation() {
  return (
    <nav className="w-full flex items-center px-4 bg-[#ffffff] py-4">
      <div className="w-3/4 flex justify-between items-center">
        <div className="flex flex-col justify-start w-1/4">
          <h1 className="text-[#111827] font-bold text-2xl">Hi Taylor</h1>
          <small className="text-[#718096] text-md">
            Let&apos;s check your store today
          </small>
        </div>

        <div className="w-3/4 flex justify-end items-center gap-x-4">
          <span className="h-5 w-5 z-10">
            <img src={search_icon} alt="searc-icon" className="w-full h-full" />
          </span>
          <input
            type="text"
            placeholder="search..."
            className="rounded-xl border border-[#D9D9D9] outline-none py-2 px-10 -ml-[8%]"
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

      <div className="w-1/4 flex justify-center items-center gap-x-2 border-l border-l-[#EEEFF2] ml-12">
        <span className="w-10 h-10 rounded-full">
          <img src={profile} alt="profile-image" className="w-full h-full" />
        </span>

        <small className="text-[#111827] font-bold text-xl">Tynisha Obey</small>
      </div>
    </nav>
  );
}
