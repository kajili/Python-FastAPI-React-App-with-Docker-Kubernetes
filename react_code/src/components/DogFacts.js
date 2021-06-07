import React from "react";
import { List, Header } from "semantic-ui-react";

export const DogFacts = ({ dogFacts }) => {
  return (
    <List>
      {dogFacts.map((dogFact) => {
        return (
          <List.Item key={dogFact.fact}>
            <Header>{dogFact.fact}</Header>
            <br />
          </List.Item>
        );
      })}
    </List>
  );
};
