import React, { useEffect, useState } from 'react';
import review from '../../../images/review1.jpg'
import Testomonials from '../Testomonials/Testomonials';

const Testimonials = () => {
    const [userOpinion, setUserOpinion] = useState([])
    useEffect(() => {
        fetch('http://localhost:5050/testomonials')
            .then(res => res.json())
            .then(data => setUserOpinion(data))

    }, [])
    return (
        <section>
            <div className=" text-center mt-5">
                <h3>Testimonials</h3>
                <h2>What <span style={{color: '#00C3ED'}}>Customers</span> Say</h2>
                <p className="text-socondary">Explore Our Completed Projects! Consectetur adipiscing elitt elit tellus, luctus pulvinar dapibus leoconsectetur luctus nec.</p>
            </div>
            <div className="row d-flex justify-content-center mt-5">
            {
                    userOpinion.map(data => <Testomonials data={data}></Testomonials>)
                }
            </div>

            <hr />
        </section>
    );
};

export default Testimonials;