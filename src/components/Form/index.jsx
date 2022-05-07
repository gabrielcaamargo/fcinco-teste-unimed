import React from 'react';

import logo from '../../../assets/logo.png'

import { FormWrapper, Intro, IntroHeading, Input, PasswordLink, Button, KeepConnected } from '../../styles/GlobalStyle';

import { Link, useHistory } from 'react-router-dom';

import { userSchema } from '../../Validations/UserValidation';

export default function Form(){
  const history = useHistory()

  function handleNavigate(){
    history.push('/esqueci-minha-senha')
    location.reload()
  }

  const UserLoginValidation = async (event) => {
    event.preventDefault()

    let formData = {
      email: event.target[0].value,
      password: event.target[1].value,
    }

    const isFormValid = await userSchema.isValid(formData)
    
    const formValid = () => {
      setTimeout(()=>{
          alert('Sucesso ao entrar. Conectando...')  
          location.reload()
      }, 500)
    }

    const formUnvalid = () => {
      setTimeout(()=>{
          alert('E-mail ou senha incorreto')  
          location.reload()
      }, 500)
    }

    isFormValid
    ? formValid()
    : formUnvalid()
  }



  return( 

    <FormWrapper onSubmit={UserLoginValidation}>
      <img src={logo} alt="Logo unimed"/>
      <Intro>Seja bem-vindo ao</Intro>
      <IntroHeading>Portal Sinergia <br /> Unimed Nordeste - RS</IntroHeading>

      <Input type="text" placeholder="Email" name="email" />
      <Input type="password" placeholder='Senha' name="password" alt='Input email'/>
      <PasswordLink onClick={handleNavigate}>
        <Link id='link' to='/esqueci-minha-senha'>Esqueci minha senha</Link>
      </PasswordLink>


      <Button type="submit" value="Acessar Portal Sinergia" />

      <KeepConnected>
        <input type="checkbox" name=""/>
        Matenha-me conectado
      </KeepConnected>
    </FormWrapper>
  )
}