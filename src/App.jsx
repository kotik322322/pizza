import { Component } from 'react';
import Button from './component/Button/Button';
import Modal from './component/Modal/Modal';
import PizzaItem from './component/PizzaItem/PizzaItem';

class App extends Component {
  state = {
    items: []
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

    return (
      <div className="App">


        {items.map((item) => (
          <PizzaItem
            key={item.name}
            name={item.name}
            price={item.price}
            imageUrl={item.imageUrl}
            article={item.article}
            color={item.color}
          />
        ))}


      </div>
    );
  }
}

export default App;
