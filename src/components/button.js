import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchQuote } from '../actions/index.js';

class QuoteButton extends React.Component {
  render() {
    return (
      <button type='submit' onClick={this.props.fetchQuote}>Fetch Quote</button>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchQuote}, dispatch);
}

export default connect(null, mapDispatchToProps)(QuoteButton);
