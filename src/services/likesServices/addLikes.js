import axios from "axios";

export const addLikes = async (token, video) => {
  return await axios.post(
    "/api/user/likes",
    { video },
    { headers: { authorization: token } }
  );
};
