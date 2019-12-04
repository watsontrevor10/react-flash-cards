import React from 'react';
import { Table, Button, } from 'semantic-ui-react';

const Card = ({ id, question, answer, remove }) => (
  <Table.Row>
    <Table.Cell>{question}</Table.Cell>
    <Table.Cell>{answer}</Table.Cell>
    <Button color="red" onClick={() => remove(id)}>Delete</Button>
  </Table.Row>
)

export default Card