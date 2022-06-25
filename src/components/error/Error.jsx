import React from "react";

// styles
import { StyledError } from "./ErrorStyle";

const Error = ({ message }) => {
  return <StyledError>{message}</StyledError>;
};

export default Error;
