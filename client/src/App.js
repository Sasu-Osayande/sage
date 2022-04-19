import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
import Login from '../src/components/Login/Login';

function App() {

  useEffect(() => {
    axios.get('http://localhost:8080/')
    .then((response) => {
      console.log("Response:", response);
    });
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Sage </p>
        <div nav>
        <ul>
          <ol> About Us </ol>
          <ol> Login </ol>
          <ol> Register </ol>
        </ul>
        </div>
      </header>
      <div className="main">
        <h1>Sage</h1>
        </div>      
        <footer className="footer">
        <ul>
          <ol> Follow Us </ol>
          <ol> Contact Us </ol>
          <ol> About Us </ol>
        </ul>
      </footer>
    </div>
  );
}

export default App;
