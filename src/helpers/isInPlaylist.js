export const isInPlaylist = (video, playlistName) => {
  return playlistName.find(playlistVideo => playlistVideo.id === video.id);
};
