import { Link } from "react-router-dom";
import Filters from "./Filters";
import "./styles.css";

const videos = [...Array(10).keys()];

const Home = () => {
  return (
    <>
      <Filters />
      <div className="grid grid-col-4 video-grid">
        {videos.map(video => (
          <Link className="card video-card" to="/">
            <img className="card-img" src="https://picsum.photos/300/200" />
            <div className="card-title">Video Title</div>
            <div className="card-subtitle">by Video Publisher</div>
            <div className="card-subtitle">301 views</div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
