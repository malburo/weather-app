import { Col, Row } from 'antd';
import React, { FC, useContext } from 'react';
import styled from 'styled-components';
import { WeatherContext } from '../context/WeatherContext';
import { AirPressureCard } from './Card/AirPressure';
import { HumidityCard } from './Card/Humidity';
import { VisibilityCard } from './Card/Visibility';
import { Text } from './common/Text';
import { WeatherCard } from './Card/WeatherCard';
import { WindStatusCard } from './Card/WindStatus';

const Wrapper = styled.div`
  background-color: #100e1d;
  width: 100%;
  min-height: 100vh;
  padding: 50px 100px;
  z-index: 1;
`;
const CardList = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TodayHighlight = styled.div`
  color: white;
  margin-top: 72px;
`;

export const Content: FC = () => {
  const { data } = useContext(WeatherContext);
  const { consolidated_weather } = data;
  const {
    wind_direction,
    humidity,
    visibility,
    air_pressure,
  }: any = consolidated_weather[0];
  return (
    <Wrapper>
      <CardList>
        <Row
          style={{ width: '100%', margin: 0 }}
          justify="space-between"
          align="middle"
          gutter={[20, 20]}
        >
          {consolidated_weather
            .filter((item, index) => index > 0)
            .map(item => (
              <Col sm={12} xl={4} key={item.id}>
                <WeatherCard data={item} />
              </Col>
            ))}
        </Row>
      </CardList>
      <TodayHighlight>
        <Text size="medium">Today Hightlight</Text>
        <Row gutter={[48, 48]}>
          <Col sm={24} xl={12}>
            <WindStatusCard windDirection={Math.round(wind_direction)} />
          </Col>
          <Col sm={24} xl={12}>
            <HumidityCard humidity={humidity} />
          </Col>
          <Col sm={24} xl={12}>
            <VisibilityCard visibility={Math.round(visibility)} />
          </Col>
          <Col sm={24} xl={12}>
            <AirPressureCard airPressure={air_pressure} />
          </Col>
        </Row>
      </TodayHighlight>
    </Wrapper>
  );
};
