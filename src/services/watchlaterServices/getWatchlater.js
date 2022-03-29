import axios from "axios";

export const getWatchlater = async token => {
  return await axios.get("/api/user/watchlater", {
    headers: { authorization: token },
  });
};
