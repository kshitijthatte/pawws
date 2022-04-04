import axios from "axios";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import VideoCard from "./VideoCard";
import Filters from "./Filters";
import "./styles.css";

const Home = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    (async () => {
      const videosLoader = toast.loading("Loading...");
      try {
        const response = await axios.get("/api/videos");
        if (response.status === 200) {
          const data = response.data.videos;
          setVideos(data);
          toast.dismiss(videosLoader);
        }
      } catch (error) {
        toast.error("Error", {
          id: videosLoader,
        });
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
