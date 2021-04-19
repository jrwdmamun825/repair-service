import React, { useEffect, useState } from 'react';
import SideBar from '../../SideBar/SideBar';

const OrderList = () => {
    const [orderData, setOrderData] = useState([])
    useEffect(() => {
        fetch('https://sheltered-citadel-15796.herokuapp.com/orderLists')
            .then(res => res.json())
            .then(data => {
                setOrderData(data)
                console.log(data)
            })
    }, [])
    return (
        <div className="row">
            <div className="col-md-2">
                <SideBar></SideBar>
            </div>
            <div className="col-md-10">
                <table className="table table-borderless">
                    <thead className="bg-light">
                        <tr>
                            <th className="text-secondary text-left" scope="col">Sr No</th>
                            <th className="text-secondary" scope="col">Name</th>
                            <th className="text-secondary" scope="col">Email Id</th>
                            <th className="text-secondary" scope="col">Service</th>
                            <th className="text-secondary" scope="col">Pay with</th>
                            <th className="text-secondary" scope="col">Status</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            orderData.map((orders, index) =>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{orders.name}</td>
                                    <td>{orders.email}</td>
                                    <td>{orders.orderName}</td>
                                    <td>{orders.payWith.payment_method}</td>
                                    <td>
                                        <div class="dropdown">
                                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                status
                                            </button>
                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </td>
                                </tr>


                            )
                        }

                    </tbody>

                </table>
                <hr />

            </div>
        </div>
    );
};

export default OrderList;