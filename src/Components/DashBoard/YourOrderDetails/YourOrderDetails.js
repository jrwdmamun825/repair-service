import React from 'react';

const YourOrderDetails = ({order}) => {
    const {name,_id,orderName,email} = order
    return (
        <div className="col-md-4 card mt-5">
            <small>Name: {name}</small>
            <h5>email: {email}</h5>
            <h6>product name: {orderName}</h6>
            <p>order Id: {_id}</p>
            
            
        </div>
    );
};

export default YourOrderDetails;