import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

const Payment = () => {
  const [email, setEmail] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [step, setStep] = useState(1); // To track the current step (1: address, 2: payment)

  // Address state
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');

  const stripe = useStripe();
  const elements = useElements();

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    setStep(2); // Move to payment step after address is submitted
  };

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    // Create payment method
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: {
        name: nameOnCard,
        email,
        address: {
          line1: address,
          city,
          state,
          postal_code: zipCode,
        },
      },
    });

    if (error) {
      alert(error.message);
      setIsProcessing(false);
    } else {
      alert(`Payment successful! Your address: ${address}, ${city}, ${state} - ${zipCode}`);
      setIsProcessing(false);
    }
  };

  return (
    <div className="container mt-5">
      {step === 1 ? (
        <>
          <h2 className="text-center mb-4">Shipping Address</h2>
          <form onSubmit={handleAddressSubmit} className="d-flex flex-column align-items-center">
            <div className="form-group mb-3" style={{ maxWidth: '400px', width: '100%' }}>
              <input
                type="text"
                className="form-control"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <div className="form-group mb-3" style={{ maxWidth: '400px', width: '100%' }}>
              <input
                type="text"
                className="form-control"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>
            <div className="form-group mb-3" style={{ maxWidth: '400px', width: '100%' }}>
              <input
                type="text"
                className="form-control"
                placeholder="State"
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
              />
            </div>
            <div className="form-group mb-3" style={{ maxWidth: '400px', width: '100%' }}>
              <input
                type="text"
                className="form-control"
                placeholder="ZIP Code"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Proceed to Payment
            </button>
          </form>
        </>
      ) : (
        <>
          <h2 className="text-center mb-4">Payment Information</h2>
          <form onSubmit={handlePaymentSubmit} className="d-flex flex-column align-items-center">
            <div className="form-group mb-3" style={{ maxWidth: '400px', width: '100%' }}>
              <input
                type="text"
                className="form-control"
                placeholder="Name on Card"
                value={nameOnCard}
                onChange={(e) => setNameOnCard(e.target.value)}
                required
              />
            </div>
            <div className="form-group mb-3" style={{ maxWidth: '400px', width: '100%' }}>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group mb-4" style={{ maxWidth: '400px', width: '100%' }}>
              <CardElement />
            </div>
            <button type="submit" className="btn btn-success" disabled={isProcessing}>
              {isProcessing ? 'Processing...' : 'Submit Payment'}
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default Payment;
