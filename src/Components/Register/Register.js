import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import RegisterImg from "../../registration.svg";
import "./register.css";
const Register = () => {
    const {
        signInUsingGoogle,
        handleRegistrations,
        handleEmailChange,
        handlePasswordChange,
        error,
        handleUserNameChange,
    } = useAuth();

    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || "/home";
    // console.log(location.state?.from);

    const handleGoogleLogin = () => {
        signInUsingGoogle().then(() => {
            history.push(redirect_uri);
        });
    };
    return (
        <Container>
            <h1 className="text-center mt-5 mb-5">Create a new account.</h1>

            <Container>
                <Row>
                    <Col>
                        <img src={RegisterImg} className="img-fluid" />
                    </Col>
                    <Col>
                        <Form onSubmit={handleRegistrations}>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicName"
                            >
                                <Form.Label className="lead">
                                    Your Name
                                </Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Enter Your Name"
                                    onChange={handleUserNameChange}
                                />
                            </Form.Group>

                            <Form.Group
                                className="mb-3 lead"
                                controlId="formBasicEmail"
                            >
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    required
                                    type="email"
                                    onChange={handleEmailChange}
                                    placeholder="Enter Your Email"
                                />
                            </Form.Group>

                            <Form.Group
                                className="mb-3 lead"
                                controlId="formBasicPassword"
                            >
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    required
                                    type="password"
                                    placeholder="Password"
                                    onChange={handlePasswordChange}
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3 lead"
                                controlId="formBasicCheckbox"
                            >
                                <Form.Check
                                    type="checkbox"
                                    label="Check me out"
                                />
                            </Form.Group>
                            <div>
                                <p>{error}</p>
                            </div>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <div className="register-footer">
                <span className="lead">
                    Already Have an Account?<Link to="/signin">Sign In</Link>
                </span>
                <div>
                    <p className="lead mt-5 mb-5">Or Connect With Google</p>
                </div>
                <button
                    type="button"
                    class="btn btn-outline-success"
                    onClick={handleGoogleLogin}
                >
                    Google Sign In
                </button>
            </div>
        </Container>
    );
};

export default Register;
