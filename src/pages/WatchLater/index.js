import HorizontalVideoCard from "../SinglePlaylist/HorizontalVideoCard";
import { useWatchlater } from "../../contexts/watchlaterContext";

const WatchLater = () => {
  const { watchlater } = useWatchlater();
  return (
    <>
      <header className="header text-lg">
        <span className="material-icons text-lg">watch_later</span>
        Watch Later
      </header>
      <p className="text-sm">{watchlater.length} videos</p>
      <div className="playist-video-container">
        {watchlater.map(video => (
          <HorizontalVideoCard
            key={video._id}
            playlistTitle="Watch Later"
            video={video}
          />
        ))}
      </div>
    </>
  );
};

export default WatchLater;
