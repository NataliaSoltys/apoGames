import './App.css';
import { MostAwarded } from './components/MostAwarded';
import { Ranking } from './components/Ranking';
import Welcome from './components/Welcome';
import 'bootstrap/dist/css/bootstrap.css';
import * as React from 'react';
import Navbar from './components/Navbar.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Welcome firstName="Alexander" />
      <MostAwarded />
      <Ranking/>
    </div>
  );
}

export default App;
