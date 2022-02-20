import netRequest from "../../libs/request";
import { FETCH_USER } from "./actionTypes";

const URL = "https://react-ssr-api.herokuapp.com/users";

export const fetchUser = () => async (dispatch) => {
  const response = await netRequest(URL, "get");

  dispatch({
    type: FETCH_USER,
    payload: response,
  });
};
