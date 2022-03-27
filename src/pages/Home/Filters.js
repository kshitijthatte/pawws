const Filters = () => {
  return (
    <div className="filters">
      <div className="category-filter">
        <button className="btn btn-primary btn-sm btn-round">All</button>
        <button className="btn  outline-primary btn-sm btn-round">
          Cat Videos
        </button>
        <button className="btn  outline-primary btn-sm btn-round">
          Dog Videos
        </button>
      </div>
      <div className="sort-filter">
        <select name="sortBy" id="sortBy" className="dropdown">
          <option value="popularity">Popularity</option>
          <option value="latest">Latest</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
