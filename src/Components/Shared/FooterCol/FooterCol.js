import React from 'react';
import { Link } from 'react-router-dom';
import './FooterCol.css'


const FooterCol = (props) => {
    return (
        <div className="col-md-3 mt-5">
            <h6 className="text-white ms-2">{props.menuTitle}</h6>
            <ul className="list-unstyled mt-4">
                 {
                     props.menuItems.map((item) => <li className="p-2"><Link  style={{color: '#f3f2f8ab',fontWeight: 400}} to={item.link} className=" text-decoration-none">{item.name}</Link></li>)
                 }
            </ul>
            
        </div>
    );
};

export default FooterCol;