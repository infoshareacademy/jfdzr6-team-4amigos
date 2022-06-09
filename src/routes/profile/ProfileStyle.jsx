import styled from "styled-components";


export const ProfileContainer = styled.section`
    width: 85%;    
    margin: 100px auto;
    display: flex;
    flex-wrap: wrap;
    color: #262f40;

    img{
        flex: 2;
        max-width: 300px;
        max-height: 450px;
        border-radius: 10px;
        object-fit: cover;
    }
`

export const ProfileDetailsWrapper = styled.div`
    flex: 3;
    max-width: 500px;
    padding: 0 30px;
    font-size: 18px;
    position: relative;

    h3{
        font-size: 32px;
        margin: 0 0 10px 0;
    }

    h4{
        font-size: 24px;
        margin: 24px 0;
    }

    ul{
        padding: 0;
        margin: 0;
        list-style: none;
        display: flex;
        gap: 10px;
    }

    li{
        font-size: 24px;
        background-color: #EDECE8;
        text-align: center;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
    }

    div{
        margin: 5px;
    }

    span{
        margin: 15px;
    }
`


export const ProgressBar = styled.div`
    width: 200px;
    height: 4px;
    background-color: #EDECE8;
    border-radius: 10px;

    div{
        width: 70%;
        height: 100%;
        background-color: #FF8020;
        border-radius: 10px;
    }
`

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

export const OpenChatButton = styled.button`
    background-color: #FF8020;
    border: none;
    height: 40px;
    color: #fff;
    border-radius: 5px;
    padding: 0 15px;
    transition: background-color .2s ease;
    position: absolute;
    top: 10px;
    right: 10px;
    transition: all .2s ease;

    &:hover{
        background-color: #C5C7C5;
    }
`