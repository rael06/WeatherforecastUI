import { Button } from "@mui/material";
import React from "react";
import classes from "./App.module.scss";

type Weather = {
  temperatureC: number;
  temperatureF: number;
  summary: string;
};

function App() {
  const [weathers, setWeathers] = React.useState<Weather[]>([]);

  async function handleClick() {
    console.log("hello world");
    const weatherForecastResponse = await fetch(
      "http://localhost:7999/WeatherForecast"
    );
    setWeathers(await weatherForecastResponse.json());
  }

  return (
    <div className={classes.App}>
      <div className={classes.headerSection}>
        <Button color="primary" variant="outlined" onClick={handleClick}>
          Weatherforecast
        </Button>
      </div>

      <div className={classes.bodySection}>
        {weathers.map((weather) => (
          <div
            key={`${weather.summary}${weather.temperatureC}${weather.temperatureF}`}
            className={classes.weather}
          >
            <p>{weather.summary}</p>
            <p>{weather.temperatureC}</p>
            <p>{weather.temperatureF}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
