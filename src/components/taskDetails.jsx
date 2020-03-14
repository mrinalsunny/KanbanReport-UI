import React from "react";
import { Container, OverlayTrigger, Popover } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const popover = (
  <Popover id="popover-basic">
    <Popover.Content>
      And here's some <strong>amazing</strong> content. It's very engaging.
      right?
    </Popover.Content>
  </Popover>
);

const TaskDetails = () => (
  <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
    <FontAwesomeIcon icon={faEye} />
  </OverlayTrigger>
);

export default TaskDetails;
