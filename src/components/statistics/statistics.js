import {
  statistics,
  statistics__title,
  statistics__item,
  statistics__name, 
  statistics__list
} from './statistics.styled'
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

class Statistics extends Component {
  static defaultProps = {
    stat: { good: 0, neutral: 0, bad: 0 },
    total: 0,
  };
  static propTypes = {
    stat: PropTypes.object.isRequired,
    total: PropTypes.number,
  };

  render() {
    return (
      <div className={statistics}>
        <h2 className={statistics__title}>Statistics</h2>
        <ul className={statistics__list}>
          {Object.entries(this.props.stat).map(([key, value]) => {
            return (
              <li className={statistics__item} key={shortid.generate()}>
                <span
                  className={statistics__name}
                  key={shortid.generate()}
                >
                  {key}:{' '}
                </span>
                <span key={shortid.generate()}>{value}</span>
              </li>
            );
          })}
          <li className={statistics__item} key={shortid.generate()}>
            <span key={shortid.generate()}>Total: </span>
            <span key={shortid.generate()}>{this.props.total}</span>
          </li>
          <li className={statistics__item} key={shortid.generate()}>
            <span key={shortid.generate()}>Positive feedback: </span>
            <span key={shortid.generate()}>
              {this.props.positivePercentage}%
            </span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Statistics;