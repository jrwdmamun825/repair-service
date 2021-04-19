import React, { useContext, useEffect, useState } from 'react';
import SideBar from '../SideBar/SideBar';
import { UserContext } from '../../../App';
import YourOrderDetails from '../YourOrderDetails/YourOrderDetails';
const YourOrder = () => {
    const [loggedInuser, setLoggedInuser] = useContext(UserContext);
    const [yourOrder, setYourOrder] = useState([]);
    useEffect(() => {
        fetch(`https://sheltered-citadel-15796.herokuapp.com/yourOrder?email=${loggedInuser.email}`)
            .then(res => res.json())
            .then(data => setYourOrder(data))
    }, [])
    return (
        <div className="row">
            <div className="col-md-2">
                <SideBar></SideBar>
            </div>
            <div className="col-md-10">
                <div className="row">
                    {
                        yourOrder.map(orders => <YourOrderDetails order={orders}></YourOrderDetails>)
                    }
                </div>

            </div>

        </div>
    );
};

export default YourOrder;