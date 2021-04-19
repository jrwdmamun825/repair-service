import React from 'react';
import './RepairDetails.css'

const RepairDetails = (props) => {
    const { title, description, icon } = props.data;
    return (
        <div className="col-md-3 col-sm-6 offset-md-1 d-flex mt-3">
            <div className="icons">
                <img className="ms-1" src={icon} alt="" />
            </div>
            <div className="ms-4">
                <h5>{title}</h5>
                <p className="w-100">{description}</p>
            </div>

        </div>
    );
};

export default RepairDetails;