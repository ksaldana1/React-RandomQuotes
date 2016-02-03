import { combineReducers } from 'redux';
import QuoteReducer from './QuoteReducer'

const rootReducer = combineReducers({
  currentQuote: QuoteReducer
});

export default rootReducer;
