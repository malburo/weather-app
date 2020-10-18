import { Progress } from 'antd';
import React, { FC } from 'react';
import { Text } from '../common/Text';
import { Content, WrapperInfoCard } from './style';

interface Props {
  humidity: number;
}
export const HumidityCard: FC<Props> = ({ humidity }) => {
  return (
    <WrapperInfoCard>
      <Text size="medium">Humidity</Text>
      <Content>
        <Text size="large-2">{humidity}</Text>
        <span style={{ fontSize: 24, marginLeft: 10 }}>%</span>
      </Content>
      <Progress
        strokeColor={{
          '0%': '#108ee9',
          '100%': '#87d068',
        }}
        percent={humidity}
        style={{
          marginBottom: 25,
        }}
      />
    </WrapperInfoCard>
  );
};
