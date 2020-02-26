import React, { Fragment, useContext } from 'react';
import { GlobalContext } from './../context/GlobalState';
import { numberWithCommas } from './../utils/format';

export const Balance = () => {
    const { transactions } = useContext(GlobalContext)
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((a, b) => (a + b), 0).toFixed(2); 
    return(
        <Fragment>
            <h4>YOUR BALANCE</h4>
            <h1>₹{numberWithCommas(total)}</h1>
        </Fragment>
    );
}