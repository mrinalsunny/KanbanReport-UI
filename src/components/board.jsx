import React from "react";
import { Row, Col } from "react-bootstrap";
import KanbanQueue from "./kanbanColumn";

const Board = () => (
  <div>
    <Row>
      <Col>
        <KanbanQueue queuename="New" />
      </Col>
      <Col>
        <KanbanQueue queuename="Awaits client" />
      </Col>
      <Col>
        <KanbanQueue queuename="Investigating" />
      </Col>
      <Col>
        <KanbanQueue queuename="Debuging" />
      </Col>
      <Col>
        <KanbanQueue queuename="Fixing" />
      </Col>
      <Col>
        <KanbanQueue queuename="Closed" />
      </Col>
    </Row>
  </div>
);

export default Board;
