import React, { Component } from "react";
import styles from './button.scss';

class Button extends Component {
  render() {
    const {
      backgroundColor,
      onClick,
      text
    } = this.props;

    return (
      <div  >

        <button
          className='btn__modal'
          style={{ backgroundColor }}
          onClick={onClick}
        >
          {text}
        </button>

      </div>

    );

  }
}



export default Button;