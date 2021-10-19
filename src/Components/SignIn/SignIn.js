import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import SignInImg from "../../login.svg";
import "./signin.css";
const SignIn = () => {
    const { user, signInUsingGoogle, processLogin } = useAuth();
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
            <h1 className="text-center mt-5 mb-5 signin-title"> Sign In</h1>
            <Container>
                <Row>
                    <Col>
                        <img src={SignInImg} className="img-fluid" />
                    </Col>
                    <Col>
                        <Form onSubmit={processLogin}>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                            >
                                <Form.Label className="lead">
                                    Email address
                                </Form.Label>
                                <Form.Control
                                    type="email"
                                    required
                                    placeholder="Enter email"
                                />
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="formBasicPassword"
                            >
                                <Form.Label className="lead">
                                    Password
                                </Form.Label>
                                <Form.Control
                                    required
                                    type="password"
                                    placeholder="Password"
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
                                <Button
                                    variant="primary"
                                    type="submit"
                                    onClick={processLogin}
                                >
                                    Submit
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
            {/*  */}

            <div className="signin-footer mt-5">
                <p className="lead">
                    New to this application?{" "}
                    <Link to="/register">Create a new account.</Link>
                </p>
                <div>
                    <p className="lead">Or Connect With Google</p>
                </div>

                <button
                    type="button"
                    className="btn btn-outline-success mb-5"
                    onClick={handleGoogleLogin}
                >
                    Google Sign In
                </button>
            </div>
        </Container>
    );
};

export default SignIn;
