import React from 'react';
import PropTypes from 'prop-types';
import styles from './Counter.module.css';

const Counter = ({ index }) => (
  <>
    <p className={styles.counter}>{`${index}/12`}</p>
  </>
);

Counter.propTypes = {
  index: PropTypes.number.isRequired,
};

export default Counter;
