import { setAlbum } from "../actions";
import ActionType from "../actions/ActionType";

const initState = {
  curSongID: null,
  isPlaying: false,
  setAlbum: false,
  playlist: [],
};

const MusicReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionType.SET_CUR_SONG_ID:
      return {
        ...state,
        curSongID: action.sid || null,
      };
    case ActionType.PLAY:
      return {
        ...state,
        isPlaying: action.flag,
      };

    case ActionType.SET_ALBUM:
      return {
        ...state,
        setAlbum: action.flag,
      };

    case ActionType.PLAYLIST:
      return {
        ...state,
        setAlbum: action.PLAYLIST,
      };
    case ActionType.SET_PLAYLIST:
      return {
        ...state,
        playlist: action.songs || null,
      };

    default:
      return state;
  }
};
export default MusicReducer;
