import ActionType from "./ActionType";

export const setCurSongID = (sid) => ({
  type: ActionType.SET_CUR_SONG_ID,
  sid: sid,
});

export const setPlaying = (flag) => ({
  type: ActionType.PLAY,
  flag,
});

export const setAlbum = (flag) => ({
  type: ActionType.SET_ALBUM,
  flag,
});

export const setPlaylist = (songs) => ({
  type: ActionType.SET_PLAYLIST,
  songs,
});

export const setLoading = (flag) => ({
  type: ActionType.LOADING,
  flag,
});
