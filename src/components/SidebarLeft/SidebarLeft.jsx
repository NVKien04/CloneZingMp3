import image from "../../assets";
import { NavLink } from "react-router-dom";
import sidebarMenu from "./sidebarMenu";
import { useNavigate } from "react-router-dom";

const Active =
  "flex items-center px-[21px] py-[12px] text-sm bg-alphaBg border-l-2 border-purplePrimary border-solid text-purplePrimary font-bold leading-5";
const noActive =
  "flex items-center px-[21px] py-[12px] text-sm text-textColor hover:text-purplePrimary font-medium leading-5";

function SidebarLeft() {
  const navigateHome = useNavigate();

  const gotoHome = () => {
    navigateHome("/");
  };
  return (
    <div className=" flex flex-col">
      <div className="w-full h-[70px]  px-[25px] flex justify-start items-center">
        <img
          className="w-[120px] h-auto object-cover cursor-pointer"
          src={image.logo}
          alt="logo"
          onClick={gotoHome}
        />
      </div>
      <div className="flex flex-col">
        {sidebarMenu.map((nav, index) => (
          <NavLink
            key={index}
            to={nav.path}
            className={({ isActive }) => {
              return isActive ? Active : noActive;
            }}
          >
            <div className="mr-3">{nav.icon()}</div>
            <span>{nav.title}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default SidebarLeft;
