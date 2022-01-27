import './App.css';
import MostAwarded from './components/MostAwarded';
import MostAwaited from './components/MostAwaited';
import Ranking from './components/Ranking';
import Welcome from './components/Welcome';
import * as React from 'react';
import Navbar from './components/Navbar.js';
import {Component} from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Routes, Route } from "react-router-dom";

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  },
});

export default class App extends Component {
  
  render() {
    return (
      <ThemeProvider theme={darkTheme}>
          <Navbar/>
          <Routes>
              <Route path='/' element={<Welcome/>}/>
              <Route path='/mostAwarded' element={<MostAwarded/>}/>
              <Route path='/mostAwaited' element={<MostAwaited/>}/>
              <Route path='/ranking' element={<Ranking/>}/>
          </Routes>
      </ThemeProvider>
    );
  } 
  // (
  //   // <div className="App">
  //   //   <Navbar/>
  //   //   <Welcome firstName="Alexander" />
  //   //   <MostAwarded />
  //   //   <Ranking/>
  //   // </div>
  //     <Navbar/>
  // );
}
