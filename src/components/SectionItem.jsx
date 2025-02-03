import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import icons from "../Ultis/icon";

const { FaPlay, CiHeart, BsThreeDots } = icons;

const SectionItem = ({ item }) => {
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState(false);

  const imgRef = useRef();

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
    <div className="w-[20%] px-[14px] ">
      <div
        className="overflow-hidden relative rounded-[5px]"
        onClick={() => navigate(item?.link?.split(".")[0])}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isHover && (
          <div className="absolute top-0 bottom-0 left-0 flex items-center justify-center gap-4 text-white right-0 z-20 bg-darkSide rounded-[5px]">
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
          className="rounded-[5px] h-auto w-full "
          ref={imgRef}
        />
      </div>
      <div className="mt-[12px]">
        <h3 className="text-[14px] text-textPlaceholder font-normal leading-5">
          <span>{item?.sortDescription}</span>
        </h3>
      </div>
    </div>
  );
};

export default memo(SectionItem);
