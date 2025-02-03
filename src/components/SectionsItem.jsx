import { memo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import icons from "../Ultis/icon";

const { FaPlay, CiHeart, BsThreeDots } = icons;

const SectionsItems = ({ item }) => {
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState(false);
  const imgRef = useRef();
  // console.log(isHover);

  const handleMouseEnter = () => {
    setIsHover(true);
    imgRef.current.classList?.remove("animate-scale-down-img");
    imgRef.current.classList?.add("animate-scale-up-img");
  };

  const handleMouseLeave = () => {
    setIsHover(false);
    imgRef.current.classList?.remove("animate-scale-up-img");
    imgRef.current.classList?.add("animate-scale-down-img");
  };

  return (
    <div className="w-[20%] px-[14px]">
      <div
        className="overflow-hidden relative rounded-[5px]"
        onClick={() => navigate(item?.link?.split(".")[0])}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isHover && (
          <div className="absolute top-0 bottom-0 left-0 flex items-center justify-center gap-4 text-white right-0 z-[5] bg-darkSide rounded-[5px]">
            <span>
              <CiHeart size={25} />
            </span>
            <span className="p-2 border border-white rounded-full">
              <FaPlay size={20} />
            </span>
            <span>
              <BsThreeDots size={25} />
            </span>
          </div>
        )}
        <img
          src={item?.thumbnailM}
          className="rounded-[5px] h-auto w-full  "
          alt={item?.title || "Thumbnail"}
          ref={imgRef}
        />
      </div>
      <div className="mt-[12px]">
        <h3 className="text-[14px] text-textColor font-bold truncate leading-5">
          <span>{item?.title}</span>
        </h3>
        <h4 className="text-[14px] font-normal text-textPlaceholder leading-5">
          {item?.artists?.slice(0, 3).map((artist, index) => (
            <span key={index}>
              <a
                href={artist?.link}
                className="hover:text-purplePrimary hover:underline"
              >
                {artist?.name}
              </a>
              {index < item?.artists?.slice(0, 3).length - 1 ? ", " : ""}
            </span>
          ))}
          {item?.artists?.length > 3 && "..."}
        </h4>
      </div>
    </div>
  );
};

export default memo(SectionsItems);
