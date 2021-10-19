import React from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import "./class-trainers.css";
import Trainer1 from "../../trainer1.jpg";
import Trainer2 from "../../trainer2.jpg";
import Trainer3 from "../../trainer3.jpg";
const ClassTrainers = () => {
    return (
        <div className="mt-5 mb-5">
            <h1 className="text-center trainer-title">Class Trainers</h1>
            <Container fluid>
                <Row>
                    <Col>
                        <Card style={{ width: "18rem", marginTop: "2rem" }}>
                            <Card.Img variant="top" src={Trainer1} />
                            <Card.Body>
                                <Card.Title>JAMS SMITH</Card.Title>
                                <Card.Text className="lead">
                                    Senior Trainer & Instructor
                                </Card.Text>
                                <Button variant="primary">
                                    Know More About Him
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: "18rem", marginTop: "2rem" }}>
                            <Card.Img variant="top" src={Trainer2} />
                            <Card.Body>
                                <Card.Title>DAVID ANKLE</Card.Title>
                                <Card.Text className="lead">
                                    Senior Trainer & Instructor
                                </Card.Text>
                                <Button variant="primary">
                                    Know More About Him
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: "18rem", marginTop: "2rem" }}>
                            <Card.Img variant="top" src={Trainer3} />
                            <Card.Body>
                                <Card.Title>ANNA SPARTAN</Card.Title>
                                <Card.Text className="lead">
                                    Senior Trainer & Instructor
                                </Card.Text>
                                <Button variant="primary">
                                    Know More About HER
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ClassTrainers;
