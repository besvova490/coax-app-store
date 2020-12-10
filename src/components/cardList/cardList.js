import React from "react";

import './cardList.css';

const CardList = () => {
    return (
        <div className="col-md-10 offset-md-1">
            <table className="table table-hover">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Book Title</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>2</td>
                    <td>$134</td>
                    <td>
                        <div className='action-buttons'>
                            <button className='fa-button plus'><i className="fa fa-plus-square-o" aria-hidden="true"/></button>
                            <button className='fa-button minus'><i className="fa fa-minus-square-o" aria-hidden="true"/></button>
                            <button className='fa-button trash'><i className="fa fa-trash-o" aria-hidden="true"/></button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob Thornton</td>
                    <td>1</td>
                    <td>$459</td>
                    <td>
                        <div className='action-buttons'>
                            <button className='fa-button plus'><i className="fa fa-plus-square-o" aria-hidden="true"/></button>
                            <button className='fa-button minus'><i className="fa fa-minus-square-o" aria-hidden="true"/></button>
                            <button className='fa-button trash'><i className="fa fa-trash-o" aria-hidden="true"/></button>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
            <div className='total-amount'><span>Total: $0</span></div>
        </div>
    );
}

export default CardList;