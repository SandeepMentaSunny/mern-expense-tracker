import React, { useContext, useEffect } from 'react';

import { GlobalContext } from './../context/GlobalState';
import { Transaction } from './Transaction';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
export const TransactionList = () => {
    const { transactions, getTransactions } = useContext(GlobalContext);
    useEffect(() => {
        getTransactions();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return(
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions && transactions.length === 0 && 
                <SkeletonTheme>
                    <Skeleton circle={true} count={5} height={50}/>
                </SkeletonTheme>}
                {transactions.map(transaction => (<Transaction key={transaction._id} transaction={transaction}/>))}
            </ul>
        </>
    )
}