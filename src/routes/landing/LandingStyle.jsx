import styled from "styled-components"

export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 5%;
    padding: 0 20px;
    margin: 0 auto;
    margin-top: 100px;
    h1{
        font-size: 80px;
        color: #C5C7C5;
        margin: 0;
    }
    p{
        font-size: 14px;
        color: #C5C7C5;
    }   
    img{
        width: 800px;
        height: 100%;
        background-color: #fff;
        border-radius: 5%;
    }
    button{
        width: 300px;
        height: 40px;
        background-color: #FFC524;
        border-radius: 5px;
        border: 1px solid #e6e6e6;
        color: #eee;
        text-align: center;
        text-decoration: none;
        font-size: 14px;
        font-weight: bold;
        margin: 40px 10px;
        padding: 10px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        &:hover {
            background-color: #C5C7C5;
            color: #000;
        }
    }
        `