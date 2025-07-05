import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import Proveedores from './components/Proveedores';
import Articulos from './components/Articulos';
import Clientes from './components/Clientes';
import Ventas from './components/Ventas';
import './index.css'; // Esto importa los estilos globales
import './App.css'; // Esto importa los estilos para el contenido de la aplicación

const App: React.FC = () => {
  return (
    <Router>
      {/* Navbar fijo en la parte superior */}
      <Navbar bg="primary" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="/">MENU CON BOOSTRAP</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Proveedores</Nav.Link>
              <Nav.Link href="/articulos">Artículos</Nav.Link>
              <Nav.Link href="/clientes">Clientes</Nav.Link>
              <Nav.Link href="/ventas">Ventas</Nav.Link>

              {/* Dropdown para opciones adicionales */}
              <NavDropdown title="Más opciones" id="basic-nav-dropdown">
                <NavDropdown.Item href="/articulos">Nuevo Artículo</NavDropdown.Item>
                <NavDropdown.Item href="/clientes">Nuevo Cliente</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Contenedor de las rutas */}
      <Container className="mt-5">
        <Routes>
          <Route path="/" element={<Proveedores />} />
          <Route path="/articulos" element={<Articulos />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/ventas" element={<Ventas />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
