import React, { useContext, useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";

import "./our-services.css";
import Footer from "../Footer/Footer";
import TopBanner from "../Top-Banner/TopBanner";
import { Container } from "react-bootstrap";
import Class from "../Class/Class";
import ClassTrainers from "../ClassTrainers/ClassTrainers";

const OurServices = () => {
    const { handleCart, products } = useAuth();

    return (
        <>
            <div>
                {/* start banner section */}
                <div className="container-fluid">
                    <TopBanner></TopBanner>
                </div>
                {/* end banner section */}

                {/* start services section */}
                <Container>
                    <h1 className="services-title">Our Services</h1>
                </Container>

                {/* All Cards Container */}
                <Container className="all-card-container">
                    <div className="home-card">
                        {products.map((item) => (
                            <div className="card" style={{ width: "18rem" }}>
                                <img
                                    src={item.image}
                                    className="card-img-top img-fluid"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5
                                        className="card-title"
                                        className="card-name"
                                    >
                                        {item.name}
                                    </h5>
                                    <p className="card-text lead">
                                        {item.description}
                                    </p>
                                    <h3 className="lead fw-bold">
                                        Calories Loss: {item.calories}
                                    </h3>

                                    <Link to={`/details/${item?.id}`}>
                                        <button
                                            onClick={() => handleCart(item)}
                                            className="btn btn-primary"
                                        >
                                            See Details
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
                {/* end services section */}

                {/* start Class section */}
                <Class></Class>
                {/* end class section */}

                {/* start ClassTrainers section */}
                <ClassTrainers></ClassTrainers>
                {/* end ClassTrainers section */}

                {/* start Footer section */}
                <Footer></Footer>
                {/* end footer section */}
            </div>
        </>
    );
};

export default OurServices;
