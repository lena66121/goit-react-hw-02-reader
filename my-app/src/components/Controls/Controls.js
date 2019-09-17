import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({ onClick, index }) => (
  <section className={styles.controls}>
    <button
      type="button"
      value="previous"
      className={styles.button}
      onClick={onClick}
      disabled={index === 0 ? true : ''}
    >
      Previous
    </button>
    <button
      type="button"
      value="next"
      className={styles.button}
      onClick={onClick}
      disabled={index === 11 ? true : ''}
    >
      Next
    </button>
  </section>
);

Controls.propTypes = {
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Controls;
