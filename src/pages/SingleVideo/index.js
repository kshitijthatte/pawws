import axios from "axios";
import "./styles.css";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { isInPlaylist } from "../../helpers/playlistHelper";
import { useAuth } from "../../contexts/authContext";
import { useUserHistory } from "../../contexts/historyContext";
import { useLikes } from "../../contexts/likesContext";
import PlaylistModal from "../Home/PlaylistModal";
import { useWatchlater } from "../../contexts/watchlaterContext";
import toast from "react-hot-toast";

const SingleVideo = () => {
  const { videoID } = useParams();
  const navigate = useNavigate();
  const [video, setVideo] = useState([]);
  const [isPlaylistModalOpen, setIsPlaylistModalOpen] = useState(false);
  const { history, addToHistory } = useUserHistory();
  const {
    auth: { isAuthenticated },
  } = useAuth();
  const { likedVideos, addToLikedVideos, removeLikedVideos } = useLikes();
  const { watchlater, addToWatchlater, removeFromWatchlater } = useWatchlater();

  const isInLikedPlaylist = isInPlaylist(video, likedVideos);
  const isInWatchlater = isInPlaylist(video, watchlater);

  useEffect(() => {
    (async () => {
      const videoLoader = toast.loading("Loading...");
      try {
        const response = await axios.get(`/api/video/${videoID}`);
        if (response.status === 200) {
          const data = response.data.video;
          setVideo(data);
          toast.dismiss(videoLoader);
          if (isAuthenticated && !isInPlaylist(data, history)) {
            addToHistory(data);
          }
        }
      } catch (error) {
        toast.error("Video unavailable", {
          id: videoLoader,
        });
        console.error("ERROR", error);
      }
    })();
  }, []);

  const { title, createdAt, thumbnail, src, description, views, user } = video;

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
        <div className="card-subtitle">{views} views &#8226; {createdAt?.split("T")[0]}</div>
        <div className="card-actions-right">
          <button
            className={`btn card-icon material-icons ${
              isInLikedPlaylist && "text-primary"
            }`}
            title="I like this"
            onClick={() =>
              isInLikedPlaylist
                ? removeLikedVideos(video)
                : isAuthenticated
                ? addToLikedVideos(video)
                : navigate("/login")
            }
          >
            thumb_up
          </button>
          <button
            className={`btn card-icon material-icons ${
              isInWatchlater && "text-primary"
            }`}
            title="Add to Watch Later"
            onClick={() =>
              isInWatchlater
                ? removeFromWatchlater(video)
                : isAuthenticated
                ? addToWatchlater(video)
                : navigate("/login")
            }
          >
            watch_later
          </button>
          <button
            className="btn card-icon material-icons"
            title="Save to Playlist"
            onClick={() =>
              isAuthenticated
                ? setIsPlaylistModalOpen(true)
                : navigate("/login")
            }
          >
            playlist_add
          </button>
          <PlaylistModal
            isPlaylistModalOpen={isPlaylistModalOpen}
            setIsPlaylistModalOpen={setIsPlaylistModalOpen}
            video={video}
          />
          <button className="btn card-icon material-icons" title="Share">
            share
          </button>
        </div>
      </div>
      <hr className="divider description-divider" />
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
