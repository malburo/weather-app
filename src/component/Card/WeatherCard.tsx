import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { consolidatedWeather } from '../../context/WeatherContext';
import { Text } from '../common/Text';

const Wrapper = styled.div`
  text-align: center;
  min-width: 140px;
  width: 100%;
  padding: 10px;
  background-color: #1e213a;
  color: white;
  img {
    height: 60px;
  }
`;
const Temperature = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 20px 0px 0px 0px;
`;
interface Props {
  data: consolidatedWeather;
}
export const WeatherCard: FC<Props> = ({ data }) => {
  const { weather_state_abbr, min_temp, max_temp, applicable_date } = data;
  const [time, setTime] = useState<string>('');
  const event = new Date(applicable_date);
  useEffect(() => {
    setTime(
      event.toLocaleDateString('en-US', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
      }),
    );
  }, [event]);
  return (
    <Wrapper>
      <Text>{time}</Text>
      {weather_state_abbr && (
        <img
          src={require(`../../assets/img/${weather_state_abbr}.png`)}
          alt={weather_state_abbr}
        />
      )}
      <Temperature>
        <Text size="medium">{Math.round(min_temp)}°C</Text>
        <Text size="medium">{Math.round(max_temp)}°C</Text>
      </Temperature>
    </Wrapper>
  );
};
