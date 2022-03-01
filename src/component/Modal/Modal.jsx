import React, { Component } from "react";
import Button from "../Button/Button";
import styles from '../Modal/Modal.module.scss';




class Modal extends Component {
  render() {

    const {
      closeButton,
      text,
      style,
      handleClose,
      addToStorage

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

          <div className="modal-body">
            <h2 className={styles.modalText}>{text}</h2>
          </div>

          <div className={styles.modalFooter} >
            <Button text={'Okey'} onClick = {addToStorage}  />
            <Button onClick={() => handleClose()} text={'Cancel'} />
          </div>

        </div>
      </div>

    );
  }
}




export default Modal;



