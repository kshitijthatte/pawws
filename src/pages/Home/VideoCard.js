import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLikes } from "../../contexts/likesContext";
import { isInPlaylist } from "../../helpers/isInPlaylist";
import { useAuth } from "../../contexts/authContext";

const VideoCard = ({ video }) => {
  const { title, thumbnail, user, views } = video;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const {
    auth: { isAuthenticated },
  } = useAuth();
  const { likedVideos, addToLikedVideos, removeLikedVideos } = useLikes();
  const isInLikedPlaylist = isInPlaylist(video, likedVideos);

  return (
    <div className="card video-card">
      <img className="card-img" src={thumbnail} />
      <div className="card-header">
        <div className="card-title">
          {title.length <= 15 ? title : title.slice(0, 12) + "..."}
        </div>
        <div className="menu-dropdown">
          <button
            className="card-menu-icon material-icons"
            onClick={() => setIsModalOpen(m => !m)}
          >
            more_vert
          </button>
          <div
            className="menu-dropdown-content"
            style={{ display: isModalOpen ? "flex" : "none" }}
          >
            {isInLikedPlaylist ? (
              <button
                className="menu-dropdown-btn text-primary"
                onClick={() => {
                  removeLikedVideos(video);
                  setIsModalOpen(false);
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
                    setIsModalOpen(false);
                  } else {
                    navigate("/login");
                  }
                }}
              >
                <span className="material-icons">thumb_up</span>
                Like
              </button>
            )}
            <button className="menu-dropdown-btn">
              <span className="material-icons">watch_later</span>
              Add to Watch Later
            </button>
            <button className="menu-dropdown-btn">
              <span className="material-icons">playlist_add</span>
              Add to playlist
            </button>
          </div>
        </div>
      </div>
      <div className="card-subtitle">by {user}</div>
      <div className="card-subtitle">{views} views</div>
    </div>
  );
};

export default VideoCard;
