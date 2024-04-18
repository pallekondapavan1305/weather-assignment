import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";
import "./forecast.css";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dainawwek = new Date().getDay();
  const forcastDays = WEEK_DAYS.slice(dainawwek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dainawwek)
  );
  console.log(forcastDays);
  return (
    <>
      <label className="title">Daitly </label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily_item">
                  <img
                    alt="weather"
                    className="icon-small"
                    src={`icons/${item.weather[0].icon}.png`}
                  />
                  <label className="day">{forcastDays[idx]}</label>
                  <label className="description">
                    {item.weather[0].description}
                  </label>
                  <label className="min_max">
                    {Math.round(item.main.temp_min)}*C /{" "}
                    {Math.round(item.main.temp_max)}*C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily_details_grid">
                <div className="daily_details_items">
                  <label>Pressure</label>
                  <label>{item.main.pressure}hpa</label>
                </div>
                <div className="daily_details_items">
                  <label>humidity</label>
                  <label>{item.main.humidity}%</label>
                </div>
                <div className="daily_details_items">
                  <label>clouds</label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div className="daily_details_items">
                  <label>Wind</label>
                  <label>{item.wind.speed} m/s</label>
                </div>
                <div className="daily_details_items">
                  <label>Sea level</label>
                  <label>{item.main.sea_level} m/s</label>
                </div>
                <div className="daily_details_items">
                  <label>Feels like</label>
                  <label>{item.main.feels_like} *C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
