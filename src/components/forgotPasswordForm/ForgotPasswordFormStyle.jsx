import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    margin-top: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #262f40;

    h2{        
        font-size: 32px;
        margin: 0px;
    }

    p{
        margin-bottom: 35px;
    }
`

export const ResetForm = styled.form`
    width: 500px;
    height: 350px;
    background-color: #FFC524;
    border-radius: 10px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;

    div{
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    button{
    width: 100%;
    height: 40px;
    background-color: #FF8020;
    border-radius: 5px;
    border: none;
    color: #eee;
    text-align: center;
    -webkit-text-decoration: none;
    text-decoration: none;
    font-size: 14px;
    font-weight: bold;
    padding: 10px;
    cursor: pointer;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;

    &:hover{
        background-color: #d46510;
    }
    }

    input[type="email"]{
        border: none;
        padding: 10px 15px;
        border-radius: 5px;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

        &:focus-visible{
            outline: 1px solid #FF8020;
        }
    }
`