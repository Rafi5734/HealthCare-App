import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./class.css";

const Class = () => {
    return (
        <div className="mt-5 mb-5">
            <Container>
                <Row>
                    <div className="">
                        <h1 className="main-class-title">Class Details</h1>
                    </div>
                    <Col className="order-2">
                        <p className="lead">
                            It is imperative that everyone maximises the time
                            they spend exercising to help guarantee optimal
                            results from the commitment put into achieving each
                            calculated goal. In order for this to be effectively
                            accomplished every training session has to present a
                            measurable, progressive physical challenge in
                            respect of the undertaken cardiovascular or
                            resistance-based exercises. Twinned with completing
                            relatively unchallenging sessions most also fail in
                            their fitness attempts by not adhering to a weekly,
                            monthly or even quarterly training structure in
                            regards to exercise selection and programme length.
                            Unsurprisingly most who fall into this category are
                            also more likely to overlook the importance of
                            regularly monitoring their bodies adaptation to
                            training, in respect of performance results and
                            physical changes.
                        </p>
                        <Container>
                            <Row>
                                <Col className="class">
                                    <i className="fas fa-arrow-right mb-3">
                                        <span className="class-detail lead">
                                            15 mins warm up
                                        </span>
                                    </i>
                                    <i className="fas fa-arrow-right mb-3">
                                        <span className="class-detail lead">
                                            20 mins cardio
                                        </span>
                                    </i>
                                    <i className="fas fa-arrow-right mb-3">
                                        <span className="class-detail lead">
                                            20 min core focus
                                        </span>
                                    </i>

                                    <i className="fas fa-arrow-right mb-3">
                                        <span className="class-detail lead">
                                            20 min muscle focus
                                        </span>
                                    </i>
                                    <i className="fas fa-arrow-right mb-3">
                                        <span className="class-detail lead">
                                            15 mins cool down
                                        </span>
                                    </i>
                                    <i className="fas fa-arrow-right mb-3">
                                        <span className="class-detail lead">
                                            15 mins cool down
                                        </span>
                                    </i>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Class;
