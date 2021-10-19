import React from "react";
import "./top-banner.css";
import BannerLogo from "../../young-fitness-man-studio.jpg";
import BannerLogo2 from "../../muscular-young-gentleman-pumping-up-biceps.jpg";
import BannerLogo3 from "../../bannerlogo3.jpg";
import { Carousel, Button } from "react-bootstrap";
const TopBanner = () => {
    return (
        <div className="banner-img">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={BannerLogo}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className="carousel-title">
                            <h1 className="banner-title text-sm-start">
                                Love Our Health
                            </h1>
                            <p className="lead carousel-para">
                                IS MORE THAN JUST POSES
                            </p>
                            <Button variant="outline-warning">
                                See Details
                            </Button>{" "}
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={BannerLogo2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <div className="carousel-title">
                            <h1 className="banner-title">
                                Healthy Mind, Healthy Body
                            </h1>
                            <p className="lead">
                                CLASS IS ALSO LIKELY FOCUSED ON GENTLE.
                            </p>
                            <Button variant="outline-light">
                                See Our Outline
                            </Button>{" "}
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={BannerLogo3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <div className="carousel-title">
                            <h1 className="banner-title">Classes And Events</h1>
                            <p className="lead">BY THE EVENTS CALENDER</p>
                            <Button
                                variant="outline-danger"
                                className="carousel-btn"
                            >
                                Know More
                            </Button>{" "}
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default TopBanner;
