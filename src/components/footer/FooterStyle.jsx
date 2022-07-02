import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 4rem;
  background-color: #f5f5f5;
  padding: 1rem;
  margin-top: auto;
  margin-bottom: auto;
  font-size: 0.8rem;
  color: #333;
  border-top: 1px solid #ccc;
  position: fixed;
  bottom: 0;

  @media screen and (max-width: 412px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin-top: 0;
    margin-bottom: 0;
    border-top: none;
    position: fixed;
    bottom: 0;
    height: 120px;
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: left;
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
    background-color: #ff8020;
    border-radius: 50%;
  }
  @media screen and (max-width: 412px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    height: 80px;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 200px;
      margin: 0;
      padding: px;
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
  }
`;
