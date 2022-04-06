import axios from "axios";
import toast from "react-hot-toast";
import { useState, useEffect, useReducer } from "react";
import VideoCard from "./VideoCard";
import Filters from "./Filters";
import "./styles.css";
import { filterReducer } from "../../reducers/filtersReducer";
import {
  getCategoryFilteredVideos,
  getSortedVideos,
} from "../../utils/filterFunctions";

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

  const [filtersState, filtersDispatch] = useReducer(filterReducer, {
    sortBy: "POPULARITY",
    category: "ALL",
  });
  const { sortBy, category } = filtersState;

  const categoryfilteredVideos = getCategoryFilteredVideos(videos, category);
  const sortedVideos = getSortedVideos(categoryfilteredVideos, sortBy);

  return (
    <>
      <Filters filtersState={filtersState} filtersDispatch={filtersDispatch} />
      <div className="grid grid-col-4 video-grid">
        {sortedVideos.map(video => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </>
  );
};

export default Home;
