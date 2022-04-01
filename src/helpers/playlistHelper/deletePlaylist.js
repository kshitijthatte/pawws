import { removePlaylist } from "../../services/playlistServices";

export const deletePlaylist = async (token, video, playlistDspatch) => {
  try {
    const response = await removePlaylist(token, video);
    if (response.status === 200) {
      playlistDspatch({
        type: "UPDATE_PLAYLISTS",
        payload: response.data.playlists,
      });
    }
  } catch (error) {
    console.error("ERROR", error);
    return error;
  }
};
