import { useState } from "react";
import { useAuth } from "../../contexts/authContext";
import { usePlaylist } from "../../contexts/playlistContext";
import { createNewPlaylist } from "../../helpers/playlistHelper";

const PlaylistModal = ({ isPlaylistModalOpen, setIsPlaylistModalOpen }) => {
  const [showCreateNewPlaylist, setShowCreateNewPlaylist] = useState(false);
  const {
    playlistState: { playlists },
    playlistDspatch,
  } = usePlaylist();
  const { auth: { token } } = useAuth();
  const [playlistName, setPlaylistName] = useState("");

  return (
    <>
      <div
        className="modal"
        style={{ display: isPlaylistModalOpen ? "block" : "none" }}
      >
        <div className="modal-header">
          <div className="modal-title">Save to...</div>
          <button
            className="material-icons card-menu-icon"
            onClick={() => setIsPlaylistModalOpen(false)}
          >
            close
          </button>
        </div>
        {playlists.length > 0 && <hr className="divider" />}
        {playlists.map(playlist => (
          <div className="modal-input-checkbox" key={playlist._id}>
            <input
              type="checkbox"
              id={playlist.title}
              name="playlist"
              value={playlist.title}
            />
            <label htmlFor={playlist.title}>{playlist.title}</label>
          </div>
        ))}
        <hr className="divider" />
        {showCreateNewPlaylist ? (
          <>
            <div className="input-group">
              <div className="modal-header">
                <label htmlFor="name">Playlist Name</label>
                <button
                  className="material-icons card-menu-icon"
                  onClick={() => setShowCreateNewPlaylist(false)}
                >
                  arrow_back
                </button>
              </div>
              <input
                type="text"
                className="input"
                id="name"
                placeholder="Enter playlist name..."
                autoComplete="off"
                value={playlistName}
                required
                onChange={e => setPlaylistName(e.target.value)}
              />
              <button
                className="btn btn-transparent btn-sm video-card-btn"
                onClick={() => {
                  createNewPlaylist(token, playlistName, playlistDspatch);
                  setPlaylistName("");
                  setShowCreateNewPlaylist(false);
                }}
              >
                Create
              </button>
            </div>
          </>
        ) : (
          <button
            className="text-sm modal-btn"
            onClick={() => setShowCreateNewPlaylist(true)}
          >
            <span className="material-icons">add</span>Create a new playlist
          </button>
        )}
      </div>
      {isPlaylistModalOpen && (
        <div
          className="modal-scrim"
          style={{ display: "block" }}
          onClick={() => setIsPlaylistModalOpen(false)}
        ></div>
      )}
    </>
  );
};

export default PlaylistModal;
