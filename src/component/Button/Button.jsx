import React, { Component } from 'react';
import styles from './button.scss';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { backgroundColor, onClick, text } = this.props;

    return (
      <div>
        <button className="btn__modal" style={{ backgroundColor }} onClick={onClick}>
          {text}
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  backgroundColor: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  props: PropTypes.object,
};
Button.defaultProps = {
  backgroundColor: '',
  text: '',
  onClick: () => {},
};

export default Button;
