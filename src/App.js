import React from 'react';
import { Container, } from 'semantic-ui-react';
import './App.css';

class App extends React.Component {

  state = {
    cards: [
      {id: 1, question: "why?", answer: "why not?", },
    ],
  }

  render() {
    return (
      <Container style={{paddingTop: "25px"}}>
        <h1>React Flash Cards</h1>   
      </Container>
    )
  }

};

export default App;
