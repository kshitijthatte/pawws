const getCategoryFilteredVideos = (videos, newCategory) => {
  if (newCategory === "ALL") return videos;
  return videos.filter(
    ({ category }) => category.toLowerCase() === newCategory.toLowerCase()
  );
};

const getSortedVideos = (videos, sortBy) => {
  if (sortBy === "LATEST") return videos;
  if (sortBy === "OLDEST") return videos;
  return videos;
};

export { getSortedVideos, getCategoryFilteredVideos };
