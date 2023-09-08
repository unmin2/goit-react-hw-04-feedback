import { notification }  from './notification.styled';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

class Notification extends Component {
  static defaultProps = {
    message: ' ',
  };
  static propTypes = {
    Message: PropTypes.string,
  };
  render() {
    return (
      <h2 key={shortid.generate()} className={notification}>
        {this.props.message}
      </h2>
    );
  }
}

export default Notification;