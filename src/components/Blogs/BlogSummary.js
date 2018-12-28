import React from "react";
import { Container, Header } from "semantic-ui-react";

export default ({ blog }) => (
  <Container fluid style={{ marginBottom: 20 }}>
    <Header as="h3">{blog.title}</Header>
    <p>{blog.content}</p>
    <small>By {blog.author}</small>
  </Container>
);
