import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLikes } from "../../contexts/likesContext";
import { isInPlaylist } from "../../helpers/isInPlaylist";
import { useAuth } from "../../contexts/authContext";
import { useWatchlater } from "../../contexts/watchlaterContext";
import PlaylistModal from "./PlaylistModal";

const VideoCard = ({ video }) => {
  const { title, thumbnail, user, views } = video;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isPlaylistModalOpen, setIsPlaylistModalOpen] = useState(false);

  const navigate = useNavigate();
  const {
    auth: { isAuthenticated },
  } = useAuth();
  const { likedVideos, addToLikedVideos, removeLikedVideos } = useLikes();
  const { watchlater, addToWatchlater, removeFromWatchlater } = useWatchlater();
  const isInLikedPlaylist = isInPlaylist(video, likedVideos);
  const isInWatchlater = isInPlaylist(video, watchlater);

  return (
    <div className="card video-card">
      <img className="card-img" src={thumbnail} />
      <div className="card-header">
        <div className="card-title" title={title}>
          {title}
        </div>
        <div className="menu-dropdown">
          <button
            className="card-menu-icon material-icons"
            onClick={() => setIsDropdownOpen(d => !d)}
          >
            more_vert
          </button>
          <div
            className="menu-dropdown-content"
            style={{ display: isDropdownOpen ? "flex" : "none" }}
          >
            {isInLikedPlaylist ? (
              <button
                className="menu-dropdown-btn text-primary"
                onClick={() => {
                  removeLikedVideos(video);
                  setIsDropdownOpen(false);
                }}
              >
                <span className="material-icons">thumb_up</span>
                Liked
              </button>
            ) : (
              <button
                className="menu-dropdown-btn"
                onClick={() => {
                  if (isAuthenticated) {
                    addToLikedVideos(video);
                    setIsDropdownOpen(false);
                  } else {
                    navigate("/login");
                  }
                }}
              >
                <span className="material-icons">thumb_up</span>
                Like
              </button>
            )}
            {isInWatchlater ? (
              <button
                className="menu-dropdown-btn text-primary"
                onClick={() => {
                  removeFromWatchlater(video);
                  setIsDropdownOpen(false);
                }}
              >
                <span className="material-icons">watch_later</span>
                Added to Watch Later
              </button>
            ) : (
              <button
                className="menu-dropdown-btn"
                onClick={() => {
                  if (isAuthenticated) {
                    addToWatchlater(video);
                    setIsDropdownOpen(false);
                  } else {
                    navigate("/login");
                  }
                }}
              >
                <span className="material-icons">watch_later</span>
                Add to Watch Later
              </button>
            )}
            <button
              className="menu-dropdown-btn"
              onClick={() => {
                setIsPlaylistModalOpen(true);
                setIsDropdownOpen(false);
              }}
            >
              <span className="material-icons">playlist_add</span>
              Add to playlist
            </button>
          </div>
        </div>
        <PlaylistModal isPlaylistModalOpen={isPlaylistModalOpen} setIsPlaylistModalOpen={setIsPlaylistModalOpen}/>
      </div>
      <div className="card-subtitle">by {user}</div>
      <div className="card-subtitle">{views} views</div>
    </div>
  );
};

export default VideoCard;
