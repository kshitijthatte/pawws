import { Link } from "react-router-dom";
import { useState } from "react";

const VideoCard = ({ video }) => {
  const { title, thumbnail, user, views } = video;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Link className="card video-card" to="/">
      <img className="card-img" src={thumbnail} />
      <div className="card-header">
        <div className="card-title">
          {title.length <= 15 ? title : title.slice(0, 12) + "..."}
        </div>
        <div class="menu-dropdown">
          <button
            className="card-menu-icon material-icons"
            onClick={() => setIsModalOpen(m => !m)}
          >
            more_vert
          </button>
          <div
            class="menu-dropdown-content"
            style={{ display: isModalOpen ? "flex" : "none" }}
          >
            <button className="menu-dropdown-btn">
              <span className="material-icons">thumb_up</span>
              Like
            </button>
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
    </Link>
  );
};

export default VideoCard;
