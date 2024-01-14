// Importing necessary styles and components
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button, Card, Container, Form, ListGroup, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import './App.css';

// App component function
function App() {
    return (
        <>
            {/* Start NavBar */}
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#">Welcome To Audi</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="https://www.audi.fr/fr/web/fr.html">Home</Nav.Link>
                            <Nav.Link href="https://www.instagram.com/audiofficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">Link</Nav.Link>
                            <NavDropdown title="My Links" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="https://www.instagram.com/___azer21___/">My Instagram</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">My Discord </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
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
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* End NavBar */}

            <div className="carddsss">
                {/* Start First Card */}
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://i.pinimg.com/564x/71/41/5a/71415a7f638cb1d4f9493a877d924858.jpg" height={"300px"} />
                    <Card.Body>
                        <Card.Title>Audi A8</Card.Title>
                        <Card.Text>
                            The Audi A8 was presented in February 1994 and debuted at the 1994 Geneva Auto Show in March, with full-scale factory production commencing in June.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>$88,000</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="https://www.tiktok.com/@cartvpress/video/7168380817197092101?is_from_webapp=1&sender_device=pc&web_id=7287724770635318789">See More</Card.Link>
                        <Card.Link href="https://www.tiktok.com/@audiworld_official/video/7027363102328982789?is_from_webapp=1&sender_device=pc&web_id=7287724770635318789">See More</Card.Link>
                    </Card.Body>
                </Card>
                {/* End First Card */}

                {/* Start Second Card */}
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://i.pinimg.com/564x/a5/16/30/a51630f4b9663fd3bb872bf024bb9074.jpg" height={"300px"} />
                    <Card.Body>
                        <Card.Title>Audi RS7</Card.Title>
                        <Card.Text>
                            Created as a high-powered vehicle based on the Audi A7 Sportback and S7 Sportback, the RS 7 debuted for the 2014 model year.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>$160,000</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="https://www.tiktok.com/@prismatvv/video/7261643362032291077?is_from_webapp=1&sender_device=pc&web_id=7287724770635318789">See More</Card.Link>
                        <Card.Link href="https://www.tiktok.com/@sneakyhero93/video/7193718095662419206?is_from_webapp=1&sender_device=pc&web_id=7287724770635318789">See More</Card.Link>
                    </Card.Body>
                </Card>
                {/* End Second Card */}

                {/* Start Third Card */}
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://i.pinimg.com/564x/5d/3a/db/5d3adb9fda422744a569510ede2f9576.jpg" height={"300px"} />
                    <Card.Body>
                        <Card.Title>Audi RS6</Card.Title>
                        <Card.Text>
                            The C6 RS 6 Avant was launched in April 2008, and the four-door saloon/sedan was available from August 2008.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>$140,000</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="https://www.tiktok.com/@xeliwz_/video/7313750340652813573?is_from_webapp=1&sender_device=pc&web_id=7287724770635318789">See More</Card.Link>
                        <Card.Link href="https://www.tiktok.com/@villaky/video/7078666652631567622?is_from_webapp=1&sender_device=pc&web_id=7287724770635318789">See More</Card.Link>
                    </Card.Body>
                </Card>
                {/* End Third Card */}
            </div>
        </>
    );
}

export default App;
