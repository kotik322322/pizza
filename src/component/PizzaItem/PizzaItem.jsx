import React, { Component } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import styles from './PizzaItem.module.scss';
import favorite from './favorite.svg';
import notFavorite from './notFavorite.svg';

class PizzaItem extends Component {
  state = {
    modalCart: null,
  };

  render() {
    const { name, price, imageUrl, article, color, item } = this.props;

    const addItem = (item) => {
      return localStorage.setItem('Pizza : ' + item.name, 'Price : ' + item.price);
    };

    const getItem = (item) => {
      return localStorage.getItem('Pizza : ' + item.name);
    };

    const removeItem = (item) => {
      localStorage.removeItem('Pizza : ' + item.name);
    };

    const addToFavorite = (item) => {
      if (getItem(item)) {
        removeItem(item);
      } else {
        addItem(item);
      }
    };

    const addToCart = (item) => {
      localStorage.setItem('Pizza : ' + item.name, 'Price : ' + item.price);
    };

    const handleModal = (bool) => {
      this.setState({ modalCart: bool });
    };

    const addToCartAndClose = () => {
      addToCart(item);
      handleModal(false);
    };

    return (
      <div className={styles.PizzaItem}>
        <img
          src={favorite }
          className={styles.favorite}
          onClick={() => addToFavorite(item)}
          alt=""
        />
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
            handleClose={() => {
              handleModal(false);
            }}
            text={`Выпекаем пиццу ${item.name} ? `}
            addToStorage={() => addToCartAndClose()}
          />
        )}
      </div>
    );
  }
}

export default PizzaItem;
