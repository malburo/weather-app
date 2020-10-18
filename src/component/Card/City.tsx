import React, { FC, useContext } from 'react';
import { WeatherContext } from '../../context/WeatherContext';
import { Text } from '../common/Text';
import { WrapperCityCard } from './style';

export const CityCard: FC<any> = ({ info }) => {
  const { setWoeid } = useContext(WeatherContext);
  const { title, woeid } = info;
  const handleClickCityCard = (woeid: string) => {
    setWoeid(woeid);
  };
  return (
    <WrapperCityCard onClick={e => handleClickCityCard(woeid)}>
      <Text size="medium">{title}</Text>
    </WrapperCityCard>
  );
};
