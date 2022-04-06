import { CATEGORY_CHANGE, SORT_BY } from "../../reducers/constant";

const Filters = ({ filtersState, filtersDispatch }) => {
  const { sortBy, category } = filtersState;

  const isBtnActive = btnTitle =>
    category === btnTitle ? "btn-primary" : "outline-primary";

  return (
    <div className="filters">
      <div className="category-filter">
        <button
          className={`btn ${isBtnActive("ALL")} btn-sm btn-round`}
          onClick={() =>
            filtersDispatch({ type: CATEGORY_CHANGE, payload: "ALL" })
          }
        >
          All
        </button>
        <button
          className={`btn ${isBtnActive("CAT")} btn-sm btn-round`}
          onClick={() =>
            filtersDispatch({ type: CATEGORY_CHANGE, payload: "CAT" })
          }
        >
          Cat Videos
        </button>
        <button
          className={`btn ${isBtnActive("DOG")} btn-sm btn-round`}
          onClick={() =>
            filtersDispatch({ type: CATEGORY_CHANGE, payload: "DOG" })
          }
        >
          Dog Videos
        </button>
      </div>

      <div className="search-box">
        <input
          className="input"
          type="text"
          id="search"
          name="search"
          placeholder="Search Videos..."
          required
        />
        <button className="btn btn-transparent btn-sm video-card-btn">
          <span className="material-icons">search</span>
        </button>
      </div>

      <div>
        <select name="sortBy" id="sortBy" className="dropdown">
          <option value="popularity">Popularity</option>
          <option value="latest">Latest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
