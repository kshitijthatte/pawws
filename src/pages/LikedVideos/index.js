import HorizontalVideoCard from "../SinglePlaylist/HorizontalVideoCard";
import { useAuth } from "../../contexts/authContext";
import { useLikes } from "../../contexts/likesContext";

const LikedVideos = () => {
  const { likedVideos } = useLikes();
  console.log(likedVideos);
  return (
    <>
      <header className="header text-lg">
        <span className="material-icons text-lg">thumb_up</span>
        Liked Videos
      </header>
      <p className="text-sm">{likedVideos.length} videos</p>
      <div className="playist-video-container">
        {likedVideos.map(video => (
          <HorizontalVideoCard />
        ))}
      </div>
    </>
  );
};

export default LikedVideos;
