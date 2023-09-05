import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

//  importing AppContext from your Context. Import the useContext hook,
// and pass your AppContext to it - this is how a component connects
// to the context in order to get values from global state. The Bootstrap
// Alert classes are used to give a nice gray background by adding some
// text and hard coding a value.

const CartValue = () => {
    const { expenses, Location } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += (item.unitprice * item.quantity));
    }, 0);

    return (
        <div className='alert alert-primary'>
            <span>Cart Value: {Location}{totalExpenses}</span>
        </div>
    );
};

export default CartValue;