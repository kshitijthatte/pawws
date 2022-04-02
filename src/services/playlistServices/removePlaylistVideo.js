import axios from "axios";

export const removePlaylistVideo = (token, video, playlist) => {
  return axios.delete(`/api/user/playlists/${playlist._id}/${video._id}`, {
    headers: { authorization: token },
  });
};
