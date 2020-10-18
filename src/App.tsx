import { Col, Row } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import { Content } from './component/Content';
import { SideBar } from './component/SideBar';
import { WeatherProvider } from './context/WeatherContext';

function App() {
  return (
    <WeatherProvider>
      <Row>
        <Col xs={24} lg={10} xl={6}>
          <SideBar />
        </Col>
        <Col xs={24} lg={14} xl={18}>
          <Content />
        </Col>
      </Row>
    </WeatherProvider>
  );
}

export default App;
