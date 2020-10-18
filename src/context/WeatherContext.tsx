import Axios from 'axios';
import React, { FC, useEffect, useState } from 'react';

export interface consolidatedWeather {
  applicable_date: any;
  id: number;
  max_temp: number;
  min_temp: number;
  the_temp: number;
  weather_state_abbr: string;
  weather_state_name: string;
  wind_direction: number;
  humidity: number;
  visibility: number;
  air_pressure: number;
}

export interface WeatherResponse {
  data: {
    consolidated_weather: consolidatedWeather[];
    title: string;
  };
  setWoeid: (id: string) => void;
}

export const WeatherContext = React.createContext<WeatherResponse>({
  data: {
    consolidated_weather: [],
    title: '',
  },
  setWoeid: () => {},
});

export const WeatherProvider: FC = ({ children }) => {
  const [woeid, setWoeid] = useState('1236594');
  const [data, setData] = useState({
    consolidated_weather: [
      {
        applicable_date: '',
        id: 0,
        max_temp: 0,
        min_temp: 0,
        the_temp: 0,
        weather_state_abbr: '',
        weather_state_name: '',
        wind_direction: 0,
        humidity: 0,
        visibility: 0,
        air_pressure: 0,
      },
    ],
    title: '',
  });
  useEffect(() => {
    const fetchData = async () => {
      const response = await Axios.get(
        `https://www.metaweather.com/api/location/${woeid}`,
      );
      setData(response.data);
    };
    fetchData();
  }, [woeid]);
  return (
    <WeatherContext.Provider value={{ data, setWoeid }}>
      {children}
    </WeatherContext.Provider>
  );
};
