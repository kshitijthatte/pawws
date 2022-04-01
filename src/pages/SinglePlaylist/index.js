import "./styles.css";
import { useParams } from "react-router-dom";
import { usePlaylist } from "../../contexts/playlistContext";
import HorizontalVideoCard from "./HorizontalVideoCard";

const SinglePlaylistPage = () => {
  const {
    playlistState: { playlists },
  } = usePlaylist();
  const { playlistID } = useParams();
  const playlist = playlists.find(playlist => playlist._id === playlistID);
  const { title, videos } = playlist;

  return (
    <>
      <header className="header text-lg">
        <span className="material-icons text-lg">playlist_play</span>
        {title}
      </header>
      <p className="text-sm">{videos.length} videos</p>
      <div className="playist-video-container">
        {videos.map(video => (
          <HorizontalVideoCard
            playlistTitle={title}
            playlist={playlist}
            key={playlistID}
            video={video}
          />
        ))}
      </div>
    </>
  );
};

export default SinglePlaylistPage;
