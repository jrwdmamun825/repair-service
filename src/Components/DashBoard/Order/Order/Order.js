import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-regular-svg-icons'
import SideBar from '../../SideBar/SideBar';

const Order = () => {
    const [loggedInuser, setLoggedInuser] = useContext(UserContext);
    const [order, setOrder] = useState({});
    const [pay, setPay] = useState(null)
    const [shippingData, setShippingData] = useState(null)
    const { _id } = useParams();
    useEffect(() => {
        fetch(`https://sheltered-citadel-15796.herokuapp.com/orderById/${_id}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])


    // const onSubmit = data => {
    //     setShippingData(data)
    //     console.log(data);
    // };
    const handlePaymentSuccess = (paymentId) => {
        const orderDetails = {
            name: loggedInuser.name,
            email: loggedInuser.email,
            paymentId,
            date: new Date(),
            price: order.price,
            orderName: order.serviceName,
            payWith: pay
        }
        console.log(orderDetails);
        fetch('https://sheltered-citadel-15796.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }
    const handlePay = e => {
        const info = { ...pay }
        info[e.target.name] = e.target.value;
        console.log(info);
        setPay(info)

    }
    return (
        <div className="row">
            <div className="col-md-2">
                <SideBar></SideBar>
            </div>
            <div className="col-md-8 mt-5 ms-5">
                <h2 className="mb-3">Confirm Order</h2>


                <div className="card p-5">
                    <form>
                        <div className="form-group">
                            <input className="form-control w-75 m-2 p-2" value={loggedInuser.name} />
                        </div>
                        <div className="form-group">
                            <input className="form-control w-75 mt-2 p-2 ms-2" value={loggedInuser.email} />

                        </div>
                        <div className="form-group">
                            <input className="form-control w-75 mt-2 p-2 ms-2" value={order.serviceName} />
                        </div>
                        {/* <input className="mt-2 ms-2 btn btn-brand" type="submit" value="submit info" required /> */}
                    </form>




                    <div>
                        <div className="mt-5 ms-3">
                            <input onClick={handlePay} type="radio" id="card" name="payment_method" value="visa card" />
                            <label className="ms-2" for="cards">
                                <FontAwesomeIcon icon={faCreditCard} /> <span className="ms-2 text-success">pay with visa</span>
                            </label>
                        </div>

                        <div className="mt-3">
                            <ProcessPayment price={order.price} handlePayment={handlePaymentSuccess}></ProcessPayment>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Order;