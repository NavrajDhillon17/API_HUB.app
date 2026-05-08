import React from 'react';
import bg1 from '../images/bg1.jpg';
import { useState, useEffect } from 'react';
import '/node_modules/bootstrap/dist/css/bootstrap.css';
const getWeatherEmoji = (weather, icon) => {
  const isNight = icon.includes("n");

  switch (weather) {
    case "Clear":
      return isNight ? "🌙" : "☀️";

    case "Clouds":
      return isNight ? "☁️🌙" : "🌥️";

    case "Rain":
      return "🌧️";

    case "Drizzle":
      return "🌦️";

    case "Thunderstorm":
      return "⛈️";

    case "Snow":
      return "❄️";

    case "Mist":
    case "Fog":
    case "Haze":
      return "🌫️";

    default:
      return isNight ? "🌙" : "🌥️";
  }
};
export default function Weather() {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const [search, searchCity] = useState("");
  const [data, setData] = useState(null)
  useEffect(() => {
    if (!search || search.trim() === "") {
      setError("");
      setData(null);
      return;
    }
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=39349a41c4ec1a1c9cf5bbbac4781273&units=metric`)
      .then(response => response.json()).then(data => {
        if (data.cod !== 200) {
          setError("City not found 😢");
          setData(null);
        }
        else {
          setData(data);
          setError("");

        }
      }
      ).catch(err => {
        console.log(err);
        setError("Something went wrong 😥");
      });
  }, [search])

  return (
    <div style={{
      minHeight: '100vh',
      backgroundImage: `url(${bg1})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
    }}>
      <div style={{
        minHeight: '100vh',
        background: 'rgba(10, 20, 50, 0.55)',
        paddingBottom: '50px'
      }}>
      <div className="hero text-center pt-5">

        <h1 className="mb-4 fw-bold mt-5" style={{ color: '#fff', textShadow: '0 2px 12px rgba(0,0,0,0.4)' }}>
          🌥️ Weather Forecast ✨
        </h1>
        <input className="form-control rounded-pill w-50 mx-auto shadow-sm mb-4 border-0 text-center"
          style={{ height: '55px' }}
          type="text"
          placeholder="🔍 Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              searchCity(city);
            }
          }}
        />

        {error && <div className="alert alert-danger w-50 mx-auto rounded-pill fw-bold border-0 shadow-sm">{error}</div>}
        {!data &&
          <div className="container text-center mt-5">
            <div className="row justify-content-center g-4">
              <div className="col-lg-4 col-md-8 col-sm-10">
                <div className="welcome-card text-center p-4 shadow-sm">
                  <h4 className="fw-bold" style={{ color: '#555' }}>🌍 Search Any City</h4>
                  <p className="text-secondary fw-bold">Get real-time weather updates worldwide.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-8 col-sm-10">
                <div className="welcome-card text-center p-4 shadow-sm">
                  <h4 className="fw-bold" style={{ color: '#555' }}>🌤️ Weather Forecast</h4>
                  <p className="text-secondary fw-bold">Check the weather in any city around the world.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-8 col-sm-10">
                <div className="welcome-card text-center p-4 shadow-sm">
                  <h4 className="fw-bold" style={{ color: '#555' }}>⚡ Fast & Simple</h4>
                  <p className="text-secondary fw-bold">Just type a city name and press Enter.</p>
                </div>
              </div>
            </div>
          </div>


        }
        {data && (

          <>
            <div className="container mt-4">
              <div className="row justify-content-center g-4">

                <div className="col-lg-4 col-md-6">
                  <div className="weather-card text-center p-5 shadow-sm">

                    <h2 className="fw-bold cute-title">{data.name}</h2>

                    <div className="weather-emoji">
                      {getWeatherEmoji(
                        data.weather[0].main,
                        data.weather[0].icon
                      )}
                    </div>

                    <h1 className="display-3 fw-bold" style={{ color: '#444' }}>
                      {Math.round(data.main.temp)}°C
                    </h1>

                    <p className="text-capitalize fs-5 fw-bold text-secondary">
                      {data.weather[0].description}
                    </p>

                  </div>
                </div>

              </div>
            </div>

            <div className="container mt-4 mb-4">
              <div className="row justify-content-center g-4">

                <div className="col-md-3">
                  <div className="weather-card text-center p-4 shadow-sm">
                    <h6 className="fw-bold text-secondary">🌡️ Feels Like</h6>
                    <h4 className="fw-bold mt-2" style={{ color: '#555' }}>{Math.round(data.main.feels_like)}°C</h4>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="weather-card text-center p-4 shadow-sm">
                    <h6 className="fw-bold text-secondary">💧 Humidity</h6>
                    <h4 className="fw-bold mt-2" style={{ color: '#555' }}>{data.main.humidity}%</h4>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="weather-card text-center p-4 shadow-sm">
                    <h6 className="fw-bold text-secondary">🧭 Pressure</h6>
                    <h4 className="fw-bold mt-2" style={{ color: '#555' }}>{data.main.pressure} hPa</h4>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="weather-card text-center p-4 shadow-sm">
                    <h6 className="fw-bold text-secondary">🍃 Wind</h6>
                    <h4 className="fw-bold mt-2" style={{ color: '#555' }}>{(data.wind.speed * 3.6).toFixed(1)} km/h</h4>
                  </div>
                </div>

              </div>
            </div>

          </>
        )}

      </div>
      </div>
    </div>

  );
}