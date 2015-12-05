import {
  FETCH,
  RECEIVE_ALL,
  RECEIVE_ONE
} from './actions';
export const initialState = {
  loading: false,
  loaded: true,
  list: [],
  listItem: {}
};

export default function powerRangers(state = initialState, action) { //jshint ignore:line
  switch (action.type) {
    case FETCH:
      return Object.assign({}, state, { loading: true });
    case RECEIVE_ALL:
      return Object.assign({}, state, {
        loading: false,
        loaded: true,
        list: action.rangers
      });
    case RECEIVE_ONE:
      return Object.assign({}, state, {
        loading: false,
        loaded: true,
        listItem: action.ranger
      });
    default:
      return state;
  }
}
