import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

//  importing your AppContext and useContext hook like
// before. Here, you are creating a list, using the map
// function to iterate over the expenses, and displaying
// an ExpenseItem component.

const ExpenseList = () => {
    const { expenses } = useContext(AppContext);

    return (
        <table className='table'>
              <thead className="thead-light">
            <tr>
              <th scope="col">Items</th>
              <th scope="col">Quantity</th>
              <th scope="col">Unit Price</th>
              <th scope="col">Items Price</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
            <tbody>
            {expenses.map((expense) => (
                <ExpenseItem id={expense.id} key={expense.id} name={expense.name} quantity={expense.quantity} unitprice={expense.unitprice} />
            ))}
            </tbody>
        </table>
    );
};

export default ExpenseList;