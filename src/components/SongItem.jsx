import moment from "moment";
import { useDispatch } from "react-redux";
import * as actions from "../store/actions";
import { memo } from "react";
const SongItem = ({ data }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(actions.setCurSongID(data?.encodeId));
    dispatch(actions.setPlaying(true));
  };
  return (
    <div
      className="w-[33.33333%]  px-[14px] hover:bg-alphaBg rounded"
      onClick={handleClick}
    >
      <div className="p-[10px] flex items-center justify-start">
        <div className="mr-[10px]">
          <figure className="h-[60px] w-[60px] ">
            <img src={data?.thumbnailM} className="object-cover rounded" />
          </figure>
        </div>
        <div className=" flex flex-col w-full truncate mr-[10px]">
          <span className="text-[14px] max-w-[100%] text-textColor overflow-hidden truncate">
            {data?.title}
          </span>
          <span className="text-[12px] text-boderSecondary">
            {data?.artistsNames}
          </span>
          <span className="text-[11px] text-boderSecondary">
            {moment.unix(data?.releaseDate).format("DD/MM/YY")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default memo(SongItem);
