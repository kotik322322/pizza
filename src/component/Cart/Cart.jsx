import React, { Component } from 'react';
import styles from './Cart.module.scss';


class Cart extends Component {

    state = {
        modalCart: null
    }


    render() {


        return (
            <div className={styles.Cart}>
                <span>...</span>
            </div>
        );
    }
}

export default Cart;
