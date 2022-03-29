import axios from "axios";

export const addWatchlater = async (token, video) => {
  return await axios.post(
    "/api/user/watchlater",
    { video },
    { headers: { authorization: token } }
  );
};
