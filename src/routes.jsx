import React from 'react';

import { Route, Switch } from 'react-router-dom'

import Form from './components/Form';
import ForgotMyPassword from './components/ForgotMyPassword';

export default function Routes(){
  return(
    <Switch>
      <Route exact path="/" component={Form}/>
      <Route exact path="/esqueci-minha-senha" component={ForgotMyPassword} />
    </Switch>
  )
}