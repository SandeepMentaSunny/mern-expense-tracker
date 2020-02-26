import React, { useState, useContext } from 'react';
import { GlobalContext } from './../context/GlobalState';
import { Input } from './Input';
export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [ amount, setAmount ] = useState(0);
    const { addTransaction } = useContext(GlobalContext);

    const onSubmitForm = (e) => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }
        addTransaction(newTransaction);
    }
    return(
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmitForm}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" id="text" placeholder="Enter text..." value={text} onChange={(e) => setText(e.target.value)}/>
                </div>
                {/* <Input type="text" placeholder="Enter text..." value={text} htmlFor="text" label="Text" onInputChange={setText(e)}/> */}
                <div className="form-control">
                    <label htmlFor="amount">Amount<br /> (negative-expence, positive-income)</label>
                    <input type="number" id="amount" placeholder="Enter amount..." value={amount} onChange={(e) => setAmount(e.target.value)} />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    );
}