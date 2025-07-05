import React from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';

const Proveedores: React.FC = () => {
  return (
    <div>
      <h1>Proveedores</h1>
      <p>Contenido relacionado con proveedores.</p>

      <Row>
        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Antamina</Card.Title>
              <Card.Text>
                Empresa minera , provedor de servicios.
              </Card.Text>
              <Button variant="primary">Ver detalles</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Consorcio</Card.Title>
              <Card.Text>
                Proveedor de acciones .
              </Card.Text>
              <Button variant="primary">Ver detalles</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Proveedores;
