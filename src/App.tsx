import 'antd/dist/antd.css';
import React from 'react';
import styled from 'styled-components';
import { Content } from './component/Content';
import { SideBar } from './component/SideBar';
import { WeatherProvider } from './context/WeatherContext';

const Wrapper = styled.div`
  display: flex;
`;
function App() {
  return (
    <WeatherProvider>
      <Wrapper>
        <SideBar />
        <Content />
      </Wrapper>
    </WeatherProvider>
  );
}

export default App;
