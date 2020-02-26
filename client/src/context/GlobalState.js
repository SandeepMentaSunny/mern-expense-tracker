import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import  axios  from 'axios';
//Initial State
const initialState = {
    transactions: [],
    error: null,
    loading: true
}

//Create context
export const GlobalContext = createContext(initialState);

//Provider components
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    
    //Actions
    async function getTransactions(){
        try{
            const response = await axios.get('/api/v1/transactions');
            console.log(response.data.data);
            dispatch({
                type: 'GET_TRANSACTIONS',
                payload: response.data.data
            });
        }catch(err){
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error,
            });
        }
    }

    async function deleteTransaction(id){
        try{
            await axios.delete(`/api/v1/transactions/${id}`);
            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id
            });
        }catch(err){
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error,
            });
        }
    }
    async function addTransaction(transaction){
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        try{
            const res = await axios.post('/api/v1/transactions', transaction, config);
            dispatch({
                type: 'ADD_TRANSACTION',
                payload: res.data.data
            });
        }catch(err){
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error,
            });
        }
    }
    return (<GlobalContext.Provider value={{transactions: state.transactions, deleteTransaction, addTransaction, getTransactions, error: state.error, loading: state.loading}}>
        {children}
    </GlobalContext.Provider>)
};