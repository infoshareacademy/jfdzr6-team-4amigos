import styled from "styled-components";

export const StyledMyEventsList = styled.div`
  width: 800px;
  height: 100%;
  max-height: 100%;
  margin-top: 115px;
  margin-left: 50px;
  color: grey;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ul {
    list-style: none;
  }
  li {
    margin: 10px 0;
    font-size: 20px;
  }
  a {
    margin: 10px;
    padding: 20px;
    background-color: #fff;
  }
  h1 {
    margin: 0 20px;
  }
`;
