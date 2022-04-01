import { removePlaylist } from "../../services/playlistServices";

export const deletePlaylist = async (token, video, playlistDspatch) => {
  try {
    const response = await removePlaylist(token, video);
    playlistDspatch({
      type: "SET_PLAYLISTS",
      payload: response.data.playlists,
    });
  } catch (error) {
    console.error("ERROR", error);
    return error;
  }
};
