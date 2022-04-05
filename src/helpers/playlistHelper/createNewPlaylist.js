import { addPlaylist } from "../../services/playlistServices";
import { UPDATE_PLAYLISTS } from "../../reducers/constant";
import toast from "react-hot-toast";

export const createNewPlaylist = async (token, playlist, playlistDspatch) => {
  try {
    const response = await addPlaylist(token, playlist);
    if (response.status === 201) {
      playlistDspatch({
        type: UPDATE_PLAYLISTS,
        payload: response.data.playlists,
      });
      toast.success(`${playlist} playlist created`);
    }
  } catch (error) {
    console.error("ERROR", error);
    toast.error("Error");
    return error;
  }
};
