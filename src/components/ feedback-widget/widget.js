import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  feedback_title,
  feedback_buttons,
  feedback
} from './widget.styled';

 class FeedbackOptions extends Component {
  static defaultProps = {
    options: [],
  };
  static propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };
 
  render() {
    return (
      <div className={feedback}>
        <div className={feedback_title}>Please leave feedback</div>
        <div>
          {this.props.options.map(btn => (
            <button
              className={feedback_buttons}
              value={btn}
              key={btn}
              type="button"
              onClick={e => this.props.onLeaveFeedback(e)}
            >
              {btn}
            </button>
          ))}
        </div>
        </div>
    );
  }
}

export default FeedbackOptions;