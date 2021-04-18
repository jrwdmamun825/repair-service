import React from 'react';
import SideBar from '../SideBar/SideBar';

const Book = () => {
    return (
        <div className="row">
            <div className="col-md-2">
                <SideBar></SideBar>
            </div>
            <div className="col-md-8">
                <h3>book page</h3>
            </div>
        </div>
    );
};

export default Book;