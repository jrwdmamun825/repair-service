import React from 'react';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'
const services = [
    { name: "Laptop Repair", link: "/laptopRepair" },
    { name: "iphone Repair", link: "/iphone" },
    { name: "ipad Repair", link: "/ipad" },
    { name: "Tablet Repair", link: "/tablet" },
    { name: "Smarthphone Repair", link: "/smartphone" },
    { name: "Gaming Console Repair", link: "/console" },
]
const ourAddress = [
    {name: "965 East Avenu, Sector 9 Russel Squire, UK" , link: "//google.com/map"},
    {name: "email: info@repairs.com" , link: "gmail.com"},
    {name: "Hours:Mon - Fri (9am - 6pm)" },
   
]
const Footer = () => {
    return (
        <footer  className="mt-5">
            <div className="container">
                <div className="row text-white">
                    <div className="col-md-3 mt-5">
                        <h4 className="text-white">Repair Service</h4>
                        <p className="mt-4 repairs">Restore is a U.S based computer repair service center. Basically we repair all major brands of PCs, Laptops, Smartphone, Tablet, Flash Drive and Gaming Console devices issues.</p>

                    </div> 
                        <FooterCol key={1} menuTitle="Services" menuItems={services}></FooterCol>
                        <FooterCol key={2} menuTitle="Our address" menuItems={ourAddress}/>

                    <div className="col-md-3 mt-5">
                    <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-brand">+966 56 010 0901</button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;