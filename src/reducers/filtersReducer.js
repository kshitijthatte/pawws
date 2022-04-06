import { SORT_BY, CATEGORY_CHANGE, SEARCH } from "./constant";

export const filterReducer = (state, action) => {
  switch (action.type) {
    case SORT_BY:
      return { ...state, sortBy: action.payload };

    case CATEGORY_CHANGE:
      return { ...state, category: action.payload };

    case SEARCH:
      return { ...state, searchQuery: action.payload };

    default:
      throw new Error();
  }
};
