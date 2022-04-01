import { UPDATE_PLAYLISTS, UPDATE_SINGLE_PLAYLIST } from "./constant";

export const playlistReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_PLAYLISTS:
      return { ...state, playlists: [...action.payload] };

    case UPDATE_SINGLE_PLAYLIST:
      const { _id: playlistID } = action.payload;
      const updatedPlaylists = state.playlists.map(playlist =>
        playlist._id === playlistID ? action.payload : playlist
      );
      return { ...state, playlists: updatedPlaylists };

    default:
      return state;
  }
};
