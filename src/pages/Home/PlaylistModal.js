const PlaylistModal = ({isPlaylistModalOpen, setIsPlaylistModalOpen}) => {
  return (
    <>
      <div
        className="modal"
        style={{ display: isPlaylistModalOpen ? "block" : "none" }}
      >
        <div className="modal-header">
          <div className="modal-title">Save to...</div>
          <button
            class="material-icons card-menu-icon"
            onClick={() => setIsPlaylistModalOpen(false)}
          >
            close
          </button>
        </div>
        <div className="modal-input-checkbox">
          <input type="checkbox" id="coding" name="playlist" value="coding" />
          <label for="coding">Coding</label>
        </div>
        <div className="modal-input-checkbox">
          <input type="checkbox" id="music" name="playlist" value="music" />
          <label for="music">Music</label>
        </div>
        <hr className="divider" />
        <button className="text-sm modal-btn">
          <span className="material-icons">add</span>Create a new playlist
        </button>
        <div className="modal-actions"></div>
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
