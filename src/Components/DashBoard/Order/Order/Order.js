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
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [shippingData, setShippingData] = useState(null)


    const { _id } = useParams();
    useEffect(() => {
        fetch(`http://localhost:5050/orderById/${_id}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])


    const onSubmit = data => {
        setShippingData(data)
        console.log(data);
    };
    const handlePaymentSuccess = (paymentId) => {
        onSubmit();
        const orderDetails = {
            shipment: shippingData,
            paymentId,
            date: new Date(),
            payWith: pay
        }
        console.log(orderDetails);
        fetch('http://localhost:5050/addOrder', {
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


                <div >
                    <h4 className="text warning">Confirm Information before payment</h4>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <input className="form-control w-75 m-2 p-2" defaultValue={loggedInuser.name} {...register("name")} />
                            {errors.name && <span>This field is required</span>}
                        </div>
                        <div className="form-group">
                            <input className="form-control w-75 mt-2 p-2 ms-2" defaultValue={loggedInuser.email} {...register("email")} />
                            {errors.email && <span>This field is required</span>}
                        </div>
                        <div className="form-group">
                            <input className="form-control w-75 mt-2 p-2 ms-2" defaultValue={order.serviceName} {...register("service")} required />
                            {errors.service && <span>This field is required</span>}
                        </div>
                        <input className="mt-2 ms-2 btn btn-brand" type="submit" value="submit info" required />
                    </form>
                </div>
                <div >
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
    );
};

export default Order;