import icons from "../Ultis/icon";
import List from "./List";
import moment from "moment";
import { shallowEqual, useSelector } from "react-redux";
import React, { memo } from "react";

const { TbSwitchVertical, BsDot } = icons;

function ListSong({ totalDuration }) {
  const { playlist } = useSelector((state) => state.music, shallowEqual);
  const songs = playlist;
  return (
    <div className="">
      <div className="flex w-full items-center text-xs p-[10px] font-medium text-boderSecondary">
        <div className="w-[50%] flex  text-left mr-[10px]">
          <span className="mr-[10px]">
            <TbSwitchVertical />
          </span>
          <span>BÀI HÁT</span>
        </div>
        <div className="ml-[-10px] grow shrink basis-auto">ALBUM</div>
        <div className="ml-[10px] grow-0 shrink-0 basis-auto">THỜI GIAN</div>
      </div>
      <div>
        {songs?.map((item, index) => (
          <List key={item?.encodeId || index} song={item} />
        ))}
      </div>
      <span className="mt-[16px] flex items-start text-boderSecondary text-[13px]">
        <span className="mr-[8px]">{`${songs?.length} bài hát`}</span>
        {"•"}
        <span className="ml-[8px]">
          {moment.utc(totalDuration * 1000).format("hh:mm")}
        </span>
      </span>
    </div>
  );
}

export default memo(
  ListSong,
  (prevProps, nextProps) => prevProps.totalDuration === nextProps.totalDuration
);
