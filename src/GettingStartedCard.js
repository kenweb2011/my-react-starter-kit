import React from 'react';
import './index.css';
import axios from 'axios';

const Card = (props) => {
  return (
    <div style={{margin: '1em'}} >
      <img src={props.avatar_url} />
      <div style={{display: 'inline-block', marginLeft: 10}} >
        <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>
          {props.name}
        </div>
        <div>{props.company}</div>
      </div>
    </div>
  );
};

const CardList = (props) => {
  return (
    <div>
      {props.cards.map(card => <Card {...card} />)}
    </div>
  );
};

class AddCardForm extends React.Component {
  state = { userName: ''}

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Event AddCardForm submitted', 
      this.userNameInput.value);
    console.log('AddCardForm.userName', 
      this.state.userName);
    axios.get(`https://api.github.com/users/${this.state.userName}`)
      .then(resp => {
        //console.log(resp);
        this.props.onSubmit(resp.data);
        this.setState({userName: ''});
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" 
          ref={(input) => this.userNameInput = input}
          value={this.state.userName}
          onChange={(event) => this.setState({userName: event.target.value})}
          placeholder="Github username" required />
        <button type="submit">Add Card</button>
      </form>
    );
  }
}

export { CardList, AddCardForm };
