import React from "react";
import { Container, Card } from "react-bootstrap";
import TaskDetails from "./taskDetails";

const KanbanCard = props => (
  <div>
    <Card bg="warning" draggable>
      <Card.Header>{props.taskname}</Card.Header>
      <Card.Body>
        {/* <Card.Title>Task 1</Card.Title> */}
        <Card.Text>
          <TaskDetails /> {props.taskdesc}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    <hr />
  </div>
);

export default KanbanCard;
