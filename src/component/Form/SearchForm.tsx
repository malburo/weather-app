import Search from 'antd/lib/input/Search';
import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 40px;
`;
interface Props {
  onSubmit: (formValues: any) => void;
  loading: boolean;
}
export const SearchForm: FC<Props> = ({ onSubmit, loading }) => {
  return (
    <Wrapper>
      <Search
        onSearch={onSubmit}
        placeholder="input search text"
        enterButton="Search"
        size="large"
        loading={loading}
      />
    </Wrapper>
  );
};
