import React from "react";
import Sidebar from "../../components/sidebar";
import Navigation from "../../components/navigation";
import Main from "../../components/main";

export default function Index() {
  const [showSideBar, setShowSidebar] = React.useState(false);
  const [windowWidth, setWindowWidth] = React.useState(
    typeof window !== "undefined" ? window.innerWidth : 768
  );

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
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
    <section className="relative w-full min-h-screen overflow-x-hidden">
      {showSideBar && windowWidth < 768 && (
        <div
          className="fixed inset-0 bg-black/50 z-30 transition-opacity duration-300"
          onClick={handleNavItemClick}
        />
      )}

      <div className="flex w-full">
        <div
          className={`
            fixed top-0 left-0 h-screen z-40
            md:w-[18%] 
            max-md:w-[95%]
            transition-transform duration-300 ease-in-out
            ${
              showSideBar || windowWidth >= 768
                ? "translate-x-0"
                : "-translate-x-full"
            }
            bg-white shadow-lg
            overflow-y-auto
          `}
        >
          <Sidebar
            isMobile={windowWidth < 768}
            onNavItemClick={handleNavItemClick}
          />
        </div>

        <div
          className={`
            flex-1 transition-all duration-300
            ${
              windowWidth >= 1024
                ? "lg:pl-[18%]"
                : windowWidth >= 768
                ? "md:pl-[18%]"
                : "w-full"
            }
          `}
        >
          <Navigation navClick={handleNavBtnClick} windowWidth={windowWidth} />
          <main className="w-full min-h-screen">
            <Main />
          </main>
        </div>
      </div>
    </section>
  );
}
