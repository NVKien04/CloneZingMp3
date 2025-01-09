import ActionType from "../actions/ActionType";

const initState = {
  curSongID: null,
};

const MusicReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionType.SET_CUR_SONG_ID:
      return {
        ...state,
        curSongID: action.sid || null,
      };

    default:
      return state;
  }
};
export default MusicReducer;
