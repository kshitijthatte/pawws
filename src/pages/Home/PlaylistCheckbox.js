import { useState } from "react";
import { useAuth } from "../../contexts/authContext";
import { usePlaylist } from "../../contexts/playlistContext";
import {
  isInPlaylist,
  addVideoToPlaylist,
  removeVideoFromPlaylist,
} from "../../helpers/playlistHelper";

const PlaylistCheckbox = ({ playlist, video }) => {
  const {
    auth: { token },
  } = useAuth();
  const { playlistDspatch } = usePlaylist();
  const [isChecked, setIsChecked] = useState(
    isInPlaylist(video, playlist.videos)
  );

  const handleCheckbox = () => {
    if (isChecked) {
      removeVideoFromPlaylist(token, video, playlist, playlistDspatch);
      setIsChecked(false);
    } else {
      addVideoToPlaylist(token, video, playlist, playlistDspatch);
      setIsChecked(true);
    }
  };

  return (
    <div className="modal-input-checkbox" onClick={handleCheckbox}>
      <button className="checkbox-btn material-icons">
        {isChecked ? "check_box" : "check_box_outline_blank"}
      </button>

      <div className="label">{playlist.title}</div>
    </div>
  );
};

export default PlaylistCheckbox;
