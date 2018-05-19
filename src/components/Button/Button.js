import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.css';

const Button = ({ children }) => (
  <button className={styles.button}>
    {children}
  </button>
);

Button.propTypes = {
  /**
   * @ignore
   */
  children: PropTypes.node.isRequired,
};

export default Button;
