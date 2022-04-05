import { removePlaylistVideo } from "../../services/playlistServices";
import { UPDATE_SINGLE_PLAYLIST } from "../../reducers/constant";
import toast from "react-hot-toast";

export const removeVideoFromPlaylist = async (
  token,
  video,
  playlist,
  playlistDspatch
) => {
  try {
    const response = await removePlaylistVideo(token, video, playlist);
    if (response.status === 200) {
      playlistDspatch({
        type: UPDATE_SINGLE_PLAYLIST,
        payload: response.data.playlist,
      });
      toast(`Video removed from ${playlist.title}`);
    }
  } catch (error) {
    console.error("ERROR", error);
    toast.error("Error");
    return error;
  }
};
