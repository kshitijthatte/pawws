import { useAuth } from "../../contexts/authContext";
import { useLikes } from "../../contexts/likesContext";
import { usePlaylist } from "../../contexts/playlistContext";
import { useWatchlater } from "../../contexts/watchlaterContext";
import { removeVideoFromPlaylist } from "../../helpers/playlistHelper";

const HorizontalVideoCard = ({ playlistTitle, video, playlist }) => {
  const { title, thumbnail, user } = video;
  const { removeLikedVideos } = useLikes();
  const { removeFromWatchlater } = useWatchlater();
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
      default:
        return removeVideoFromPlaylist(token, video, playlist, playlistDspatch);
    }
  };

  return (
    <div className="card card-badge horizontal-video-card">
      <div className="card-horizontal">
        <img className="card-img" src={thumbnail} />
        <button
          className="btn card-icon c-badge-right material-icons"
          onClick={() => removeVideoHandler(video)}
        >
          cancel
        </button>
        <div className="card-content">
          <div className="card-title">{title}</div>
          <div className="card-subtitle">by {user}</div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalVideoCard;
