import React, { Component } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import styles from './PizzaItem.module.scss';

class PizzaItem extends Component {

    state = {
        modalCart: null
    }


    render() {
        const { name, price, imageUrl, article, color } = this.props;
        const handleModal = () => {this.setState({ modalCart: true })};

        return (
            <div className={styles.PizzaItem}>
                <h2 className={styles.PizzaName}>{name}</h2>
                <p className={styles.PizzaPrice}>{price}</p>
                <img className={styles.PizzaImg} src={imageUrl} alt="PizzaImg" />
                <p className={styles.PizzaArticle}>{article}</p>
                <p className={styles.PizzaColor}>{color}</p>
                <Button text='Add To Cart' onClick={() => handleModal(true)} />
                {this.state.modalCart === true && (
                    <Modal
                        colorForButton='#23EA33'
                        style={{ backgroundColor: "#8BFAE3" }}
                        closeButton
                        handleClose={() => handleModal(null)}
                        header='Modal №1'
                        text='Здесь могла быть ваша реклама '
                    />)}
            </div>
        );
    }
}

export default PizzaItem;
