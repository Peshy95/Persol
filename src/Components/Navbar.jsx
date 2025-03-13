import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import RBNavbar from 'react-bootstrap/Navbar'; 
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'


function CombinedNavbar() {  
  const [visitorCount, setVisitorCount] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    setVisitorCount((prev) => prev + 1);
    const timer = setInterval(() => setCurrentTime(new Date().toLocaleString()), 1000);
    return () => clearInterval(timer);
  }, [])

  return (
    <RBNavbar className='navbar'>
      <Container >
        <RBNavbar.Brand href="#home" >
          Persal <span className="visitor-count">Visitors: {visitorCount}</span>
        </RBNavbar.Brand>
        <RBNavbar.Toggle aria-controls="basic-navbar-nav" />
        <RBNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="/sunglasses">Sunglasses</NavDropdown.Item>
              <NavDropdown.Item href="/contact lensses">contact lensses</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Frames</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            {/* Additional links as needed */}
          </Nav>
          <div className="current-time">
            {currentTime}
          </div>
        </RBNavbar.Collapse>
      </Container>
    </RBNavbar>
  );
}

export default CombinedNavbar;
