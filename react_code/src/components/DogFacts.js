import React from "react";
import { List, Header } from "semantic-ui-react";
import { Card, CardBody } from "react-simple-card";

export const DogFacts = ({ dogFacts }) => {
  return (
    <List>
      {dogFacts.map((dogFact) => {
        return (
          <List.Item key={dogFact.fact}>
            <Header>
              <Card>
                <CardBody>{dogFact.fact}</CardBody>
              </Card>
            </Header>
          </List.Item>
        );
      })}
    </List>
  );
};
