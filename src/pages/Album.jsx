import { useParams } from "react-router-dom";
import * as apis from "../apis";
import { useEffect, useState } from "react";
import moment from "moment";
import ListSong from "../components/ListSong";
import List from "../components/List";

function Album() {
  const { title, pid } = useParams();
  console.log({ title, pid });
  const [playlistData, setPlaylistData] = useState({});

  useEffect(() => {
    const fetchDetailAlbum = async () => {
      const detailAlbum = await apis.apiGetDetailPlaylist("/detailplaylist", {
        id: pid,
      });
      console.log({ dataAlbum: detailAlbum });
      if (detailAlbum?.err === 0) {
        setPlaylistData(detailAlbum?.data);
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
        <h3 className="text-[20px] font-bold">{playlistData?.title}</h3>
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
        <div className="flex items-center text-sm text-textColor overflow-hidden text-ellipsis mb-[10px] text font-normal">
          <span className="text-boderSecondary mr-2">Lời tựa </span>
          <span>{playlistData?.description}</span>
        </div>
        <ListSong
          songs={playlistData?.song?.items}
          totalDuration={playlistData?.song?.totalDuration}
        />
      </div>
    </div>
  );
}

export default Album;
