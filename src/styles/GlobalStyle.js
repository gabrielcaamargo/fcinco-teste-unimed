import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle =  createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    width: 100%;
    height: 100%;
    background-image: url('../../assets/fundo.jpg');
  }
`

export const FormWrapper = styled.form`
  --default-green: #00995D;

  margin: 10px 0;
  background-color: #FFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 25vw;
  padding: 75px 45px;
  font-family: 'Montserrat', sans-serif;
  border-radius: 30px 30px 0px 30px;

  img{
    width: 200px;
    margin: 40px auto;
  }

  @media (max-width: 600px){
    width: 90vw;
    padding: 60px 55px;
  }
  
  @media (max-width: 1310px){
    width: 90vw;
    padding: 60px 55px;
  }
`

export const Intro = styled.p`
  color: #B1D34B;
  text-transform: uppercase;
  letter-spacing: 5.6px;
  font-size: 14px;

  @media (max-width: 600px){
    font-size: 12px;
  }
  
`

export const IntroHeading = styled.h2`
  color: var(--default-green);
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 40px;

  @media (max-width: 600px){
    font-size: 28px;
  }
`

export const Input = styled.input`
  padding: 19px 24px;
  margin-bottom: 10px;
  outline: none;
  border: 1px solid #9F9F9F;
  border-radius: 16px 16px 0px 16px;
  font-size: 16px;
`

export const PasswordLink = styled.a`
  text-decoration: underline;
  margin: -4px 0px 36px;

  #link{
    color: #525252;
    font-size: 13px;
  }
`

export const Button = styled.input`
  background-color: var(--default-green);
  color: #FFF;
  font-weight: 700;
  font-size: 18px;
  width: 100%;
  border: 2px ;
  border-radius: 16px 16px 0px 16px;
  padding: 19px;
  cursor: pointer;
  transition: .2s ease-in-out;

  :hover{
    background-color: #FFF;
    border: 2px solid #9F9F9F;
    color: #525252;
  }

  @media (max-width: 600px){
    font-size: 16px;
    width: 100%;
  }  
`

export const KeepConnected = styled.label`
  font-size: 15px;
  color: #686970;
  margin-top: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;

  input {
    width: 1.3em;
    height: 1.3em;
    margin-right: 6px;
    border-radius: 50%;
    vertical-align: middle;
    border: 1px solid #686970;
    appearance: none;
    -webkit-appearance: none;
    outline: none;
    cursor: pointer;

    :checked{
      background-color: gray;
    }
  }

`
