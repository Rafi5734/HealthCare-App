import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./detail.css";
const Details = () => {
    const { detailsId } = useParams();
    const [newData, setData] = useState([]);
    const [details, setDetails] = useState({});
    useEffect(() => {
        fetch("/products.json")
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            });
    }, []);

    useEffect(() => {
        const findItem = newData.find((detail) => detail.id == detailsId);
        setDetails(findItem);
    }, [newData]);

    return (
        <div className="detail-card">
            <div class="card" style={{ width: "18rem" }}>
                <img src={details?.image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{details?.name}</h5>
                    <p class="card-text">{details?.description}</p>
                    <h4 class="card-text">Calorie Loss: {details?.calories}</h4>
                    <p className="rating">
                        Exercise Rate:{" "}
                        <i className="fas fa-star mt-4 mb-4">
                            {details?.rating}
                        </i>
                    </p>
                    <br />

                    <button type="button" class="btn btn-outline-success">
                        Know More.
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Details;
