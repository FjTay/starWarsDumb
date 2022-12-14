import axios from "axios";

function fetchData(data) {
    console.log("FETCH")
  return axios
    .get(
        `https://api.open-meteo.com/v1/forecast?latitude=${data.lat}&longitude=${data.long}&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,rain_sum,showers_sum,snowfall_sum,windspeed_10m_max,winddirection_10m_dominant&timezone=Europe%2FBerlin`    )
    .then((res) => res.data);
}

export default fetchData;