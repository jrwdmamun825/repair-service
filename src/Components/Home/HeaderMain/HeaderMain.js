import React from 'react';
import demo from '../../../images/header.jpg'
import './HeaderMain.css'

const HeaderMain = () => {
    return (
        <main >
                 <div className="row background-img mt-5">
                    <div className="col-md-4 offset-md-1  find d-flex justify-content-center align-items-center-4 mt-5">
                        <div>
                            <h1>Finding solutions</h1>
                            <h4>for your problems</h4>
                            <p className="w-50">For us, the repair work is not just about finding the fault and fixing it, it is about quality parts that are made to last long.</p>
                            <button className="btn btn-brand">Contact Us</button>
                        </div>
                    </div>
                </div>


        </main>
    );
};

export default HeaderMain;