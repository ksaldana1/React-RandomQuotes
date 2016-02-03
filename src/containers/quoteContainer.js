import React from 'react';
import { connect } from 'react-redux';

class QuoteContainer extends React.Component {
  render() {
    return (
      <h1>{this.props.quote}</h1>
    )
  }
}

function mapStateToProps(state) {
  return {
    quote: state.currentQuote
  };
}

export default connect(mapStateToProps)(QuoteContainer);
