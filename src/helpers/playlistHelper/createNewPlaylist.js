import { addPlaylist } from "../../services/playlistServices";

export const createNewPlaylist = async (token, playlist, playlistDspatch) => {
  try {
    const response = await addPlaylist(token, playlist);
    if (response.status === 201) {
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
