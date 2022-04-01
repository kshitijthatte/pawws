import { addPlaylist } from "../../services/playlistServices";

export const createNewPlaylist = async (token, playlist, playlistDspatch) => {
  try {
    const response = await addPlaylist(token, playlist);
    playlistDspatch({
      type: "SET_PLAYLISTS",
      payload: response.data.playlists,
    });
  } catch (error) {
    console.error("ERROR", error);
    return error;
  }
};
