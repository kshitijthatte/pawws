import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  const { title, thumbnail, user, views } = video;
  return (
    <Link className="card video-card" to="/">
      <img className="card-img" src={thumbnail} />
      <div className="card-title">
        {title.length <= 18 ? title : title.slice(0, 18) + "..."}
      </div>
      <div className="card-subtitle">by {user}</div>
      <div className="card-subtitle">{views} views</div>
    </Link>
  );
};

export default VideoCard;
