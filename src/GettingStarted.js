import React from 'react';
import './index.css';
import {CardList, AddCardForm} from './GettingStartedCard'

const Button1 = function (props) {
  return (
    <button>{props.label}</button>
  )
}
const Button2 = (props) => {
  return (
    <button>{props.label}</button>
  )
}

class Button extends React.Component {
  handleClick = () => {
    this.props.onClickFunction(this.props.incrementValue);
  }
  render() {
    return (
      <button onClick={this.handleClick}>
        +{this.props.incrementValue}
      </button>
    );
  }
}

const Result = (props) => {
  return (
    <div>{props.counter}</div>
  );
};

class GettingStarted extends React.Component {
  state = { 
    counter: 0,
    cards: [],
  };
    
  incrementCounter = (incrementValue) => {
    this.setState((prevState) => ({
      counter: prevState.counter + incrementValue
    }));
  }

  addNewCard = (cardInfo) => {
    console.log(cardInfo);
    this.setState(prevState => ({
      cards: prevState.cards.concat(cardInfo)
    }));
  }

  render () {
    return (
    <div>
      <AddCardForm onSubmit={this.addNewCard} />
      <CardList cards={this.state.cards} />
      <hr/>
      <Button incrementValue={1} onClickFunction={this.incrementCounter} />
      <Button incrementValue={5} onClickFunction={this.incrementCounter} />
      <Button incrementValue={10} onClickFunction={this.incrementCounter} />
      <Button incrementValue={100} onClickFunction={this.incrementCounter} />
      <Result counter={this.state.counter} />
      <p/><p/>
      <Button1 label={this.props.label1} />
      <Button2 label={this.props.label2} />
    </div>
    )
  }
}

export default GettingStarted;
