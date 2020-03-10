import React, { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

class columnComponent extends Component {
  state = { queues: [] };
  render() {
    return (
      <Container fluid="true">
        {/* <br></br> */}
        <Row>
          <Col>
            <Card style={{ width: "12rem" }}>
              {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
              <Card.Body>
                <Card.Title>Todo</Card.Title>
                <Card.Text>
                  New Incidents{" "}
                  <Button variant="primary" size="sm">
                    +
                  </Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "12rem" }}>
              {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
              <Card.Body>
                <Card.Title>In Progress</Card.Title>
                <Card.Text>Under Investigation</Card.Text>
                {/* <Button variant="primary"></Button> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default columnComponent;
