import { icon } from "@fortawesome/fontawesome-svg-core";
import icons from "../../Ultis/icon";
import { useState, useEffect } from "react";
const { RiDeleteBinLine } = icons;
import { useSelector } from "react-redux";
import * as apis from "../../apis";
import QueueItem from "../QueueItem";

const active = "shadow-shadowActive text-purplePrimary bg-white";
function SidebarRight() {
  const [isRecent, setRecent] = useState(true);

  const { curSongID, playlist } = useSelector((state) => state.music);
  const [isActive, setIsActive] = useState(false);

  console.log(playlist);

  const [songInfo, setSongInfo] = useState(null);
  const [song, setSong] = useState(null);

  const handleActive = () => {
    setIsActive((prev) => !prev);
  };

  useEffect(() => {
    const fetchSetailSong = async () => {
      const songInfo = await apis.ApiGetDetailSong("/infosong", {
        id: curSongID,
      });
      const song = await apis.apiGetSong("/song", { id: curSongID });
      // console.log(songInfo);
      setSongInfo(songInfo?.data);
      setSong(song?.data);
    };
    fetchSetailSong();
  }, [curSongID]);
  return (
    <div className="w-[330px] h-full flex flex-col bg-[#fff]">
      <div className="h-[70px] relative flex top-0 items-center justify-center py-[14px]">
        <div className="px-[8px] flex items-center w-full">
          <div className="flex rounded-full flex-1 bg-alphaBg p-[3px] text-xs">
            <div
              className={`${
                !isActive && active
              } py-[5px] cursor-pointer rounded-full  flex-grow justify-center flex items-center flex-shrink-0`}
              onClick={handleActive}
            >
              <h6>Danh sách phát</h6>
            </div>
            <div
              className={`${
                isActive && active
              } py-[5px] cursor-pointer rounded-full  flex-grow justify-center flex items-center flex-shrink-0`}
              onClick={handleActive}
            >
              <h6>Nghe gần đây</h6>
            </div>
          </div>
          <div className="flex flex-grow-0 flex-shrink-0 flex-auto">
            <button className="rounded-[50%] block bg-alphaBg text-textColor p-[8px] ml-[16px]">
              <RiDeleteBinLine />
            </button>
          </div>
        </div>
      </div>
      {!isActive ? (
        <>
          <div className="p-[8px]">
            <div>
              <QueueItem
                data={songInfo}
                style={"bg-purplePrimary text-white"}
              />
            </div>
            <div className="pt-[18px] pb-[5px] py-[8px] flex flex-col">
              <h3 className="text-sm text-textColor font-bold">Tiếp theo</h3>
              <h3 className="text-[#14141466] flex text-xs">
                <span className="mr-2">Từ playlist</span>
                <a href="#" className="text-purplePrimary">
                  Rap Vui Ngày Tết
                </a>
              </h3>
            </div>
          </div>
          <div className="overflow-hidden w-full h-full relative">
            <div className="overflow-y-scroll absolute h-full scrollbar-none">
              <div className="px-[8px] pb-[15px]">
                {playlist?.map((item, index) => (
                  <QueueItem
                    data={item}
                    style={
                      "bg-white text-textColor hover:bg-progressbarPlayerBg hover:text-purplePrimary"
                    }
                    key={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default SidebarRight;
