import axios from "axios";

export const addPlaylistVideo = (token, video, playlist) => {
  return axios.post(
    `/api/user/playlists/${playlist._id}`,
    { video },
    { headers: { authorization: token } }
  );
};
