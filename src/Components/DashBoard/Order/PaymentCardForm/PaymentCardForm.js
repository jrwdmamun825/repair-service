import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';

const PaymentCardForm = ({ handlePayment, price }) => {
    const [paymentError, setPaymentError] = useState(null)
    const [paymentSuccess, setPaymentSuccess] = useState(null)
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }
        const cardElement = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setPaymentError(error.message)
            setPaymentSuccess('')
        } else {
            setPaymentSuccess(paymentMethod.id)
            setPaymentError('')
            handlePayment(paymentMethod.id)
        }
    };

    return (
        <div>
            <form className="" onSubmit={handleSubmit}>
                <h5>hello</h5>
                <div className="form-control w-50 ms-3">
                    <CardElement />
                </div>
                <div className="row ms-2 mt-4">
                    <div className="col-md-4">
                    <p className="text-secondary"> your service charge will be ${price}</p>
                    </div>
                    <div className="col-md-4">
                    <button className="btn btn-brand ms-2" type="submit" disabled={!stripe}>
                        Pay
                    </button>
                    </div>
                </div>
            </form>
            {
                paymentError && <p className="text-danger">{paymentError}</p>
            }
            {
                paymentSuccess && <p className="text-success">your payment successfully done</p>
            }
        </div>
    );
};

export default PaymentCardForm;