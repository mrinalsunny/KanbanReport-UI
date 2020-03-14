import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import KanbanCard from "./kanbanCard";

const KanbanQueue = props => (
  <div>
    <Card bg="light" style={{ width: "12rem" }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title className="text-center">{props.queuename}</Card.Title>
        <Card.Text></Card.Text>
      </Card.Body>
      <KanbanCard taskname="task1" taskdesc="task description" />
      <KanbanCard taskname="task2" taskdesc="task description" />
      <KanbanCard taskname="task3" taskdesc="task description" />
      <KanbanCard taskname="task4" taskdesc="task description" />
      <KanbanCard taskname="task5" taskdesc="task description" />
    </Card>
  </div>
);

export default KanbanQueue;
