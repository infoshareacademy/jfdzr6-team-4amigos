import styled from "styled-components";

export const FiltersSection = styled.section`
  margin: 25px 0;
  width: 280px;
  height: 400px;
  background-color: #ffc524;
  color: #262f40;
  padding: 20px;
  margin-right: 25px;

  h5 {
    margin: 10px 0;
    font-size: 16px;
  }

  button {
    width: 100%;
    height: 40px;
    margin: 10px 0;
    background-color: #ff8020;
    border-radius: 5px;
    border: none;
    color: #eee;
    text-align: center;
    text-decoration: none;
    font-size: 14px;
    font-weight: bold;
    padding: 10px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: #c5c7c5;
      color: #000;
    }
  }
`;
export const RadioLabel = styled.label`
  line-height: 1.1;
  display: grid;
  grid-template-columns: 1em auto;
  gap: 0.5em;

  input[type="radio"] {
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    margin: 7px 0;
    font: inherit;
    color: black;
    width: 1.15em;
    height: 1.15em;
    border: 0.15em solid #ff8020;
    border-radius: 50%;
    transform: translateY(-0.075em);
    display: grid;
    place-content: center;

    &::before {
      content: "";
      width: 0.65em;
      height: 0.65em;
      border-radius: 50%;
      transform: scale(0);
      transition: 120ms transform ease-in-out;
      box-shadow: inset 1em 1em #ff8020;
    }

    &:checked::before {
      transform: scale(1);
    }

    &:checked ~ label {
      background-color: #ff8020;
    }
  }

  span {
    display: flex;
    align-items: center;
  }
`;
