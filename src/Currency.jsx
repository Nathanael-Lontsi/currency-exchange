import React from 'react';
import ReactDropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './Currency.css';

export default function Currency() {
  return (
    <div className="Currency">
      <div className="heading">
        <h1>Currency Exchange App</h1>
      </div>
      <div className="container">
        <div className="left">
          <span className="material-symbols-outlined">
            account_balance_wallet
          </span>
          <span>
            Default currency
            <ReactDropdown className="dropdown" />
          </span>
          <div className="Currency-balance">
            <span>
              USD
              <input type="text" placeholder="100" name="usd" id="balance" />
            </span>
            <span>
              EUR
              <input type="text" placeholder="500" name="eur" id="balance" />
            </span>
            <span>
              XAF
              <input type="text" placeholder="10000" name="xaf" id="balance" />
            </span>
            <span>
              CHF
              <input type="text" name="chf" id="balance" />
            </span>
            <p>Total value in USD = 736.667</p>
          </div>
        </div>

        <div className="right">
          <h2>Currency Converter</h2>
          <div className="Exchange-field">
            <h3>Exchange currencies</h3>
            <span>
              Amount
              <input type="text" id="amount" />
            </span>
            <div className="convert">
              <span>from</span>
              <select name="" id="select">
                <option value="">USD</option>
                <option value="">EUR</option>
                <option value="">XAF</option>
                <option value="">CHF</option>
              </select>
              <span className="material-symbols-outlined">compare_arrows</span>
              <span>to</span>
              <select name="" id="select">
                <option value="">EUR</option>
                <option value="">USD</option>
                <option value="">XAF</option>
                <option value="">CHF</option>
              </select>
            </div>
            <button type="button">Convert</button>
          </div>
          <h3>Deposit a currency</h3>
          <div className="Deposit-field">
            <span>
              Amount
              <input type="text" id="amount" />
            </span>
            <span>
              Deposit currency
              <ReactDropdown className="dropdowns" />
            </span>
            <button type="button">Confirm</button>
          </div>
        </div>
      </div>
    </div>
  );
}
