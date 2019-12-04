import React, { Component } from 'react';
import Cards from './Cards';
import CardForm from './CardForm';
import { Container, Segment, Button } from 'semantic-ui-react';
import './App.css';

const imgSrc1 = "https://myrealdomain.com/images/4x6-note-card-clipart-4.png"

class App extends Component {

  state = {
    cards: [
      {id: 1, question: "why?", answer: "why not?", },
      {id: 2, question: "how?", answer: "with great effort", },
      {id: 3, question: "who?", answer: "not me", },
    ],

  }

  getId = () => {
    Math.floor((1 + Math.random()) * 10000)
  }

  addCard = ({ question, answer }) => {
    let card = { id: this.getId, question, answer }
    this.setState({ cards: [...this.state.cards, card] })
  }

  removeCard = ( id ) => {
    const cards = this.state.cards.filter( card => {
      if (card.id !== id) 
        return card 
    })
    this.setState({ cards, })
  }

  render() {
    return (
      <Container style={{paddingTop: "25px", backgroundImage: {imgSrc1}}}>
        <h1>React Flash Cards</h1> 
        <Segment>
          <Cards cards={this.state.cards} remove={this.removeCard} />
          <h2>Answer</h2>
          <Button color="blue inverted">Add Question</Button>
        </Segment>        
      <CardForm add={this.addCard}/>
      
      </Container>
    )
  }

};

export default App;
