import React from 'react';

import { FormWrapper , Intro, IntroHeading, Input, Button } from '../../styles/GlobalStyle';

import logo from '../../../assets/logo.png'

import { Link, useHistory } from 'react-router-dom';


const changeButtonTextEnter = event =>  event.target.innerText = "Acessar Portal Sinergia"
const changeButtonTextOut = event =>  event.target.innerText = "Enviar senha por e-mail"

export default function ForgotMyPassword(){
  const history = useHistory()

  function handleNavigate(){
    history.push('/')
    location.reload()
  }


  return(
    <FormWrapper>
      <img src={logo} alt="Logo unimed" />
      <Intro>Seja bem-vindo ao</Intro>
      <IntroHeading>Portal Sinergia <br /> Unimed Nordeste - RS</IntroHeading>
      <Input style={{marginBottom: 30}} placeholder='Digite seu e-mail' type="email" name='email' alt='Input email'/>
      <Link to="/">
      <Button 
        value="Enviar senha por e-mail"
        type="submit" 
        onMouseOver={changeButtonTextEnter} 
        onMouseOut={changeButtonTextOut} 
        onClick={handleNavigate}
      />
      </Link>
    </FormWrapper>
  )
}