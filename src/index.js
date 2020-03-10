import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import Column from "./components/kanbanColumn";

ReactDOM.render(<Navbar />, document.getElementById("navbar"));
ReactDOM.render(<Column />, document.getElementById("kanban-board"));
