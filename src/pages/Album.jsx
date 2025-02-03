import { useParams } from "react-router-dom";
import * as apis from "../apis";
import { useEffect, useState } from "react";
import moment from "moment";
import ListSong from "../components/ListSong";
import { useDispatch } from "react-redux";
import * as actions from "../store/actions";

function Album() {
  const { pid } = useParams();
  const [playlistData, setPlaylistData] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchDetailAlbum = async () => {
      dispatch(actions.setLoading(true));
      const detailAlbum = await apis.apiGetDetailPlaylist("/detailplaylist", {
        id: pid,
      });
      dispatch(actions.setLoading(false));
      if (detailAlbum?.err === 0) {
        setPlaylistData(detailAlbum?.data);
        dispatch(actions.setPlaylist(detailAlbum?.data?.song?.items));
      }
    };
    fetchDetailAlbum();
  }, []);

  return (
    <div className="flex gap-8 w-full pt-20 mt-[70px]">
      <div className="flex flex-col items-center gap-1 flex-none w-1/5  ">
        <img
          src={playlistData?.thumbnailM}
          alt="thumbnailM"
          className="w-full object-contain rounded-md shadow-md"
        />
        <h3 className="text-[20px] font-bold flex text-center">
          {playlistData?.title}
        </h3>
        <span className="flex gap-2 items-center text-xs text-boderSecondary">
          <span>Cập nhật</span>
          <span>
            {moment.unix(playlistData?.contentLastUpdate).format("DD/MM/YY")}
          </span>
        </span>
        <span className="text-xs text-center text-boderSecondary">
          {playlistData?.artistsNames}
        </span>
        <span className="text-xs text-boderSecondary">{`${Math.floor(
          playlistData?.like / 1000
        )}k người yêu thích`}</span>
      </div>
      <div className="flex-auto ">
        <div className="text-sm text-textColor mb-[10px] font-normal">
          <span className="text-boderSecondary mr-2">Lời tựa</span>
          <span>{playlistData?.description}</span>
        </div>
        <ListSong totalDuration={playlistData?.song?.totalDuration} />
      </div>
    </div>
  );
}

export default Album;
