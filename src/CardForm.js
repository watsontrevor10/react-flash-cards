import React from 'react';
import { Form, } from 'semantic-ui-react';

class CardForm extends React.Component {
  state = { question: "", answer: "", }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.add(this.state)
    this.setState({ question: "", answer: "", })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, })
  }

  render() {
    // const { question, answer } = this.state

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input 
          fluid
          required
          label="Question"
          placeholder="Question"
          name="question"
          value={this.state.question}
          onChange={this.handleChange}
        />
        <Form.Input 
        fluid
          required
          label="Answer"
          placeholder="Answer"
          name="answer"
          value={this.state.answer}
          onChange={this.handleChange}
        />
        <Form.Button color="green inverted">Submit</Form.Button>
      </Form>
    )
  }
}

export default CardForm;