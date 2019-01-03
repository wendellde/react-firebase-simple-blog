import React from "react";
import { Container, Header } from "semantic-ui-react";
import moment from "moment";

export default ({
  blog: { title, body, authorFirstName, authorLastName, createdAt }
}) => (
  <Container fluid style={{ marginBottom: 20 }}>
    <Header as="h3">{title}</Header>
    <p>{body}</p>
    <small>{`By ${authorFirstName} ${authorLastName} on ${moment(
      createdAt.toDate()
    ).format("MMMM Do YYYY, h:mm:ss a")}`}</small>
  </Container>
);
