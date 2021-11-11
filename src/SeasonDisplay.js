import "./SeasonDisplay.css";
import react from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};
const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date());
  const { text, iconName } =
    season === "winter"
      ? { text: "Brr... It's Chilly", iconName: "snowflake" }
      : { text: "Let Go To The Beach!", iconName: "sun" };
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`}></i>
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`}></i>
    </div>
  );
};

export default SeasonDisplay;
