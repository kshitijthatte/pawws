import { useReducer, useEffect, createContext, useContext } from "react";
import { getAllPlaylists } from "../services/playlistServices";
import { useAuth } from "./authContext";

const PlaylistContext = createContext(null);

const usePlaylist = () => useContext(PlaylistContext);

const playlistReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_PLAYLISTS":
      return { ...state, playlists: [...action.payload] };

    case "UPDATE_SINGLE_PLAYLIST":
      const { _id: playlistID } = action.payload;
      const updatedPlaylists = state.playlists.map(playlist =>
        playlist._id === playlistID ? action.payload : playlist
      );
      return { ...state, playlists: updatedPlaylists };

    default:
      return state;
  }
};

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
            playlistDspatch({ type: "UPDATE_PLAYLISTS", payload: playlists });
          }
        } catch (error) {
          console.error("ERROR", error);
        }
      })();
    } else {
      playlistDspatch({ type: "UPDATE_PLAYLISTS", payload: [] });
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
