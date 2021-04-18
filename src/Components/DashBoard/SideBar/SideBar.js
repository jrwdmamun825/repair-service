import React from 'react';
import {faHome,faBook,faStar, faSignOutAlt,faShoppingBasket,faPlus,faUserCog,faTasks} from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SideBar.css';
import logo from '../../../logo/logo-header.png'

const SideBar = () => {
    return (
        <div className="sidebar d-flex flex-column p-2" style={{ height: "100vh" }}>
            <img src={logo} alt=""/>
            <ul className="list-unstyled">
                <li className="p-3">
                    <Link to="/" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faHome} /> <span className="ms-2">Home</span>
                    </Link>
                </li>
                <li className="p-3">
                    <Link to="/book" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faBook} /> <span className="ms-3">book</span>
                    </Link>
                </li>
                <li className="p-3">
                    <Link to="/dashBoard/review" className="text-white text-decoration-none">
                        <FontAwesomeIcon  icon={faStar} /> <span className="ms-2">Review</span>
                    </Link>
                </li>
                <li className="p-3">
                    <Link to="/orderList" className="text-white text-decoration-none">
                        <FontAwesomeIcon  icon={faShoppingBasket} /> <span className="ms-2">Order List</span>
                    </Link>
                </li>
                <li className="p-3">
                    <Link to="/addService" className="text-white text-decoration-none">
                        <FontAwesomeIcon  icon={faPlus} /> <span className="ms-2">Add services</span>
                    </Link>
                </li>
                <li className="p-3">
                    <Link to="/makeAdmin" className="text-white text-decoration-none">
                        <FontAwesomeIcon  icon={faUserCog} /> <span className="ms-2">Make admin</span>
                    </Link>
                </li>
                <li className="p-3">
                    <Link to="/manageService" className="text-white text-decoration-none">
                        <FontAwesomeIcon  icon={faTasks} /> <span className="ms-2">Manage Service</span>
                    </Link>
                </li>
            </ul>
            <div className="p-3">
                <Link to="/" className="text-white text-decoration-none"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default SideBar;