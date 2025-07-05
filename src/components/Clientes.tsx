import React from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';

const Clientes: React.FC = () => {
  return (
    <div>
      <h1>Clientes</h1>
      <p>Contenido relacionado con clientes.</p>

      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Jesus Antonio HUilla Rosillo</Card.Title>
              <Card.Text>
                U2222008 Estudiante de UTP.
              </Card.Text>
              <Button variant="info">Ver detalles</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Juan Roque Salinas Carpio</Card.Title>
              <Card.Text>
                U22224050 Estudiante de USAT
              </Card.Text>
              <Button variant="info">Ver detalles</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Clientes;
