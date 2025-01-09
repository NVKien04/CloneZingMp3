import AppReducer from "./AppReducer";
import MusicReducer from "./MusicReducer";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";

const commonConfig = {
  storage: storage,
  stateReconciler: autoMergeLevel2,
};

const musicConfig = {
  ...commonConfig,
  key: "music",
  whiteList: ["curSongID"],
};

const rootReducer = combineReducers({
  app: AppReducer,
  music: persistReducer(musicConfig, MusicReducer),
});
export default rootReducer;
