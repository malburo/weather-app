import Axios from 'axios';
import React, { FC, useContext, useState } from 'react';
import styled from 'styled-components';
import clearWhite from '../assets/img/clear-white.svg';
import cloudBackground from '../assets/img/Cloud-background.png';
import gpsWhite from '../assets/img/gps-white.svg';
import { WeatherContext } from '../context/WeatherContext';
import { CityCard } from './Card/City';
import { Text } from './common/Text';
import { SearchForm } from './Form/SearchForm';

const SideBarWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: #1e213a;
  text-align: center;
  color: white;
  font-size: 40px;
  padding: 40px 0px;
  position: relative;
`;

const Weather = styled.div`
  position: relative;
  height: 376px;
  display: flex;
  justify-content: center;
  align-items: center;
  &::before {
    content: '';
    background-image: url(${cloudBackground});
    position: absolute;
    top: 0;
    width: 100%;
    height: 376px;
    opacity: 0.05;
    display: inline-block;
    vertical-align: middle;
  }
`;
const WeatherImage = styled.img`
  height: 234px;
`;
const Button = styled.button`
  font-size: 16px;
  padding: 10px 20px;
  background-color: #6e707a;
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #595b63;
  }
`;
const GpsImage = styled.img`
  padding: 10px;
  background-color: #6e707a;
  border-radius: 50%;
`;
const ClearImage = styled.img`
  position: absolute;
  right: 46px;
  top: 30px;
  height: 30px;
  cursor: pointer;
`;
const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px 50px 0px 50px;
`;
const SearchComponent = styled.div`
  width: 100%;
  margin-top: 40px;
  padding: 0px 50px;
`;
interface CityType {
  title: string;
  woeid: number;
}

export const SideBar: FC = () => {
  const { data } = useContext(WeatherContext);
  const [cities, setCities] = useState<CityType[]>([]);
  const [toggle, setToggle] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const { consolidated_weather, title } = data;
  const {
    weather_state_abbr,
    the_temp,
    weather_state_name,
    applicable_date,
  }: any = consolidated_weather[0];

  const handleChangeSearchForm = async (value: string) => {
    try {
      setIsSearching(true);
      const response = await Axios.get(
        `https://www.metaweather.com/api/location/search/?query=${value}`,
      );
      setIsSearching(false);
      setCities(response.data.splice(0, 10));
    } catch (error) {
      console.log(error);
      setIsSearching(false);
    }
  };
  const handleClickSearchButton = () => {
    setToggle(true);
  };
  const handleClickCityCard = () => {
    setToggle(false);
  };
  const handleClear = () => {
    setToggle(false);
  };
  return (
    <SideBarWrapper>
      {toggle && (
        <SearchComponent>
          <ClearImage src={clearWhite} alt="clearWhite" onClick={handleClear} />
          <SearchForm onSubmit={handleChangeSearchForm} loading={isSearching} />
          {cities.length === 0 && <Text size="medium">Nothing here!</Text>}
          {cities.map(city => (
            <div onClick={handleClickCityCard} key={city.woeid}>
              <CityCard info={city} />
            </div>
          ))}
        </SearchComponent>
      )}
      {!toggle && (
        <>
          <TopBar>
            <Button onClick={handleClickSearchButton}>Search for places</Button>
            <GpsImage src={gpsWhite} alt="gpsWhite" />
          </TopBar>

          <Weather>
            {weather_state_abbr !== '' && (
              <WeatherImage
                src={require(`../assets/img/${weather_state_abbr}.png`)}
                alt="Shower"
              />
            )}
          </Weather>

          <p style={{ fontSize: 100 }}>
            {Math.round(the_temp)}
            °C
          </p>
          <Text size="large">{weather_state_name}</Text>
          <Text size="medium">{applicable_date}</Text>
          <Text size="medium">{title}</Text>
        </>
      )}
    </SideBarWrapper>
  );
};
