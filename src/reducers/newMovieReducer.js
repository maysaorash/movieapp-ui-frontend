import {
  NEW_MOVIES_PENDING,
  NEW_MOVIES_FULFILLED,
  NEW_MOVIES_REJECTED,
} from "../actions/newMovieActions";
const initialState = {
  fetching: false,
  fetched: false,
  movies: [],
  error: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case NEW_MOVIES_PENDING:
      return { ...state, fetching: true, fetched: false };
    case NEW_MOVIES_FULFILLED:
      return { ...state, movies: payload, fetching: false, fetched: true };
    case NEW_MOVIES_REJECTED:
      return { ...state, error: payload, fetching: false, fetched: true };

    default:
      return state;
  }
};
