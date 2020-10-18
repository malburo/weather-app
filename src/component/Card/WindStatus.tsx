import React, { FC } from 'react';
import { Text } from '../common/Text';
import { Content, WrapperInfoCard } from './style';

interface Props {
  windDirection: number;
}
export const WindStatusCard: FC<Props> = ({ windDirection }) => {
  return (
    <WrapperInfoCard>
      <Text size="medium">Wind Status</Text>
      <Content>
        <Text size="large-2">{windDirection}</Text>
        <span style={{ fontSize: 24, marginLeft: 10 }}>mph</span>
      </Content>
      <Text size="medium">WPS</Text>
    </WrapperInfoCard>
  );
};
