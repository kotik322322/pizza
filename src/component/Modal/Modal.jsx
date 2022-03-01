import React, { Component } from "react";
import Button from "../Button/Button";
import styles from '../Modal/Modal.module.scss';




class Modal extends Component {
  render() {

    const {
      header,
      closeButton,
      text,
      style,
      handleClose,
      colorForButton
    } = this.props;

    const clickOutside = (e) => {
      if (e.currentTarget === e.target) {
        handleClose()
      }
    }




    return (
      <div onClick={clickOutside} className={styles.modal}>
        <div style={style} className={styles.modalContainer}>
          {closeButton && <button className={styles.buttonClose} onClick={handleClose} >{'X'}</button>}


          <div className="modal-header">
            <h1 className={styles.headerTitle}>{header}</h1>
          </div>
          <div className="modal-body">
            <h2 className={styles.modalText}>{text}</h2>
          </div>

          <div className={styles.modalFooter} >
            <Button text={'Okey'} backgroundColor={colorForButton} />
            <Button onClick={() => handleClose()} text={'Cancel'} />
          </div>

        </div>
      </div>

    );
  }
}




export default Modal;



