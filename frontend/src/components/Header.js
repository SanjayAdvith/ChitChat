import React from 'react'
//import { LinkContainer } from 'react-router-bootstrap'
import { Container, Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap'
const Header = () => {
    return (
        <header>
            <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary">
                <Container>
                    <Navbar.Brand href="#">ChitChat</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="my-2 my-lg-0 cart"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Link</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="mr-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
