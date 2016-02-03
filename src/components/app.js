import React from 'react';
import { Component } from 'react';
import QuoteButton from './button';
import QuoteContainer from '../containers/quoteContainer';

export default class App extends Component {
  render() {
    return (
      <div>
        <QuoteContainer />
        <QuoteButton />
      </div>
    );
  }
}
