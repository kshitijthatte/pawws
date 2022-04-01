import { removePlaylistVideo } from "../../services/playlistServices";
import { UPDATE_SINGLE_PLAYLIST } from "../../reducers/constant";

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
    }
  } catch (error) {
    console.error("ERROR", error);
    return error;
  }
};
