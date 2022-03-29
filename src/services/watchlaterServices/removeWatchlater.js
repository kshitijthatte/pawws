import axios from "axios";

export const removeWatchlater = async (token, video) => {
  return await axios.delete(`/api/user/watchlater/${video._id}`, {
    headers: { authorization: token },
  });
};
