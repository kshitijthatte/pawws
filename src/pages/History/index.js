import "../SinglePlaylist/styles.css";
import HorizontalVideoCard from "../SinglePlaylist/HorizontalVideoCard";
import { useUserHistory } from "../../contexts/historyContext";

const History = () => {
  const { history, clearAllHistory } = useUserHistory();
  return (
    <>
      <header className="header text-lg">
        <span className="material-icons text-lg">history</span>
        <span>History</span>
        {history.length > 0 && (
          <button
            className="btn btn-icon btn-sm btn-primary m-l-auto"
            onClick={clearAllHistory}
          >
            <span className="material-icons ">delete</span>
            Clear History
          </button>
        )}
      </header>
      <div className="playist-video-container">
        {history.map(video => (
          <HorizontalVideoCard
            key={video._id}
            playlistTitle="History"
            video={video}
          />
        ))}
      </div>
    </>
  );
};

export default History;
