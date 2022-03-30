import axios from "axios";

export const removeWatchlater = (token, video) => {
  return axios.delete(`/api/user/watchlater/${video._id}`, {
    headers: { authorization: token },
  });
};
