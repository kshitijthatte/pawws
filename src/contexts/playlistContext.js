import { useReducer, useEffect, createContext, useContext } from "react";
import { getAllPlaylists } from "../services/playlistServices";
import { playlistReducer } from "../reducers/playlistReducer";
import { UPDATE_PLAYLISTS } from "../reducers/constant";
import { useAuth } from "./authContext";

const PlaylistContext = createContext(null);

const usePlaylist = () => useContext(PlaylistContext);

const PlaylistProvider = ({ children }) => {
  const {
    auth: { isAuthenticated, token },
  } = useAuth();
  const [playlistState, playlistDspatch] = useReducer(playlistReducer, {
    playlists: [],
  });

  useEffect(() => {
    if (isAuthenticated) {
      (async () => {
        try {
          const response = await getAllPlaylists(token);
          if (response.status === 200) {
            const playlists = response.data.playlists;
            playlistDspatch({ type: UPDATE_PLAYLISTS, payload: playlists });
          }
        } catch (error) {
          console.error("ERROR", error);
        }
      })();
    } else {
      playlistDspatch({ type: UPDATE_PLAYLISTS, payload: [] });
    }
  }, [isAuthenticated, token]);

  return (
    <PlaylistContext.Provider
      value={{
        playlistState,
        playlistDspatch,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};

export { PlaylistProvider, usePlaylist };
