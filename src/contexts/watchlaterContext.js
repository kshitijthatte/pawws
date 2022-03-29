import { useState, useEffect, createContext, useContext } from "react";
import {
  addWatchlater,
  getWatchlater,
  removeWatchlater,
} from "../services/watchlaterServices";
import { useAuth } from "./authContext";

const WatchlaterContext = createContext();

const useWatchlater = () => useContext(WatchlaterContext);

const WatchlaterProvider = ({ children }) => {
  const [watchlater, setWatchlater] = useState([]);
  const {
    auth: { isAuthenticated, token },
  } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      (async () => {
        try {
          const response = await getWatchlater(token);
          if (response.status === 200) {
            const watchlater = response.data.watchlater;
            setWatchlater(watchlater);
          }
        } catch (error) {
          console.error("ERROR", error);
          console.log(error.message);
        }
      })();
    } else {
      setWatchlater([]);
    }
  }, [isAuthenticated, token]);

  const addToWatchlater = async video => {
    try {
      const response = await addWatchlater(token, video);
      setWatchlater(response.data.watchlater);
    } catch (error) {
      console.error("ERROR", error);
      return error;
    }
  };

  const removeFromWatchlater = async video => {
    try {
      const response = await removeWatchlater(token, video);
      setWatchlater(response.data.watchlater);
    } catch (error) {
      console.error("ERROR", error);
      return error;
    }
  };

  return (
    <WatchlaterContext.Provider
      value={{
        watchlater,
        setWatchlater,
        addToWatchlater,
        removeFromWatchlater,
      }}
    >
      {children}
    </WatchlaterContext.Provider>
  );
};

export { WatchlaterProvider, useWatchlater };
