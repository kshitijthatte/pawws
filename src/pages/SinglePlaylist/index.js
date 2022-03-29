import "./styles.css";
import HorizontalVideoCard from "./HorizontalVideoCard";

const SinglePlaylistPage = ({ playlistTitle }) => {
  const videos = [...Array(8).keys()];

  return (
    <>
      <header className="header text-lg">
        <span className="material-icons text-lg">
          playlist_play
        </span>
        {playlistTitle}
      </header>
      <p className="text-sm">8 videos</p>
      <div className="playist-video-container">
        {videos.map(video => (
          <HorizontalVideoCard />
        ))}
      </div>
    </>
  );
};

export default SinglePlaylistPage;
