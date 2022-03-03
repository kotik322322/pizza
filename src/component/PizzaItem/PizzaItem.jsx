import React, { Component } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import styles from './PizzaItem.module.scss';
import favorite from './favorite.svg';
import notFavorite from './notFavorite.svg';
import PropTypes from 'prop-types';

class PizzaItem extends Component {
  state = {
    modalCart: null,
    src: false,
  };

  render() {
    const { name, price, imageUrl, article, color, item } = this.props;

    const addItem = (item) => {
      this.setState({ src: true });
      return localStorage.setItem('Favorite pizza : ' + item.name, 'Price : ' + item.price);
    };

    const getItem = (item) => {
      return localStorage.getItem('Favorite pizza : ' + item.name);
    };

    const removeItem = (item) => {
      this.setState({ src: false });
      localStorage.removeItem('Favorite pizza : ' + item.name);
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

    // console.log(getItem(item))
    return (
      <div className={styles.PizzaItem}>
        <img
          src={this.state.src === false ? notFavorite : favorite}
          className={styles.favorite}
          onClick={() => addToFavorite(item)}
          alt=""
        />
        <h2 className={styles.PizzaName}>{name}</h2>
        <p className={styles.PizzaPrice}>{price}</p>
        <img className={styles.PizzaImg} src={imageUrl} alt="PizzaImg" />
        {/* <p className={styles.PizzaColor}>{color}</p> */}

        <Button text="Add To Cart" onClick={() => handleModal(true)} />
        <p className={styles.PizzaArticle}> №{article}</p>
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

PizzaItem.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  imageUrl: PropTypes.string,
  article: PropTypes.string,
  color: PropTypes.string,
  item: PropTypes.object,
};
PizzaItem.defaultProps = {
  name: '',
  price: '',
  imageUrl: '',
  article: '',
  color: '',
};

export default PizzaItem;
