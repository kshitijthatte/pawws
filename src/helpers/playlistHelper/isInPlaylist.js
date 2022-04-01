export const isInPlaylist = (video, playlistName) =>
  playlistName?.find(playlistVideo => playlistVideo.id === video.id);
