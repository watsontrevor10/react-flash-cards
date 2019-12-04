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
    showForm: false,
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

  editCard = ( id ) => {
    const cards = this.state.cards.slice( card => {
      if (card.id !== id)
        return card
    })
    this.setState({ cards, })
  }

  toggleForm = () => this.setState({ showForm: !this.state.showForm, })

  render() {
    const addAns = "Add Question"
    const cancelAns = "Cancel"
    return (
      <Container style={{paddingTop: "25px", backgroundImage: {imgSrc1}}}>
        <h1>React Flash Cards</h1> 
        <Segment>
          <Cards cards={this.state.cards} remove={this.removeCard} />
          <Button color="blue inverted" onClick={this.toggleForm}>{this.state.showForm ? cancelAns : addAns }</Button>
        </Segment> 
        {
          this.state.showForm ? 
          <CardForm add={this.addCard} /> 
          : null
        }       
      
      </Container>
    )
  }

};

export default App;
