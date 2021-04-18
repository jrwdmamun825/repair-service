import React from 'react';
import Review from '../Review/Review';
import SideBar from '../SideBar/SideBar'

const DashBoard = () => {
    return (
        <div className="row">
            <div className="col-md-2">
                <SideBar></SideBar>
            </div>
            <div className="col-md-8">
                <Review></Review>
            </div>
        </div>
    );
};

export default DashBoard;