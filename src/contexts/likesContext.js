import { useState, useEffect, createContext, useContext } from "react";
import toast from "react-hot-toast";
import { addLikes, getLikes, removeLikes } from "../services/likesServices";
import { useAuth } from "./authContext";

const LikesContext = createContext();

const useLikes = () => useContext(LikesContext);

const LikesProvider = ({ children }) => {
  const [likedVideos, setLikedVideos] = useState([]);
  const {
    auth: { isAuthenticated, token },
  } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      (async () => {
        try {
          const response = await getLikes(token);
          if (response.status === 200) {
            const likes = response.data.likes;
            setLikedVideos(likes);
          }
        } catch (error) {
          console.error("ERROR", error);
        }
      })();
    } else {
      setLikedVideos([]);
    }
  }, [isAuthenticated, token]);

  const addToLikedVideos = async video => {
    try {
      const response = await addLikes(token, video);
      setLikedVideos(response.data.likes);
      toast.success("Video Liked");
    } catch (error) {
      console.error("ERROR", error);
      toast.error("Error");
      return error;
    }
  };

  const removeLikedVideos = async video => {
    try {
      const response = await removeLikes(token, video);
      setLikedVideos(response.data.likes);
      toast("Removed from likes");
    } catch (error) {
      console.error("ERROR", error);
      toast.error("Error");
      return error;
    }
  };

  return (
    <LikesContext.Provider
      value={{
        likedVideos,
        setLikedVideos,
        addToLikedVideos,
        removeLikedVideos,
      }}
    >
      {children}
    </LikesContext.Provider>
  );
};

export { LikesProvider, useLikes };
