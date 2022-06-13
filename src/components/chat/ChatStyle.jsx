import styled from "styled-components"

export const ChatContainer = styled.form`
    flex: 2;
    min-width: 350px;
    height: 500px;
    border: 2px solid #e8e7e5;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`
export const TypingInput = styled.input`
    width: 94%;
    margin: 0;
    border: none;
    padding: 10px 10px;
    background-color: #EDECE8;
    border-radius: 10px;
    border: 1px solid #EDECE8;
    color: #262f40;
    font-size: 16px;

    &:focus-visible{
        border: 1px solid #262f40;
        outline: none;
    }
    
`
export const ChatMessagesWrapper = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
`

export const IncommingMessage = styled.div`
    background-color: #f1f1f1;
    align-self: flex-start;
    padding: 10px 15px;
    border-radius: 10px;
    margin: 5px;
`

export const OutgoingMessage = styled.div`
    background-color: #FF8020;
    color: #fff;
    align-self: flex-end;
    padding: 10px 15px;
    border-radius: 10px;
    margin: 5px;
`