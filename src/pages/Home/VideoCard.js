import { Link } from "react-router-dom";

const VideoCard = () => {
  return (
    <Link className="card video-card" to="/">
      <img className="card-img" src="https://picsum.photos/300/200" />
      <div className="card-title">Video Title</div>
      <div className="card-subtitle">by Video Publisher</div>
      <div className="card-subtitle">301 views</div>
    </Link>
  );
};

export default VideoCard;
