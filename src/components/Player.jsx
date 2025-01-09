import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as apis from "../apis";
import icons from "../Ultis/icon";

const {
  FaPlay,
  FaPause,
  IoMdSkipForward,
  IoMdSkipBackward,
  CiShuffle,
  CiRepeat,
  CiHeart,
  BsThreeDots,
} = icons;

function Player() {
  const { curSongID } = useSelector((state) => state.music);
  const [songInfo, setSongInfo] = useState(null);
  console.log(curSongID);
  useEffect(() => {
    const fetchSetailSong = async () => {
      const song = await apis.ApiGetDetailSong("/infosong", { id: curSongID });
      console.log(song);
      setSongInfo(song.data);
    };
    fetchSetailSong();
  }, [curSongID]);
  return (
    <div className="bg-white w-full h-full border border-solid flex items-center border-boderPlayer px-[20px]">
      <div className="w-[30%] h-full flex  items-center gap-3">
        <img
          src={songInfo?.thumbnail}
          alt="thumbnail"
          className="w-16 h-16 object-cover rounded-md"
        />
        <div className="flex flex-col">
          <span className="font-semibold text-gray-700 text-sm">
            {songInfo?.title}
          </span>
          <span className="text-xs text-gray-500">
            {songInfo?.artistsNames}
          </span>
        </div>
        <div className="flex gap-3 justify-center items-center">
          <span>
            <CiHeart size={18} />
          </span>
          <span>
            <BsThreeDots size={18} />
          </span>
        </div>
      </div>
      <div className="grow h-full flex flex-col justify-center items-center gap-4">
        <div className="flex flex-row gap-8 justify-center items-center">
          <span>
            <CiShuffle size={24} />
          </span>
          <span>
            <IoMdSkipForward size={24} />
          </span>
          <span className="p-2 border border-black rounded-full">
            <FaPlay size={18} />
          </span>
          <span>
            <IoMdSkipForward size={24} />
          </span>
          <span>
            <CiRepeat size={24} />
          </span>
        </div>
        <div>main process</div>
      </div>
      <div className="w-[30%] h-full">volume</div>
    </div>
  );
}

export default Player;
