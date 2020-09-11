import React, { Component } from 'react';

import Switch from './src/navigations/switchNaviation'
import {createAppContainer} from 'react-navigation'

const AppContainer=createAppContainer(Switch)

const App=()=>{

return (
  <AppContainer />

  
)

}


export default App