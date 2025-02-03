import { memo } from "react";
import icons from "../Ultis/icon";

const { FaPlay } = icons;

const QueueItem = ({ data, style }) => {
  console.log(1);
  return (
    <div className={`flex ${style} rounded-[5px] w-full items-center p-[10px]`}>
      <div className="w-full flex text-left mr-[10px] items-center  gap-3">
        <div className="relative">
          {false && (
            <div
              className={`absolute top-0 bottom-0 left-0 flex items-center justify-center gap-4 text-white right-0 z-20 bg-darkSide rounded-[5px]`}
            >
              <span className="p-2 ">
                <FaPlay size={15} />
              </span>
            </div>
          )}
          <img
            src={data?.thumbnailM}
            alt="title"
            className="h-10 w-10 object-cover rounded-md"
          />
        </div>
        <span className="flex flex-col justify-center gap-1">
          <span className="text-[14px">{data?.title}</span>
          <span className="text-[12px]">{data?.artistsNames}</span>
        </span>
      </div>
    </div>
  );
};

export default memo(QueueItem);
