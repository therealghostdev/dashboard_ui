import Sidebar from "../../components/sidebar";
import Navigation from "../../components/navigation";
import Main from "../../components/main";

export default function Index() {
  return (
    <section className="flex flex-col w-full">
      <div className="w-full flex">
        <div className="w-[18%] overflow-y-auto">
          <Sidebar />
        </div>
        <div className="w-[82%]">
          <Navigation />
          <div className="w-[100%] min-h-[100vh]">
            <Main />
          </div>
        </div>
      </div>
    </section>
  );
}
