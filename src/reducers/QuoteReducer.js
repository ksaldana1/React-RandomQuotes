import { FETCH_QUOTE } from '../actions/index';

export default function(state = ['This is a quote'], action) {
  switch (action.type) {
    case FETCH_QUOTE:
      return ['This is a new quote']; // [city, city, city]
    default:
      return state;
  }
}
