import axios from "axios";

export const getWatchlater = token => {
  return axios.get("/api/user/watchlater", {
    headers: { authorization: token },
  });
};
