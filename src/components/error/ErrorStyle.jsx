import styled from "styled-components";

export const StyledError = styled.div`
  width: 350px;
  position: fixed;
  top: 90px;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 1rem;
  text-align: center;
  letter-spacing: 0.1rem;
  font-weight: 400;
  font-size: 1rem;
  font-family: "Open Sans", sans-serif;
  padding: 0.5rem;
  border-radius: 0.4rem;
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
`;

export const ErrorField = styled.span`
  color: rgb(95, 33, 32);
  background-color: rgb(253, 237, 237);
  padding: 5px 10px;
  margin-top: 5px;
  border-radius: 5px;
`;
