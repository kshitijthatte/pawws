import { useLikes } from "../../contexts/likesContext";

const HorizontalVideoCard = ({ playlistTitle, video }) => {
  const { title, thumbnail, user } = video;
  const { removeLikedVideos } = useLikes();

  const removeVideoHandler = video => {
    switch (playlistTitle) {
      case "Liked Videos":
        return removeLikedVideos(video);
      default:
        return;
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
