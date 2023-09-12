import React from 'react';
import PropTypes from 'prop-types';
import {
  feedback_title,
  feedback_buttons,
  feedback
} from './widget.styled';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={feedback}>
      <div className={feedback_title}>Please leave feedback</div>
      <div>
        {options.map(btn => (
          <button
            className={feedback_buttons}
            value={btn}
            key={btn}
            type="button"
            onClick={() => onLeaveFeedback(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

FeedbackOptions.defaultProps = {
  options: [],
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;