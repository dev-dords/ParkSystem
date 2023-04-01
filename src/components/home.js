import { Component } from 'react';
import {
  Nav,
  Navbar,
  Container,
  Offcanvas,
  NavDropdown,
  Form,
  Button,
} from 'react-bootstrap';
import {Link, Route, Routes } from 'react-router-dom';
import ParkForm from './parkform';
import ParkingLot from './parkinglot';
class Home extends Component {
  render() {
    return (
      <>
        {['sm'].map((expand) => (
          <Navbar
            key={expand}
            bg="dark"
            variant="dark"
            expand={expand}
            className="mb-3"
          >
            <Container fluid>
              <Navbar.Brand as={Link} to='/'>Mobile Parking System</Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link as={Link} to='/'>Home</Nav.Link>
                   
                    <Nav.Link as={Link} to='/new'>Book</Nav.Link>
                    {/* <NavDropdown
                      title="Dropdown"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item href="#action3">
                        Action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Something else here
                      </NavDropdown.Item>
                    </NavDropdown> */}
                  </Nav>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                  </Form>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
        
        <br />
        <main>
          <Container>
            <Routes>
              <Route path="/" element={<ParkingLot />} />
              <Route path="/new" element={<ParkForm />} />
              <Route path="/edit/:id" element={<ParkForm />} />
            </Routes>
          </Container>
        </main>
      </>
    );
  }
}
export default Home;
