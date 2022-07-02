import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 5%;
  padding: 0 20px;
  margin: 0 auto;
  margin-top: 100px;
  font-family: Open Sans;
  color: #fff;
  h2 {
    color: #c5c7c5;
  }
`;

export const StyledForm = styled.div`
  margin: 0 auto;
  width: 800px;
  background-color: #ffc524;
  padding: 50px 125px;
  border-radius: 10px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 14px;
    color: red;
  }

  h3 {
    margin: 0;
    font-size: 1.5rem;
    text-align: center;
  }
  h5 {
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: #fff;
    margin-bottom: 10px;
  }
  input[type="text"] {
    background-color: #fff;
    height: 50px;
    width: 250px;
    border-radius: 5px;
    display: flex;
    justify-content: start;
    align-items: center;
    border: none;
    font-size: 16px;
    padding: 10px;
    outline: 3px solid #ffc524;
    ::placeholder {
      color: #c5c7c5;
    }
    :focus-visible {
      outline: 3px solid #ff8020;
    }
    transition: 0.2s;
    :hover {
      outline: 3px solid #ff8020;
    }
  }
  input[type="password"] {
    background-color: #fff;
    height: 50px;
    width: 250px;
    border-radius: 5px;
    display: flex;
    justify-content: start;
    align-items: center;
    border: none;
    font-size: 16px;
    padding: 10px;
    outline: 3px solid #ffc524;
    ::placeholder {
      color: #c5c7c5;
    }
    :focus-visible {
      outline: 3px solid #ff8020;
    }
    transition: 0.2s;
    :hover {
      outline: 3px solid #ff8020;
    }
  }
  input[type="number"] {
    background-color: #fff;
    height: 50px;
    width: 250px;
    border-radius: 5px;
    display: flex;
    justify-content: start;
    align-items: center;
    border: none;
    font-size: 16px;
    padding: 10px;
    outline: 3px solid #ffc524;
    ::placeholder {
      color: #c5c7c5;
    }
    :focus-visible {
      outline: 3px solid #ff8020;
    }
    transition: 0.2s;
    :hover {
      outline: 3px solid #ff8020;
    }
  }

  textarea {
    resize: none;
    height: 150px;
    width: 400px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    padding: 10px;
    outline: 3px solid #ffc524;
    ::placeholder {
      color: #c5c7c5;
      padding-top: 5px;
    }
    :focus-visible {
      outline: 3px solid #ff8020;
    }
    transition: 0.2s;
    :hover {
      outline: 3px solid #ff8020;
    }
  }
`;

export const StyledSportsDivContainer = styled.div`
  display: flex;
  width: 550px;
  border: 1px solid #ffc524;
  height: 250px;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const StyledSportsDiv = styled.div`
  background-color: #fff;
  height: 50px;
  width: 250px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #c5c7c5;
  position: relative;
  input[type="checkbox"] {
    width: 20px;
    height: 20px;
    margin: 15px;
    accent-color: #fefdfb;
  }
  i {
    position: absolute;
    right: 10px;
    height: 30px;
    width: 30px;
  }
  svg {
    height: 30px;
    width: 30px;
  }
`;

export const StyledGenderDivContainer = styled.div`
  display: flex;
  width: 550px;
  border: 1px solid #ffc524;
  height: 50px;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
  div {
    background-color: #fff;
    height: 50px;
    width: 250px;
    border-radius: 5px;
    display: flex;
    justify-content: start;
    align-items: center;
  }
  input[type="radio"] {
    width: 20px;
    height: 20px;
    margin: 15px;
    accent-color: #ff8020;
  }
  label {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #c5c7c5;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: center;
`;

export const StyledSubmitButton = styled.button`
  background: #ff8020;
  margin-top: 40px;
  border-radius: 5px;
  width: 30%;
  height: 50px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  border: none;
  color: #ffffff;
  transition: 0.3s;
  cursor: pointer;
  border: 1px solid #ffc524;
  :hover {
    background: #fe6e00;
    border: 1px solid #fe6e00;
  }
`;
export const UploadFileInput = styled.input`
  ::file-selector-button {
    border-radius: 5px;
    background-color: #ff8020;
    transition: 0.2s;
    padding: 10px;
    color: #fff;
    font-family: "Open Sans";
    border: 1px solid #ffc524;
    :hover {
      background: #fe6e00;
      border: 1px solid #fe6e00;
    }
    cursor: pointer;
  }
`;

export const ProvinceSelect = styled.select`
  width: 250px;
  height: 50px;
  background: white;
  border-radius: 5px;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
`;
