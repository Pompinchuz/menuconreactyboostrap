import React from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';

const Ventas: React.FC = () => {
  return (
    <div>
      <h1>Ventas</h1>
      <p>Explora tus ventas.</p>

      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Venta 1</Card.Title>
              <Card.Text>
                Esta venta fue realiza el dia 04/07/2025.
              </Card.Text>
              <Button variant="warning">Ver detalles</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Venta 2</Card.Title>
              <Card.Text>
                Venta de 100 soles .
              </Card.Text>
              <Button variant="warning">Ver detalles</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Ventas;
