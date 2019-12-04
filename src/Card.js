import React from 'react';
import { Table, Button, } from 'semantic-ui-react';
 

class Card extends React.Component {
  state = {
    cards: {},
    showAns: false,
  }

  toggleAns = () => this.setState({ showAns: !this.state.showAns })

  render() {
    return (
      <Table.Row>
        <Table.Cell>{this.props.question}</Table.Cell>
        <Table.Cell>{this.state.showAns ? this.props.answer : <Button onClick={this.toggleAns}>Show Answer</Button>} </Table.Cell>
        <Button color="red" onClick={() => this.props.remove(this.props.id)}>Delete</Button>
        {/* edit button doesn't work, need to be able to pass data into form state */}
        <Button color="blue inverted" >Edit</Button>
      </Table.Row>
    )
  }
}

// old code
// ({ id, question, answer, remove }) => (
  
// const Card = ({ id, question, answer, remove }) => (
//   <Table.Row>
//     <Table.Cell>{question}</Table.Cell>
//     <Table.Cell>{answer}</Table.Cell>
//     <Button color="red" onClick={() => remove(id)}>Delete</Button>
//     {/* edit button doesn't work, need to be able to pass data into form state */}
//     <Button color="blue inverted" >Edit</Button>
//   </Table.Row>
// )

export default Card