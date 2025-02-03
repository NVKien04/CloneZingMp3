import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../store/actions";
import { useNavigate } from "react-router-dom";

function Slider() {
  const { banner } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const sliderItem = document.getElementsByClassName("slider-item");
    let first = 0;
    const interValid = setInterval(() => {
      if (sliderItem?.length > 1) {
        for (let i = 0; i < sliderItem?.length; i++) {
          if (i === first) {
            sliderItem[i].style.cssText = `display:block`;
          } else {
            sliderItem[i].style.cssText = `display:none`;
          }
        }
        sliderItem[first].classList.add("animate-slide-left");
        first += 1;
        if (first > sliderItem.length - 1) {
          first = 0;
        }
      }
    }, 5000);
    return () => {
      interValid && clearInterval(interValid);
    };
  }, []);

  const handleClickBanner = (item) => {
    if (item?.type === 1) {
      dispatch(actions.setCurSongID(item.encodeId));
      dispatch(actions.setPlaylist(null));
      dispatch(actions.setAlbum(false));
    }
    if (item?.type === 4) {
      console.log(item);
      const albumPath = item?.link?.split(".")[0];
      console.log(albumPath);
      navigate(albumPath);
    }
  };

  return (
    <div className="mt-102">
      <div className="w-full flex justify-start gap-[28px] items-center overflow-hidden">
        {banner?.items?.map((item, index) => {
          return (
            <img
              src={item.banner}
              key={index}
              onClick={() => handleClickBanner(item)}
              className="slider-item w-full h-full rounded"
            />
          );
        })}
      </div>
    </div>
  );
}

export default Slider;
