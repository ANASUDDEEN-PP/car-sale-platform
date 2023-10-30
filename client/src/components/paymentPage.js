import React, { useState } from 'react';
import './assets/paymentPage.css';
import { Link } from 'react-router-dom';

// Image import
import close from '../Images/close.png';

export default function PaymentPage() {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [selectedCardType, setSelectedCardType] = useState('DISPLAY YOUR CARD TYPE HERE');
  const [selectedBank, setSelectedBank] = useState('DISPAY YOUR BANK NAME HERE');

  // Function to format the card number with spaces
  const formatCardNumber = (value) => {
    const cardNumberWithoutSpaces = value.replace(/\s/g, ''); // Remove existing spaces
    let formattedCardNumber = '';

    for (let i = 0; i < cardNumberWithoutSpaces.length; i += 4) {
      formattedCardNumber += cardNumberWithoutSpaces.slice(i, i + 4);
      if (i + 4 < cardNumberWithoutSpaces.length) {
        formattedCardNumber += ' ';
      }
    }

    return formattedCardNumber;
  };

  return (
    <div className='payment-main-section'>
      <div className='payment-container'>
        <div className='payment-section-one'>
          <div className='creditcard'>
            <h2 className='card-title'>CARD</h2>
            <div className='more-bank-details'>
              <div className='card-holder-details'>
                <p className='card-holder'>Card Holder</p>
                <p className='card-holder-name'>{cardHolderName}</p>
              </div>

              <div className='expiry-detaills'>
                <p className='card-holder'>EXP YY/MM</p>
                <p className='card-holder-name'>{expiry}</p>
              </div>
            </div>
            <h5 className='card-number'>{formatCardNumber(cardNumber)}</h5>
          </div>
          <div className='more-bank-info'>
            <p className='more-card-details-title'>Your Bank</p>
            <p className='bank-name'>{selectedBank}</p>

            <p className='more-card-details-title'>Card Type</p>
            <p className='bank-name'>{selectedCardType}</p>
          </div>
        </div>
        <div className='payment-section-two'>
          <div className='close-btn'>
            <Link to='/individualcars' className='close-link'><img className='close-icon' src={close} alt='close icon' /></Link>
          </div>
          <div className='bank-detail-form'>
            <h2 className='payment-main-title'>CARD DETAILS</h2>
            <form>
              <select
                className="bank-drop"
                required
                value={selectedCardType}
                onChange={(e) => setSelectedCardType(e.target.value)}
              >
                <option>SELECT YOUR CARD TYPE</option>
                <option value="CREDIT CARD">CREDIT CARD</option>
                <option value="DEBIT CARD">DEBIT CARD</option>
              </select>

              <select
                className="bank-drop"
                required
                value={selectedBank}
                onChange={(e) => setSelectedBank(e.target.value)}
              >
                <option>SELECT YOUR BANK</option>
                <option value="FEDERAL BANK">FEDERAL BANK</option>
                <option value="CANARA BANK">CANARA BANK</option>
                <option value="SBI BANK">SBI BANK</option>
                <option value="HDFC BANK">HDFC BANK</option>
              </select>

              <input
                type='text'
                placeholder='CARD NUMBER (14 digit)'
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className='cardNumber'
              />

              <div className='two-field'>
                <input
                  type='text'
                  placeholder='EXPIRY YY/MM'
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  className='div-field'
                />

                <input
                  type='text'
                  placeholder='CVV'
                  className='div-field'
                />
              </div>
              <input
                type='text'
                placeholder='CARD HOLDER NAME'
                value={cardHolderName}
                onChange={(e) => setCardHolderName(e.target.value)}
                className='cardHolder'
              /><br /><br />

              <button className='bank-submit'>PAY NOW</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
