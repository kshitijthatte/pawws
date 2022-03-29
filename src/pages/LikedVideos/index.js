import "../SinglePlaylist/styles.css";
import HorizontalVideoCard from "../SinglePlaylist/HorizontalVideoCard";
import { useLikes } from "../../contexts/likesContext";

const LikedVideos = () => {
  const { likedVideos } = useLikes();
  return (
    <>
      <header className="header text-lg">
        <span className="material-icons text-lg">thumb_up</span>
        Liked Videos
      </header>
      <p className="text-sm">{likedVideos.length} videos</p>
      <div className="playist-video-container">
        {likedVideos.map(video => (
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

export default LikedVideos;
