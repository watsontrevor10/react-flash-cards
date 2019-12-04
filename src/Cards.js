import React from 'react';
import Card from './Card';
import { Table } from 'semantic-ui-react';

const Cards = ({ cards, remove }) => (
  <Table celled pegged>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Question</Table.HeaderCell>
          <Table.HeaderCell>Answer</Table.HeaderCell>
          <Table.HeaderCell>Options</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {
          cards.map( card => (
          <Card  key={card.id} {...card} remove={remove} />
          ))
        }
      </Table.Body>
    </Table>
)

export default Cards;