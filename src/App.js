import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Wrapper from './components/Wrapper/Wrapper';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function App() {
  return (
    <Row>
      <Col className="text-center">
        <Header />
        <Wrapper />
      </Col>
    </Row>
  );
}

export default App;
