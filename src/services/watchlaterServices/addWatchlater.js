import axios from "axios";

export const addWatchlater = (token, video) => {
  return axios.post(
    "/api/user/watchlater",
    { video },
    { headers: { authorization: token } }
  );
};
