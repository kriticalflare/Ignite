import axios from "axios";
import { gameDetailsUrl, gameScreenshotUrl } from "../api";

export const loadDetail = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });

  const details = await axios.get(gameDetailsUrl(id));
  const screenshots = await axios.get(gameScreenshotUrl(id));

  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: details.data,
      screen: screenshots.data,
    },
  });
};
