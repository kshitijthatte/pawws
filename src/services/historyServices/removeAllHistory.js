import axios from "axios";

export const removeAllHistory = token => {
  return axios.delete("/api/user/history/all", {
    headers: { authorization: token },
  });
};
