import { SidebarLeft } from "../../components/SidebarLeft";
import { Header } from "../../components/Header";
import Player from "../../components/Player";
import styles from "./defaultLayout.module.css";
function DefaultLayout({ children }) {
  return (
    <div
      className="w-full flex h-screen"
      style={{ height: "calc(100vh - 90px)" }}
    >
      <div className="relative w-[240px] flex-none bg-bgSidebar">
        <SidebarLeft />
      </div>
      <div className="flex-auto relative">
        <div className="relative w-full h-full overflow-hidden">
          <main
            className={`px-[59px] w-full absolute h-full overflow-y-scroll ${styles.main}`}
          >
            <header className=" h-[70px] flex items-center justify-center left-60 fixed top-0 right-0 z-50 px-paddingSection bg-white">
              <Header />
            </header>
            <div className="pt-20">{children}</div>
          </main>
        </div>
      </div>
      <div className="fixed w-full bottom-0 h-[90px]">
        <Player />
      </div>
    </div>
  );
}

export default DefaultLayout;
