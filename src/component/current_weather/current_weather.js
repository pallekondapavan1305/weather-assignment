import "./current_weather.css";

const CurrentWeather = ({data}) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="discription">{data.weather[0].description}</p>
        </div>
        <img alt="weather_image" className="weather_icon" src={`icons/${data.weather[0].icon}.png`} />
      </div>
      <div className="button">
        <p className="temperature">{Math.round(data.main.temp)}*C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">{Math.round(data.main.feels_like)}*C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">wind</span>
            <span className="parameter-value">{Math.round(data.wind.speed)} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">humidity</span>
            <span className="parameter-value">{Math.round(data.main.humidity)}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{Math.round(data.main.pressure)} hpa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
