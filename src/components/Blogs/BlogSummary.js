import React from "react";
import { Card } from "semantic-ui-react";
import moment from "moment";

export default ({ blog: { title, body, createdAt } }) => (
  <div style={{ marginBottom: 20 }}>
    <Card fluid>
      <Card.Content>
        <Card.Header>{title}</Card.Header>{" "}
        <Card.Description>{body}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <small>{`Posted ${moment(createdAt.toDate())
          .startOf("hour")
          .fromNow()}`}</small>
      </Card.Content>
    </Card>
  </div>
);
