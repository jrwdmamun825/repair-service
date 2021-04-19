import React, { useEffect, useState } from 'react';
import ServiceData from '../ServiceData/ServiceData';


const Services = () => {
    const [services,setServices] = useState([])
    useEffect(() => {
        fetch('https://sheltered-citadel-15796.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <section style={{ background: '#152F45' }} className="m-3 p-3">
            <h2 className="text-center mb-2 text-white">Our services</h2>
            <h3 className="text-center text-white mb-5">WE OFFER A FULL RANGE OF SMARTPHONE SERVICES</h3>
         

            <div className="row d-flex justify-content-center">
                
                {
                    services.map(service => <ServiceData service={service}></ServiceData>)
                }

            </div>
        </section>
    );
};

export default Services;