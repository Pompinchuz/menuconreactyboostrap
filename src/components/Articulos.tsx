import React from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';

const Articulos: React.FC = () => {
  return (
    <div>
      <h1>Artículos</h1>
      <p>PERU - ARTICULOS EN VENTA.</p>

      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>PLAY STATION</Card.Title>
              <Card.Text>
                play station 5 con 1TB de almacenamiento
              </Card.Text>
              <Button variant="success">Ver más</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Lavadora</Card.Title>
              <Card.Text>
                Lavadora Samsung de ultima generacion.
              </Card.Text>
              <Button variant="success">Ver más</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Articulos;
