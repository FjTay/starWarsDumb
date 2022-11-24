import { Link, useParams } from "react-router-dom";
import planets from "./services/planetData";
import "./Page.css";
import "./PlanetCard.css";
import weatherIcon from "./services/weatherIcon";

function PlanetCardRight() {
  const { planet } = useParams();
  return (
    <div className="planet-card-right">
      <img
        src={weatherIcon(planet, "PlanetsForCard")}
        alt="planet"
      />
      <div id="container-text-right">
        <p className="text-right">{planets[planet].text}</p>
      </div>
      <Link to={`/planets/${planet}/info`}>
        <button className="right-button" type="button">
          Would like to know more ?
        </button>
      </Link>
      <Link to={`/planets/${planet}/comments`}>
        <button type="button">comments</button>
      </Link>
    </div>
  );
}

export default PlanetCardRight;
