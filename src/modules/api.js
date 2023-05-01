const apiKey = 'df7ac5c99d7c7f788e64ec68ba2508a3';

const fetchData = function (URL, callback) {
    fetch(`${URL}&appid=${apiKey}`)
        .then((res) => res.json())
        .then((data) => callback(data));
};

const url = {
    currentWeather(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`;
    },
    forecast(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`;
    },
    airPollution(lat, lon) {
        return `http://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`;
    },
    reverseGeo(lat, lon) {
        return `http://api.openweathermap.org/geo/1.0/reverse?${lat}&${lot}&limit=5`;
    },
    geo(query) {
        return `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`;
    },
};

export { fetchData };
export { url };
