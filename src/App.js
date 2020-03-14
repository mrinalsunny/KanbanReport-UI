import React from "react";
import { Container } from "react-bootstrap";
import MyNavbar from "./components/navbar";
import Board from "./components/board";

const App = () => (
  <Container fluid="true">
    <MyNavbar></MyNavbar>
    <br />
    <Board></Board>
  </Container>
);

export default App;
