import React, { Component } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import styles from './PizzaItem.module.scss';
import favorite from './favorite.svg';

class PizzaItem extends Component {
  state = {
    modalCart: null,
    cart: [],
  };

  render() {
    const { name, price, imageUrl, article, color, addToLocalStorage } = this.props;

    const handleModal = (bool) => {
      this.setState({ modalCart: bool });
    };



    

    return (
      <div className={styles.PizzaItem}>
        <img className={styles.favorite} src={favorite} alt="" />
        <h2 className={styles.PizzaName}>{name}</h2>
        <p className={styles.PizzaPrice}>{price}</p>
        <img className={styles.PizzaImg} src={imageUrl} alt="PizzaImg" />
        <p className={styles.PizzaArticle}>{article}</p>
        <p className={styles.PizzaColor}>{color}</p>


        <Button text="Add To Cart" onClick={() => handleModal(true)} />
        {this.state.modalCart === true && (
          <Modal
            colorForButton="#23EA33"
            style={{ backgroundColor: '#8BFAE3' }}
            closeButton
            handleClose={() => {handleModal(false)}}
            text="Вы действительно хотите положить данный товар в корзину? "
            addToStorage={addToLocalStorage}
          />
        )}
      </div>
    );
  }
}

export default PizzaItem;
