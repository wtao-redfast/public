import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import { WeatherContext } from "./viewModel/WeatherViewModel";

function App() {
    const weathers = useContext(WeatherContext);
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p> total cities {weathers.length}</p>
            </header>
        </div>
    );
}

export default App;
