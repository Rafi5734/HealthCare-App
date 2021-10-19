import React, { useContext, useEffect, useState } from "react";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RingContext } from "../../App";
import useAuth from "../../Hooks/useAuth";
import useFirebase from "../../Hooks/useFirebase";
import useNumber from "../../Hooks/useNumber";
import "./header.css";
import Logo from "../../GYM_logo.jpg";

const Header = () => {
    const { user, googleSignOut, btn } = useAuth();

    return (
        <div className="header">
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#">
                        <img src={Logo} style={{ width: "5rem" }} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 nav-links"
                            style={{ maxHeight: "100px" }}
                            navbarScroll
                        >
                            <Link to="/home" className="navbar-link">
                                Home
                            </Link>
                            <Link to="/service" className="navbar-link">
                                Classes
                            </Link>

                            <Link to="/about" className="navbar-link">
                                About Us
                            </Link>
                        </Nav>
                        <Form className="d-flex">
                            {user.displayName ? (
                                <div>
                                    <span className="user-name">
                                        {user.displayName}
                                    </span>
                                    <Button
                                        variant="outline-success sign-btn text-nowrap"
                                        onClick={googleSignOut}
                                    >
                                        Sign Out
                                    </Button>
                                </div>
                            ) : (
                                <div>
                                    <Button variant="outline-success sign-btn text-nowrap">
                                        <Link to="/signin">Sign In</Link>
                                    </Button>
                                </div>
                            )}
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
