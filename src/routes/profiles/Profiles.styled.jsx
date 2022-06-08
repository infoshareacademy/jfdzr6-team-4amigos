import styled from "styled-components"

export const Container = styled.div`
    min-height: 100vh;    
    margin-top: 100px;
`

export const ProfilesContainer = styled.div`
    width: 100%;
    max-width: 1440px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 25px;
`

export const CardContainer = styled.div`
    width: 240px;
    border-radius: 10px 10px 0 0;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    ul{
        list-style: none;
        display: flex;
        gap: 15px;
        color: #716e6c;
    }

    li{
        font-size: 28px;
    }

    button{
        width: calc(100% - 10px);
        margin: 5px;
        background-color: #FF8020;
        border: none;
        height: 50px;
        color: #fff;
        font-size: 18px;
        font-weight: 400;
        border-radius: 10px;
        transition: background-color .3s ease;

        &:hover{
            background-color: #dd711f;
        }
    }
    `

export const CardPictureWrapper = styled.div`
    position: relative;
    height: 300px;

    img{
        width: 100%;
        max-width: 300px;
        height: 100%;
        max-height: 300px;
        position: relative;   
        object-fit: cover;
        border-radius: 10px 10px 0 0;
    }

    span{
        width: 100%;
        padding: 10px 20px;
        position: absolute;
        bottom: 0px;
        left: 0px;
        color: #fff;
        font-size: 22px;
        font-weight: 300;
        box-shadow: inset 0px -50px 20px -20px #303032cc;        
    }
`

export const CardInfoWrapper = styled.div`
    margin: 10px;

   
`