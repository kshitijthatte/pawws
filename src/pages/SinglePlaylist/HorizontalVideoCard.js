import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import { useUserHistory } from "../../contexts/historyContext";
import { useLikes } from "../../contexts/likesContext";
import { usePlaylist } from "../../contexts/playlistContext";
import { useWatchlater } from "../../contexts/watchlaterContext";
import { removeVideoFromPlaylist } from "../../helpers/playlistHelper";

const HorizontalVideoCard = ({ playlistTitle, video, playlist }) => {
  const { _id, title, thumbnail, user } = video;
  const { removeLikedVideos } = useLikes();
  const { removeFromWatchlater } = useWatchlater();
  const { removeFromHistory } = useUserHistory();
  const {
    auth: { token },
  } = useAuth();
  const { playlistDspatch } = usePlaylist();

  const removeVideoHandler = video => {
    switch (playlistTitle) {
      case "Liked Videos":
        return removeLikedVideos(video);
      case "Watch Later":
        return removeFromWatchlater(video);
      case "History":
        return removeFromHistory(video);
      default:
        return removeVideoFromPlaylist(token, video, playlist, playlistDspatch);
    }
  };

  return (
    <div className="card card-badge horizontal-video-card">
      <div className="card-horizontal">
        <Link to={`/watch/${_id}`} className="card-img-link">
          <img className="card-img" src={thumbnail} />
        </Link>
        <button
          className="btn card-icon c-badge-right material-icons"
          onClick={() => removeVideoHandler(video)}
        >
          cancel
        </button>
        <Link className="card-content" to={`/watch/${_id}`}>
          <div className="card-title">{title}</div>
          <div className="card-subtitle">by {user}</div>
        </Link>
      </div>
    </div>
  );
};

export default HorizontalVideoCard;
