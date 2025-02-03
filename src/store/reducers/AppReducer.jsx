import ActionType from "../actions/ActionType";

const initState = {
  banner: [],
  nhacTet: [],
  loading: false,
  top100: [],
  hEditorTheme: [],
  newRelease: [],
  weekChart: [],
  isQueue: false,
};

const AppReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionType.GET_HOME:
      return {
        ...state,
        banner:
          action.homeData?.find((item) => item.sectionId === "hSlider") || null,
        nhacTet:
          action.homeData?.find((item) => item.sectionId === "hSeasonTheme") ||
          null,
        top100:
          action.homeData?.find((item) => item.sectionId === "h100") || null,
        hEditorTheme:
          action.homeData?.find((item) => item.sectionId === "hEditorTheme") ||
          null,
        newRelease:
          action.homeData?.find((item) => item.sectionType === "new-release") ||
          null,
        weekChart:
          action.homeData?.find((item) => item.sectionType === "weekChart") ||
          null,
      };
    case ActionType.LOADING:
      return {
        ...state,
        loading: action.flag,
      };
    case ActionType.SET_QUEUE:
      return {
        ...state,
        isQueue: action.flag,
      };
    default:
      return state;
  }
};
export default AppReducer;
