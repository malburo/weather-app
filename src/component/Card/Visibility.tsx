import React, { FC } from 'react';
import { Text } from '../common/Text';
import { Content, WrapperInfoCard } from './style';

interface Props {
  visibility: number;
}
export const VisibilityCard: FC<Props> = ({ visibility }) => {
  return (
    <WrapperInfoCard>
      <Text size="medium">Visibility</Text>
      <Content>
        <Text size="large-2">{visibility}</Text>
        <span style={{ fontSize: 24, marginLeft: 10 }}>miles</span>
      </Content>
    </WrapperInfoCard>
  );
};
