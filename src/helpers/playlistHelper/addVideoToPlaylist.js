import { addPlaylistVideo } from "../../services/playlistServices";
import { UPDATE_SINGLE_PLAYLIST } from "../../reducers/constant";
import toast from "react-hot-toast";

export const addVideoToPlaylist = async (
  token,
  video,
  playlist,
  playlistDspatch
) => {
  try {
    const response = await addPlaylistVideo(token, video, playlist);
    if (response.status === 201) {
      playlistDspatch({
        type: UPDATE_SINGLE_PLAYLIST,
        payload: response.data.playlist,
      });
      toast.success(`Video added to ${playlist.title}`);
    }
  } catch (error) {
    console.error("ERROR", error);
    toast.error("Error");
    return error;
  }
};
