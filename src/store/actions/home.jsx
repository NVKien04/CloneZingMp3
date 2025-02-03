import ActionType from "./ActionType";
import * as apis from "../../apis";

export const getHome = () => async (dispatch) => {
  try {
    const res = await apis.getHome("/home", {});
    console.log(res);
    if (res.err === 0) {
      dispatch({
        type: ActionType.GET_HOME,
        homeData: res.data.items,
      });
    } else {
      dispatch({
        type: ActionType.GET_HOME,
        homeData: null,
      });
    }
  } catch (err) {
    dispatch({
      type: ActionType.GET_HOME,
      homeData: null,
    });
  }
};
export const setQueue = (flag) => ({
  type: ActionType.SET_QUEUE,
  flag,
});
