import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { notification } from './notification.styled';

function Notification({ message }) {
  return (
    <h2 key={shortid.generate()} className={notification}>
      {message}
    </h2>
  );
}

Notification.defaultProps = {
  message: ' ',
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
