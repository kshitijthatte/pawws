import { Link } from "react-router-dom";
import "./styles.css";

const videos = [...Array(10).keys()];

const Home = () => {
  return (
    <>
      <div className="category-filter">
        <button class="btn btn-primary btn-sm btn-round">All</button>
        <button class="btn  outline-primary btn-sm btn-round">
          Cat Videos
        </button>
        <button class="btn  outline-primary btn-sm btn-round">
          Dog Videos
        </button>
      </div>
      <div class="grid grid-col-4 video-grid">
        {videos.map(video => (
          <Link class="card video-card" to="/">
            <img class="card-img" src="https://picsum.photos/300/200" />
            <div class="card-title">Video Title</div>
            <div class="card-subtitle">by Video Publisher</div>
            <div class="card-subtitle">301 views</div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
