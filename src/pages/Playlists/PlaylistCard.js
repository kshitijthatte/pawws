import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import { usePlaylist } from "../../contexts/playlistContext";
import { deletePlaylist } from "../../helpers/playlistHelper";

const PlaylistCard = ({ playlist }) => {
  const { title, videos } = playlist;
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const { playlistDspatch } = usePlaylist();
  const {
    auth: { token },
  } = useAuth();
  return (
    <div className="card video-card">
      <img className="card-img" src="./assets/images/defaultPlaylist.png" />
      <div className="card-header">
        <div>
          <div className="card-title">{title}</div>
          <div className="card-subtitle">{videos.length} videos</div>
        </div>
        <button
          className="card-menu-icon material-icons"
          onClick={() => setIsDeleteDialogOpen(true)}
        >
          delete
        </button>
      </div>

      <div
        className="modal"
        style={{ display: isDeleteDialogOpen ? "block" : "none" }}
      >
        <div className="modal-title">
          Delete playlist <strong>{title}</strong> ?
        </div>
        <div className="modal-actions">
          <button
            className="btn btn-transparent btn-sm video-card-btn"
            onClick={() => setIsDeleteDialogOpen(false)}
          >
            Cancel
          </button>
          <button
            className="btn btn-transparent btn-sm video-card-btn"
            onClick={() => {
              deletePlaylist(token, playlist, playlistDspatch);
              setIsDeleteDialogOpen(false);
            }}
          >
            Delete
          </button>
        </div>
      </div>
      {isDeleteDialogOpen && (
        <div
          className="modal-scrim"
          style={{ display: "block" }}
          onClick={() => setIsDeleteDialogOpen(false)}
        ></div>
      )}

      <Link
        className="btn btn-transparent btn-sm video-card-btn"
        to={`/playlists/${playlist._id}`}
      >
        View Full Playlist
      </Link>
    </div>
  );
};

export default PlaylistCard;
