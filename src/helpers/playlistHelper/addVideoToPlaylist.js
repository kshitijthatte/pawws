import { addPlaylistVideo } from "../../services/playlistServices";
import { UPDATE_SINGLE_PLAYLIST } from "../../reducers/constant";

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
    }
  } catch (error) {
    console.error("ERROR", error);
    return error;
  }
};
