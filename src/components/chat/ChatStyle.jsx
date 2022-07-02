import styled from "styled-components";

export const ChatContainer = styled.form`
  flex: 2;
  min-width: 350px;
  max-width: 650px;
  height: 500px;
  border: ${(props) => (props.fullWidth ? "none" : "2px solid #e8e7e5")};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
export const TypingInput = styled.input`
  width: 100%;
  margin: 0;
  border: none;
  padding: 10px 10px;
  background-color: #edece8;
  border-radius: 0 5px 5px 0;
  border: 1px solid #edece8;
  color: #262f40;
  font-size: 16px;

  &:focus-visible {
    outline: 1px solid #ffc524;
  }
`;
export const ChatMessagesWrapper = styled.div`
  padding: 10px;
  height: calc(100% - 115px);
  display: flex;
  flex-direction: column;
  overflow: scroll;

  .growingBox {
    flex-grow: 1;
  }
`;

export const IncommingMessage = styled.div`
  background-color: #f1f1f1;
  align-self: flex-start;
  padding: 10px 15px;
  border-radius: 10px;
  margin: 5px;
`;

export const OutgoingMessage = styled.div`
  background-color: #ff8020;
  color: #fff;
  align-self: flex-end;
  padding: 10px 15px;
  border-radius: 10px;
  margin: 5px;
`;
