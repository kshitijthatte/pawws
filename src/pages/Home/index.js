import axios from "axios";
import { useState, useEffect } from "react";
import VideoCard from "./VideoCard";
import Filters from "./Filters";
import "./styles.css";

const Home = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/videos");
        if (response.status === 200) {
          const data = response.data.videos;
          setVideos(data);
        }
      } catch (error) {
        console.error("ERROR", error);
      }
    })();
  }, []);

  return (
    <>
      <Filters />
      <div className="grid grid-col-4 video-grid">
        {videos.map(video => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </>
  );
};

export default Home;
