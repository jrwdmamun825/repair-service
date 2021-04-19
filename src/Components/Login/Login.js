import React, { useContext } from 'react';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';


const Login = () => {
    const [loggedInuser, setLoggedInuser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };



    const handleGoogleSign = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const userInfo = { name: displayName, email }
                setLoggedInuser(userInfo)
                history.replace(from);
                console.log(userInfo);

                // ...
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(errorCode, errorMessage, email, credential);
            });
    }


    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    return (
        <div>
            <div className="login-page d-flex justify-content-center align-items-center">
                <div className="card login-area shadow">
                    <div className="text-center mt-3">
                        <h2>Phone Repair Services</h2>
                        <hr />
                    </div>
                    <h5 className="text-center mt-5">Login With</h5>
                    <div className="card-body m-auto ">
                        <button onClick={handleGoogleSign} className="btn btn-brand google-btn">
                            <FontAwesomeIcon className="icon active-icon icons float-start" icon={faGoogle} />
                            continue with google
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Login;