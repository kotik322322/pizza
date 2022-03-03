import { Component } from 'react';
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
            item={item}
          />
        ))}
      </div>
    );
  }
}

export default App;
