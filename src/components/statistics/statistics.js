import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import {
  statistics,
  statistics__title,
  statistics__item,
  statistics__name,
  statistics__list
} from './statistics.styled';

function Statistics({ stat, total, positivePercentage }) {
  return (
    <div className={statistics}>
      <h2 className={statistics__title}>Statistics</h2>
      <ul className={statistics__list}>
        {Object.entries(stat).map(([key, value]) => (
          <li className={statistics__item} key={shortid.generate()}>
            <span className={statistics__name} key={shortid.generate()}>
              {key}:{' '}
            </span>
            <span key={shortid.generate()}>{value}</span>
          </li>
        ))}
        <li className={statistics__item} key={shortid.generate()}>
          <span key={shortid.generate()}>Total: </span>
          <span key={shortid.generate()}>{total}</span>
        </li>
        <li className={statistics__item} key={shortid.generate()}>
          <span key={shortid.generate()}>Positive feedback: </span>
          <span key={shortid.generate()}>{positivePercentage}%</span>
        </li>
      </ul>
    </div>
  );
}

Statistics.defaultProps = {
  stat: { good: 0, neutral: 0, bad: 0 },
  total: 0,
  positivePercentage: 0,
};

Statistics.propTypes = {
  stat: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
