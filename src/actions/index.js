import axios from 'axios';
const URL = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1'
export const FETCH_QUOTE = 'FETCH_QUOTE';



// action creators have to return actions (obj with type and payload)
export function fetchQuote() {
  console.log('quote fetching');
  const request = axios.get(URL);
  return {
    type: FETCH_QUOTE,
    payload: request
  };
}
