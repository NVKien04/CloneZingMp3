import { memo } from "react";
import icons from "../Ultis/icon";
import SectionItem from "./SectionItem";
const { FaAngleRight } = icons;

const Section = ({ data }) => {
  const items = data?.items?.slice(0, 5);

  return (
    <div className="mt-[48px]">
      <div className="mt-[20px] flex items-center justify-between text-[20px] mb-[20px] text-textColor font-bold">
        <span>{data?.title}</span>
        <span className="text-[12px] font-medium flex items-center text-textPlaceholder uppercase hover:text-purplePrimary">
          <span className="mr-[10px]">Tất cả</span>
          <FaAngleRight size={18} />
        </span>
      </div>
      <div className="flex items-start justify-start mx-[-14px]">
        {items?.map((item, index) => (
          <SectionItem item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default memo(Section);
