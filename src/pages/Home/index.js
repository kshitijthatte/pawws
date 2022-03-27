import VideoCard from "./VideoCard";
import Filters from "./Filters";
import "./styles.css";

const videos = [...Array(10).keys()];

const Home = () => {
  return (
    <>
      <Filters />
      <div className="grid grid-col-4 video-grid">
        {videos.map(video => (
         <VideoCard />
        ))}
      </div>
    </>
  );
};

export default Home;
