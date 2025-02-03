import { useEffect, useState } from "react";
import icons from "../Ultis/icon";
import SongItem from "./songItem";

const { FaAngleRight } = icons;

const NewRelease = ({ data }) => {
  const [newRelease, setNewrelease] = useState("all");
  const [list, setList] = useState([]);

  useEffect(() => {
    if (newRelease === "all") {
      setList(data?.items?.all);
    }
    if (newRelease === "vpop") {
      setList(data?.items?.vPop);
    }
    if (newRelease === "others") {
      setList(data?.items?.others);
    }
  }, [newRelease, list, data]);

  return (
    <div className="mt-[48px]">
      <div className="mt-[20px] flex items-center justify-between text-[20px] mb-[20px] text-textColor font-bold">
        <span>{data?.title}</span>
        <span className="text-[12px] font-medium flex items-center text-textPlaceholder uppercase hover:text-purplePrimary">
          <span className="mr-[10px]">Tất cả</span>
          <FaAngleRight size={18} />
        </span>
      </div>
      <div className="mb-[16px]">
        <button
          className={`${
            newRelease === "all" && "bg-purplePrimary text-white"
          } px-6 py-1 border progressbarPlayerBg rounded-full font-normal text-xs uppercase mr-4`}
          onClick={() => setNewrelease("all")}
        >
          Tất cả
        </button>
        <button
          className={`${
            newRelease === "vpop" && "bg-purplePrimary text-white"
          } px-6 py-1 border progressbarPlayerBg rounded-full font-normal text-xs uppercase mr-4`}
          onClick={() => setNewrelease("vpop")}
        >
          việt nam
        </button>
        <button
          className={`${
            newRelease === "others" && "bg-purplePrimary text-white"
          } px-6 py-1 border progressbarPlayerBg rounded-full font-normal text-xs uppercase mr-4`}
          onClick={() => setNewrelease("others")}
        >
          Quốc tế
        </button>
      </div>
      <div className="w-full">
        <div className="flex w-full flex-wrap mx-[-14px]">
          {list?.slice(0, 12).map((item, index) => (
            <SongItem key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewRelease;
