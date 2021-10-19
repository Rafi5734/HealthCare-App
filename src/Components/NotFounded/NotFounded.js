import React from "react";
import "./not-founded.css";
import ErrorImg from "../../404-img.jpg";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const NotFounded = () => {
    return (
        <div>
            <img src={ErrorImg} className="img-fluid" />
            <Link to="/home">
                <Button variant="outline-danger">Go To Home</Button>{" "}
            </Link>
        </div>
    );
};

export default NotFounded;
