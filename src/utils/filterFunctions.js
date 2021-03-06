const getCategoryFilteredVideos = (videos, newCategory) => {
  if (newCategory === "ALL") return videos;
  return videos.filter(
    ({ category }) => category.toLowerCase() === newCategory.toLowerCase()
  );
};

const getSortedVideos = (videos, sortBy) => {
  if (sortBy === "LATEST")
    return [...videos].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

  if (sortBy === "OLDEST")
    return [...videos].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );

  if (sortBy === "VIEWS")
    return [...videos].sort(
      (a, b) => b.views - a.views
    );

  return videos;
};

const getSearchedVideos = (videos, searchQuery) => {
  return videos.filter(({ title }) =>
    title.toLowerCase().includes(searchQuery.toLowerCase())
  );
};
export { getSortedVideos, getCategoryFilteredVideos, getSearchedVideos };
