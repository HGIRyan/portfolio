import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';


// --IMPORTING COMPONTENTS--
import App from './App'



export default (
    <Switch>
        <Route exact path='/' component={App} />
    </Switch>
)