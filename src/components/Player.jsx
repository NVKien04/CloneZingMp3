import React, { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as apis from "../apis";
import icons from "../Ultis/icon";
import { useDispatch } from "react-redux";
import * as action from "../store/actions";
import moment from "moment";

const {
  FaPlay,
  FaPause,
  IoMdSkipForward,
  IoMdSkipBackward,
  CiShuffle,
  CiRepeat,
  CiHeart,
  BsThreeDots,
  LuListMusic,
} = icons;

function Player() {
  const { curSongID, isPlaying, setAlbum, playlist } = useSelector(
    (state) => state.music
  );
  const { isQueue } = useSelector((state) => state.app);

  const [songInfo, setSongInfo] = useState(null);
  const [song, setSong] = useState(null);
  const audioRef = useRef(null);
  const dispatchPlaying = useDispatch();
  const [curSecond, setCurSecond] = useState();
  const thumRef = useRef(null);
  const trackref = useRef(null);
  const dispatch = useDispatch();
  const [shuffle, setShuffle] = useState();

  const intervaLid = useRef(null);

  const handleEnded = () => {
    let indexSongs = 0;
    if (playlist) {
      playlist?.forEach((element, index) => {
        if (curSongID === element?.encodeId) {
          indexSongs = index;
        }
      });
      dispatch(action.setCurSongID(playlist[indexSongs + 1].encodeId));
    }
  };

  const handleClickTrack = (e) => {
    const track = trackref.current.getBoundingClientRect().left;
    const trackWidth = trackref.current.getBoundingClientRect().width;
    const persent =
      Math.round(((e.clientX - track) * 10000) / trackWidth) / 100;

    thumRef.current.style.cssText = `right: ${100 - persent}%`;
    audioRef.current.currentTime = (persent * songInfo?.duration) / 100;
    setCurSecond(Math.round((persent * songInfo?.duration) / 100));
  };

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
      dispatchPlaying(action.setPlaying(false));
    } else {
      audioRef.current.play();
      dispatchPlaying(action.setPlaying(true));
    }
  };

  const handeleNextSong = () => {
    let indexSongs = 0;
    if (playlist) {
      playlist?.forEach((element, index) => {
        if (curSongID === element?.encodeId) {
          indexSongs = index;
        }
      });
      dispatch(action.setCurSongID(playlist[indexSongs + 1].encodeId));
    }
  };
  const handelePrevSong = () => {
    console.log(playlist);
    let indexSongs = 0;
    if (playlist) {
      playlist?.forEach((element, index) => {
        if (curSongID === element?.encodeId) {
          indexSongs = index;
          console.log(indexSongs);
        }
      });
      dispatch(action.setCurSongID(playlist[indexSongs - 1].encodeId));
    }
  };

  const handleQueue = (e) => {
    // console.log(e.target);
    dispatch(action.setQueue(true));
  };

  const handlenoQueue = (e) => {
    // console.log(e.target);
    dispatch(action.setQueue(false));
  };

  useEffect(() => {
    if (isPlaying) {
      intervaLid.current = setInterval(() => {
        let persent =
          Math.round(
            (audioRef.current.currentTime * 10000) / songInfo?.duration
          ) / 100;
        // console.log({ persen: persent, cur: audioRef.current.currentTime });
        thumRef.current.style.cssText = `right: ${100 - persent}%`;
        setCurSecond(Math.round(audioRef.current.currentTime));
      }, 200);
    } else {
      if (intervaLid.current) {
        clearInterval(intervaLid.current);
      }
    }
    return () => {
      if (intervaLid.current) {
        clearInterval(intervaLid.current);
        intervaLid.current = null;
      }
    };
  }, [isPlaying]);

  useEffect(() => {
    const fetchSetailSong = async () => {
      const songInfo = await apis.ApiGetDetailSong("/infosong", {
        id: curSongID,
      });
      console.log(songInfo);
      const song = await apis.apiGetSong("/song", { id: curSongID });
      setSongInfo(songInfo?.data);
      setSong(song?.data);
    };
    fetchSetailSong();
  }, [curSongID]);

  useEffect(() => {
    if (!audioRef.current) return;
    if (audioRef.current.paused) {
      audioRef.current.pause();
    }
    audioRef.current.src = song?.["128"];
    audioRef.current.load();

    if (isPlaying) {
      audioRef.current
        .play()
        .catch((error) => console.error("Error playing audio:", error));
    } else {
      audioRef.current.pause();
    }
  }, [song, curSongID]);
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
        <audio ref={audioRef} src={song?.["128"]} onEnded={handleEnded} />
        <div className="flex flex-row gap-8 justify-center items-center ">
          <span
            className={shuffle && "text-purplePrimary"}
            onClick={() => {
              setShuffle((prev) => !prev);
            }}
          >
            <CiShuffle size={18} />
          </span>
          <span
            onClick={handelePrevSong}
            className={
              !setAlbum ? "text-[#98989e] cursor-no-drop" : "cursor-pointer"
            }
          >
            <IoMdSkipBackward size={18} />
          </span>
          <span className="p-2 border border-black rounded-full hover:text-purplePrimary hover:border-purplePrimary ">
            {isPlaying ? (
              <FaPause size={18} onClick={togglePlay} />
            ) : (
              <FaPlay size={18} onClick={togglePlay} />
            )}
          </span>
          <span
            onClick={handeleNextSong}
            className={
              !setAlbum ? "text-[#98989e] cursor-no-drop" : "cursor-pointer"
            }
          >
            <IoMdSkipForward size={18} />
          </span>
          <span>
            <CiRepeat size={18} />
          </span>
        </div>
        <div className="w-full flex text-boderSecondary  text-xs">
          <span>
            {curSecond == undefined
              ? "00:00"
              : moment.utc(curSecond * 1000).format("mm:ss")}
          </span>
          <div
            ref={trackref}
            className="w-3/4 m-auto relative hover:h-[8px] rounded-l-full rounded-r-full  h-[5px] bg-progressbarPlayerBg   cursor-pointer"
            onClick={handleClickTrack}
          >
            <div
              ref={thumRef}
              className=" absolute rounded-l-full  top-0 left-0 bottom-0   h-full  bg-purplePrimary"
            ></div>
          </div>
          <span>{moment.utc(songInfo?.duration * 1000).format("mm:ss")}</span>
        </div>
      </div>
      <div className="w-[30%] h-full flex items-center justify-end gap-5">
        <span></span>

        {isQueue ? (
          <span
            className="text-white  cursor-pointer bg-purplePrimary rounded"
            onClick={handlenoQueue}
          >
            <LuListMusic size={25} />
          </span>
        ) : (
          <span className=" rounded cursor-pointer" onClick={handleQueue}>
            <LuListMusic size={25} />
          </span>
        )}
      </div>
    </div>
  );
}

export default Player;
