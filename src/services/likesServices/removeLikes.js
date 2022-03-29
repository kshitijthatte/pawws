import axios from "axios";

export const removeLikes = async (token, video) => {
  return await axios.delete(`/api/user/likes/${video._id}`, {
    headers: { authorization: token },
  });
};
