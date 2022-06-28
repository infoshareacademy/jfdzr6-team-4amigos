import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  padding: 1rem;
  margin-top: auto;
  font-size: 0.8rem;
  color: #333;
  border-top: 1px solid #ccc;
`;

export const StyledUl = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    margin: 0 1rem;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #333;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  img {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.5rem;
  }
`;
