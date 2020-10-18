import React, { FC } from 'react';
import { Text } from '../common/Text';
import { Content, WrapperInfoCard } from './style';

interface Props {
  airPressure: number;
}
export const AirPressureCard: FC<Props> = ({ airPressure }) => {
  return (
    <WrapperInfoCard>
      <Text size="medium">Air Pressure</Text>
      <Content>
        <Text size="large-2">{airPressure}</Text>
        <span style={{ fontSize: 24, marginLeft: 10 }}>mb</span>
      </Content>
    </WrapperInfoCard>
  );
};
