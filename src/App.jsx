import { Component } from 'react';
import Button from './component/Button/Button';
import Cart from './component/Cart/Cart';
import Modal from './component/Modal/Modal';
import PizzaItem from './component/PizzaItem/PizzaItem';
import './App.css';

class App extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    fetch('/DBPizza.json')
      .then((res) => res.json())
      .then((result) => {
        this.setState({ items: result.pizzas });
      });
  }

  render() {
    const { items } = this.state;

    const addToCart = (item) => {
      localStorage.setItem("Pizza : " + item.name, 'Price : ' + item.price  );
      // close()
    };

    return (
      <div className="App">
        <div className="app__cart">
          <Cart />
        </div>

        {items.map((item) => (
          <PizzaItem
            key={item.name}
            name={item.name}
            price={item.price}
            imageUrl={item.imageUrl}
            article={item.article}
            color={item.color}
            addToLocalStorage={() => addToCart(item)}

          />
        ))}
      </div>
    );
  }
}

export default App;
