import React from 'react';

const TestomonialsData = (props) => {
    const { name, imageUrl, description, serviceName } = props.data;
    return (
        <div className="col-md-3 card shadow ms-1 p-3">
            <div className="m-auto">
                <img src={imageUrl} alt="" />
            </div>
            <div className="card-body mt-2 text-center">
                <h3 style={{ color: '#003366' }}>{serviceName}</h3>
                <p className="text-secondary">{description}</p>
                <h6>{name}</h6>
            </div>
        </div>
    );
};

export default TestomonialsData;

