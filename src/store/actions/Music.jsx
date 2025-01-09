import ActionType from "./ActionType";

export const setCurSongID = (sid) => ({
  type: ActionType.SET_CUR_SONG_ID,
  sid: sid,
});
