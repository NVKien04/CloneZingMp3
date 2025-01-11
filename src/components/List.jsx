import moment from "moment";
import icons from "../Ultis/icon";
import { useDispatch } from "react-redux";
import * as actions from "../store/actions";

const { CiMusicNote1 } = icons;
function List({ song }) {
  const dispatch = useDispatch();
  const handleClickSong = () => {
    dispatch(actions.setCurSongID(song?.encodeId));
  };
  return (
    <div
      className="flex border-b border-solid border-boderPlayer hover:bg-alphaBg rounded-[5px] w-full items-center p-[10px]"
      onClick={handleClickSong}
      key={song?.encodeId}
    >
      <div className="w-[50%] flex  text-left mr-[10px] items-center  gap-3">
        <span>
          <CiMusicNote1 />
        </span>
        <img
          src={song?.thumbnail}
          alt="title"
          className="h-10 w-10 object-cover rounded-md"
        />
        <span className="flex flex-col justify-center gap-1">
          <span className="text-[14px] text-textColor">{song?.title}</span>
          <span className="text-[12px] text-boderSecondary">
            {song?.artistsNames}
          </span>
        </span>
      </div>
      <div className="ml-[-10px] grow shrink basis-auto  text-[12px] text-boderSecondary">
        {song?.album?.title}
      </div>
      <div className="ml-[10px] grow-0 shrink-0 basis-auto text-[12px] text-boderSecondary text-center">
        {moment.utc(song?.duration * 1000).format("mm:ss")}
      </div>
    </div>
  );
}

export default List;
