import Sidebar from "../../components/sidebar";
import Navigation from "../../components/navigation";
import Main from "../../components/main";
import React from "react";

export default function Index() {
  const [showSideBar, setShowSidebar] = React.useState(false);
  const [windowWidth, setWindWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => setWindWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavBtnClick = () => {
    setShowSidebar(!showSideBar);
  };

  const handleNavItemClick = () => {
    if (windowWidth < 768) {
      setShowSidebar(false);
    }
  };

  return (
    <section className="flex flex-col w-full">
      <div className="w-full flex">
        {(showSideBar || windowWidth >= 768) && (
          <div
            className="md:w-[18%] lg:w-[18%] h-auto max-h-screen fixed 
            max-md:fixed max-md:top-0 max-md:left-0 max-md:w-screen 
            max-md:z-20 overflow-y-auto bg-red-500"
          >
            <Sidebar
              isMobile={windowWidth < 768}
              onNavItemClick={handleNavItemClick}
            />
          </div>
        )}

        <div
          className={`${
            windowWidth >= 1024
              ? "lg:pl-[18%]"
              : windowWidth >= 768
              ? "md:pl-[18%]"
              : "w-full"
          } transition-all`}
        >
          <Navigation navClick={handleNavBtnClick} windowWidth={windowWidth} />
          <div className="w-full min-h-screen">
            <Main />
          </div>
        </div>
      </div>
    </section>
  );
}
