import React, { useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import { WeatherContext } from "./viewModel/WeatherViewModel";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

function App() {
    const weathers = useContext(WeatherContext);
    return (
        <div className="App">
            <header className="App-header">
                {weathers.map((weather, index) => (
                    <Paper
                        key={index}
                        style={{ width: "500px", marginTop: "50px" }}
                    >
                        <Typography variant="h5" component="h3">
                            {weather.city}
                        </Typography>
                        <Typography component="p">
                            {Math.round(weather.temperature).toString() + "℃"}
                        </Typography>
                    </Paper>
                ))}
            </header>
        </div>
    );
}

export default App;
