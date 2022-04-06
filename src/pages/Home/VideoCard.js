import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLikes } from "../../contexts/likesContext";
import { isInPlaylist } from "../../helpers/playlistHelper";
import { useAuth } from "../../contexts/authContext";
import { useWatchlater } from "../../contexts/watchlaterContext";
import PlaylistModal from "./PlaylistModal";

const VideoCard = ({ video }) => {
  const { _id, createdAt, title, thumbnail, user, views } = video;
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

  const formatViews = views =>
    views >= 1000 ? `${Math.round((views / 1000) * 10) / 10}K` : views;

  return (
    <div className="card video-card">
      <Link className="card-img-link" to={`/watch/${_id}`}>
        <img className="card-img" src={thumbnail} />
      </Link>
      <div className="card-header">
        <Link to={`/watch/${_id}`}>
          <div className="card-title" title={title}>
            {title}
          </div>
        </Link>
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
                if (isAuthenticated) {
                  setIsPlaylistModalOpen(true);
                  setIsDropdownOpen(false);
                } else {
                  navigate("/login");
                }
              }}
            >
              <span className="material-icons">playlist_add</span>
              Add to playlist
            </button>
          </div>
        </div>
        <PlaylistModal
          isPlaylistModalOpen={isPlaylistModalOpen}
          setIsPlaylistModalOpen={setIsPlaylistModalOpen}
          video={video}
        />
      </div>
      <Link to={`/watch/${_id}`}>
        <div className="card-subtitle">by {user}</div>
        <div className="card-subtitle" title={`${views} views`}>
          {formatViews(views)} views &#8226; {createdAt.split("T")[0]}
        </div>
      </Link>
    </div>
  );
};

export default VideoCard;
