import { SidebarLeft } from "../../components/SidebarLeft";
import { SidebarRight } from "../../components/SidebarRight";
import { Header } from "../../components/Header";
import Player from "../../components/Player";
import styles from "./defaultLayout.module.css";
import Loading from "../../components/Loading";
import { useSelector } from "react-redux";
function DefaultLayout({ children }) {
  const { loading, isQueue } = useSelector((state) => state.app);
  // console.log(loading);
  return (
    <div
      className="w-full flex h-screen"
      style={{ height: "calc(100vh - 90px)" }}
    >
      <div className="relative w-[240px] flex-none bg-bgSidebar">
        <SidebarLeft />
      </div>
      <div className="flex-auto relative">
        {loading && (
          <div className="absolute top-0 bottom-0 right-0 z-50 left-0 bg-white h-full flex items-center justify-center">
            <Loading />
          </div>
        )}
        <div className="relative w-full h-full overflow-hidden">
          <main
            className={`px-[59px] w-full absolute h-full overflow-y-scroll ${styles.main}`}
          >
            <header className=" h-[70px] flex items-center justify-center left-60 fixed top-0 right-0 z-10 px-paddingSection bg-white">
              <Header />
            </header>

            <div className="pt-20">{children}</div>
          </main>
        </div>
      </div>
      {isQueue && (
        <div className="w-[330px] bg-[#fff] shadow-shadowQueue fixed top-0 bottom-[90px] right-0 z-20 border-none">
          <SidebarRight />
        </div>
      )}
      <div className="fixed w-full z-30 bottom-0 h-[90px]">
        <Player />
      </div>
    </div>
  );
}

export default DefaultLayout;
