import { removePlaylist } from "../../services/playlistServices";
import { UPDATE_PLAYLISTS } from "../../reducers/constant";
import toast from "react-hot-toast";

export const deletePlaylist = async (token, playlist, playlistDspatch) => {
  try {
    const response = await removePlaylist(token, playlist);
    if (response.status === 200) {
      playlistDspatch({
        type: UPDATE_PLAYLISTS,
        payload: response.data.playlists,
      });
      toast(`Playlist ${playlist.title} deleted`);
    }
  } catch (error) {
    console.error("ERROR", error);
    toast.error("Error");
    return error;
  }
};
