import axios from "axios";
import "./styles.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { isInPlaylist } from "../../helpers/playlistHelper";
import { useAuth } from "../../contexts/authContext";
import { useUserHistory } from "../../contexts/historyContext";

const SingleVideo = () => {
  const { videoID } = useParams();
  const [video, setVideo] = useState([]);
  const { history, addToHistory } = useUserHistory();
  const {
    auth: { isAuthenticated },
  } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`/api/video/${videoID}`);
        if (response.status === 200) {
          const data = response.data.video;
          setVideo(data);
          if (isAuthenticated && !isInPlaylist(data, history)) {
            addToHistory(data);
          }
        }
      } catch (error) {
        console.error("ERROR", error);
      }
    })();
  }, []);

  const { title, thumbnail, src, description, views, user } = video;
  return (
    <div className="card video-player-card">
      <video
        src={src}
        className="card-img"
        poster={thumbnail}
        controls
        autoPlay
      >
        Sorry, your browser doesn't support embedded videos.
      </video>

      <div className="card-title">{title}</div>
      <div className="card-actions">
        <div className="card-subtitle">{views} views</div>
        <div className="card-actions-right">
          <button className="btn card-icon material-icons">thumb_up</button>
          <button className="btn card-icon material-icons">playlist_add</button>
          <button className="btn card-icon material-icons">share</button>
        </div>
      </div>
      <hr className="divider" />
      <div className="avatar-container card-subtitle">
        <img
          className="avatar"
          src="https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049_960_720.png"
          alt={user}
        />
        <div className="avatar-details">
          <div className="avatar-title">{user}</div>
          <div className="avatar-subtitle">View Profile</div>
        </div>
      </div>
      <div className="card-description">{description}</div>
    </div>
  );
};

export default SingleVideo;
