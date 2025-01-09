import icons from "../Ultis/icon";
import List from "./List";

const { TbSwitchVertical } = icons;

function ListSong({ songs, totalDuration }) {
  console.log(songs, totalDuration);
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
      <div className="">
        {songs?.map((item, index) => (
          <List song={item} />
        ))}
      </div>
    </div>
  );
}

export default ListSong;
