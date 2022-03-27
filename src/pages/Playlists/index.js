import "./styles.css";
import PlaylistCard from "./PlaylistCard";

const Playlists = () => {
  const playlists = [...Array(3).keys()];
  return (
    <>
      <header className="header text-lg">
        <span className="material-icons text-lg">playlist_play</span>
        Playlists
      </header>
      <div className="grid grid-col-4 video-grid">
        {playlists.map(playlist => (
          <PlaylistCard />
        ))}
      </div>
    </>
  );
};

export default Playlists;
