import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import {CardElement} from '@stripe/react-stripe-js';
import PaymentCardForm from '../PaymentCardForm/PaymentCardForm';


const stripePromise = loadStripe('pk_test_51IeBvzDfrojnW83ssQg9vAgNS5oc34krYw7FP7NASq0lahob2Wp45mTgDaL2WoyllrFFpcH7XOCmgA7xnHe28HZ300atSZzMWQ')

const ProcessPayment = ({ handlePayment,price}) => {
    return (
        <Elements stripe={stripePromise}>
            <PaymentCardForm  price={price} handlePayment={ handlePayment}></PaymentCardForm>
        </Elements>
    );
};

export default ProcessPayment;