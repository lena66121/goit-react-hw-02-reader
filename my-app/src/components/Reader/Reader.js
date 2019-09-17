import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Publication from '../Publication/Publication';
import Counter from '../Counter/Counter';
import Controls from '../Controls/Controls';
import styles from './Reader.module.css';

export default class Reader extends Component {
  state = {
    currentPage: 0,
  };

  handleClick = ({ target }) => {
    if (target.value === 'previous') {
      this.handlePrev();
    } else if (target.value === 'next') {
      this.handleNext();
    }
  };

  handlePrev = () => {
    this.setState(state => ({
      currentPage: state.currentPage - 1,
    }));
  };

  handleNext = () => {
    this.setState(state => ({
      currentPage: state.currentPage + 1,
    }));
  };

  render() {
    const { currentPage } = this.state;
    const index = currentPage + 1;
    const { items } = this.props;
    const publication = items;
    return (
      <div className={styles.reader}>
        <Publication
          title={publication[currentPage].title}
          text={publication[currentPage].text}
          id={publication[currentPage].id}
        />
        <Counter index={index} />
        <Controls onClick={this.handleClick} index={currentPage} />
      </div>
    );
  }
}

Reader.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
