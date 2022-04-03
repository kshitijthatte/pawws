import "../SinglePlaylist/styles.css";
import HorizontalVideoCard from "../SinglePlaylist/HorizontalVideoCard";

const History = () => {
  const history = [];
  return (
    <>
      <header className="header text-lg">
        <span className="material-icons text-lg">history</span>
        <span>History</span>
        <button className="btn btn-icon btn-sm btn-primary m-l-auto">
          <span className="material-icons ">delete</span>
          Clear History
        </button>
      </header>
      <div className="playist-video-container">
        {history.map(video => (
          <HorizontalVideoCard
            key={video._id}
            playlistTitle="Liked Videos"
            video={video}
          />
        ))}
      </div>
    </>
  );
};

export default History;
