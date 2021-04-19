import React from 'react';
import { Link } from 'react-router-dom';

const ServiceData = ({ service }) => {
    const { serviceName, serviceDetails, price, imageUrl, _id } = service;
    return (
        <div className="col-md-3 card shadow ms-2 mt-2">
            <div className="m-auto">
                <img className="img-fluid " src={imageUrl} alt="" />
            </div>
            <div className="card-title m-4 text-center">
                <h4 style={{ color: '#50BAE7' }} className="text-center">{serviceName}</h4>
                <small>{serviceDetails}</small>
                <p className="text-secondary">starting at...</p>
                <h5>${price}</h5>
            </div>
            <div className="w-75 m-auto">
                <Link to={`/order/${_id}`}>
                    <button className="btn btn-brand mb-2 w-100">$ order now</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceData;