import styled from "styled-components";

export const StyledForm = styled.form`
  margin: 0 auto;
  width: 800px;
  background-color: #ffc524;
  padding: 50px 125px;
  border-radius: 10px;
  margin-bottom: 50px;
`;

export const StyledH2 = styled.h2`
  text-align: center;
  margin-top: 100px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 44px;
  color: #c5c7c5;
`;

export const StyledH3 = styled.h3`
  font-family: Open Sans;
  font-size: 24px;
  font-weight: 700;
  line-height: 33px;
  letter-spacing: 0em;
  text-align: left;
  color: #fff;
`;
export const StyledH5 = styled.h5`
  font-family: Open Sans;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  color: #fff;
  margin-bottom: 10px;
`;

export const StyledSportsInputContainer = styled.div`
  display: flex;
  width: 550px;
  border: 1px solid #ffc524;
  height: 300px;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const StyledInputDiv = styled.div`
  background-color: #fff;
  height: 50px;
  width: 250px;
  border-radius: 5px;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const StyledGenderInputDiv = styled.div`
  background-color: #fff;
  height: 50px;
  width: 250px;
  border-radius: 5px;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const StyledGenderInputContainer = styled.div`
  display: flex;
  width: 550px;
  border: 1px solid #ffc524;
  height: 50px;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const StyledSportsLabel = styled.label`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #c5c7c5;
`;

export const StyledCheckbox = styled.input`
  width: 20px;
  height: 20px;
  margin: 15px;
  accent-color: #ff8020;
`;

export const StyledInput = styled.input`
  background-color: #fff;
  height: 50px;
  width: 250px;
  border-radius: 5px;
  display: flex;
  justify-content: start;
  align-items: center;
  border: none;
  font-size: 16px;
  ::placeholder {
    color: #c5c7c5;
  }
  :focus-visible {
    outline: 3px solid #ff8020;
  }
  padding: 10px;
`;

export const StyledTextarea = styled.textarea`
  resize: none;
  height: 150px;
  width: 400px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  ::placeholder {
    color: #c5c7c5;
    padding-top: 5px;
  }
  :focus-visible {
    outline: 3px solid #ff8020;
  }
  padding: 10px;
`;

export const StyledSubmitButton = styled.button`
  margin-top: 50px;
  background: #ff8020;
  border-radius: 5px;
  width: 550px;
  height: 50px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  border: none;
  color: #ffffff;
  transition: 0.2s;
  cursor: pointer;
  :hover {
    background: #fe6e00;
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
    border: none;
    :hover {
      background: #fe6e00;
    }
    cursor: pointer;
  }
`;
