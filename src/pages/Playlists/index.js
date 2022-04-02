import "./styles.css";
import PlaylistCard from "./PlaylistCard";
import { usePlaylist } from "../../contexts/playlistContext";

const Playlists = () => {
  const {
    playlistState: { playlists },
  } = usePlaylist();
  return (
    <>
      <header className="header text-lg">
        <span className="material-icons text-lg">playlist_play</span>
        Playlists
      </header>
      <div className="grid grid-col-4 video-grid">
        {playlists.map(playlist => (
          <PlaylistCard playlist={playlist} key={playlist._id} />
        ))}
      </div>
    </>
  );
};

export default Playlists;
