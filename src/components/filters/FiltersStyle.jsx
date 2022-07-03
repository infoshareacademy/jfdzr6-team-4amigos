import styled from "styled-components";

export const FiltersSection = styled.section`
  margin: 25px 0;
  width: 280px;
  height: min-content;
  background-color: #ffc524;
  color: #262f40;
  padding: 20px;
  margin-right: 25px;
  border-radius: 0 10px 10px 0;
  display: flex;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  h5 {
    margin: 10px 0;
    font-size: 16px;
  }

  button {
    width: 100%;
    height: 40px;
    margin: 20px 0 10px 0;
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

export const StyledCheckbox = styled.div`
  background-color: #ffc524;
  display: block;
  margin: 5px 0;
  position: relative;
  border: #ff8020 1px solid;

  label {
    padding: 12px 12px;
    width: 100%;
    display: block;
    text-align: right;
    font-weight: 600;
    color: #262f40;
    cursor: pointer;
    position: relative;
    z-index: 2;
    transition: color 200ms ease-in;
    overflow: hidden;

    &:before {
      width: 10px;
      height: 10px;
      /* border-radius: 50%; */
      content: "";
      background-color: #ff8020;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) scale3d(1, 1, 1);
      transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
      opacity: 0;
      z-index: -1;
    }

    &:after {
      width: 16px;
      height: 16px;
      content: "";
      border: 1px solid #ff8020;
      background-color: #fff;
      background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.414 11L4 12.414l5.414 5.414L20.828 6.414 19.414 5l-10 10z' fill='%23fff' fill-rule='nonzero'/%3E%3C/svg%3E ");
      background-repeat: no-repeat;
      background-position: top;
      border-radius: 5px;
      z-index: 2;
      position: absolute;
      left: 5px;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      transition: all 200ms ease-in;
    }
  }

  input:checked ~ label {
    color: #fff;

    &:before {
      transform: translate(-50%, -50%) scale3d(56, 56, 1);
      opacity: 1;
    }

    &:after {
      width: 20px;
      height: 20px;
      background-color: #ff8020;
      border-color: #ff8020;
    }
  }

  input {
    width: 12px;
    height: 12px;
    order: 1;
    z-index: 2;
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-10%);
    cursor: pointer;
    visibility: hidden;
  }
`;
