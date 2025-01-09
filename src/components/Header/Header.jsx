import {
  faArrowLeft,
  faArrowRight,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center justify-start mr-2.5 grow">
        <button className="flex items-center justify-center text-xl mr-5 font-medium text-textColor">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button className="flex items-center justify-center text-xl mr-5 font-medium text-textColor">
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
        <form className="relative w-[440px]">
          <div className="h-[40px] bg-alphaBg ralative rounded-20 flex items-center justify-center">
            <button className="flex items-center justify-center px-4 h-full cursor-pointer font-normal text-xl text-textPlaceholder border-none outline-none">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            <input
              className="h-full w-full py-[5px] outline-none bg-transparent text-sm text-sreachText border-none mr-2.5"
              placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
            ></input>
          </div>
        </form>
      </div>
      <div>
        <button className="px-[20px] py-[10px] bg-purplePrimary text-white text-sm font-bold rounded-100 mr-3 hover:opacity-90">
          Đăng Nhập
        </button>
        <button className="px-[20px] py-[10px] bg-alphaBg text-purplePrimary text-sm font-bold rounded-100 mr-3">
          Đăng xuất
        </button>
        <div>
          <img />
        </div>
      </div>
    </div>
  );
}

export default Header;
