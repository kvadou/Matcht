import React from "react";
import "./style.css";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
  return (
    <th className="delete-btn" {...props} role="button" tabIndex="0">
      <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
    </th>
  );
}

export default DeleteBtn;
