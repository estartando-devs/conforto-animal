import styled from 'styled-components'
import '../../assets/fonts/fonts.css';
export const ButtonContainer = styled.button`
    width: 148px;
    height: 30px;
    font-family: Montserrat, sans-serif;
    border: none;
    border-radius: 10px;
    background-color: #01A58D;
    color: #fff;
    /* margin-left:auto; */
    
    &:focus{
        outline:none;
    }
    
    &.btn-bottom{
        width: 100%;
        height: 55px;
        border-radius: 0;
        font-size: 18px;
        position: fixed;
        bottom: 0;
    }

    &.btn-menu{
        border:1px solid darkgray;
        border-radius:20px;
        outline:none;
        margin:10px;
        height:50px;
        width:200px;
        font-size:20px;
        :hover{
            background-color:#016E8D;
            height:40px;
            width:180px;
         
        }

    }

`;
