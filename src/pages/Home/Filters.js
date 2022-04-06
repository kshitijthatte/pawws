import { useState } from "react";
import { CATEGORY_CHANGE, SORT_BY, SEARCH } from "../../reducers/constant";

const Filters = ({ filtersState, filtersDispatch }) => {
  const [searchInput, setSearchInput] = useState("");
  const { category } = filtersState;

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
          value={searchInput}
          onChange={e => {
            setSearchInput(e.target.value);
            filtersDispatch({ type: SEARCH, payload: e.target.value });
          }}
        />
        <button
          className="btn btn-transparent btn-sm video-card-btn"
        >
          <span className="material-icons">search</span>
        </button>
      </div>

      <div>
        <select
          name="sortBy"
          id="sortBy"
          className="dropdown"
          onChange={e =>
            filtersDispatch({ type: SORT_BY, payload: e.target.value })
          }
        >
          <option value="POPULARITY">Popularity</option>
          <option value="LATEST">Latest</option>
          <option value="OLDEST">Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
