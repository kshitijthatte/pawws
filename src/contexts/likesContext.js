import axios from "axios";
import { useState, useEffect, createContext, useContext } from "react";
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
          const response = await axios.get("/api/user/likes", {
            headers: {
              authorization: token,
            },
          });
          const likes = response.data.likes;
          setLikedVideos(likes);
        } catch (error) {
          console.error("ERROR", error);
        }
      })();
    } else {
      setLikedVideos([]);
    }
  }, [isAuthenticated, token]);
  return (
    <LikesContext.Provider value={{ likedVideos, setLikedVideos }}>
      {children}
    </LikesContext.Provider>
  );
};

export { LikesProvider, useLikes };
