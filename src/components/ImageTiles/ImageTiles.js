import React from 'react';
import './ImageTiles.css';

import Card from 'react-bootstrap/Card';

const ImageTiles = (props) => {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.img} />
      </Card>
    </>
  );
};

export default ImageTiles;