import React from "react";

import './sideBar.css'

const SideBar = ({onChangeInput, getByCategory, sortedByPrice}) => {
    return (
        <div className="sidebar-wrapper col-md-2">
            <div className="sidebar-div sidebar-search-div">
                <input className="sidebar-search-input" type="text" placeholder="Sms search" onChange={onChangeInput}/>
                <i className="fa fa-search" aria-hidden="true"/>
            </div>
            <div className="sidebar-div sidebar-filter-div"><h6>Sorting</h6>
                <div className='sorting-div'>
                    <ul className='sorting-ul'>
                        <li onClick={() => sortedByPrice()} key='price-sorting'>
                            <span>sort by price</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="sidebar-div sidebar-categories-div"><h6>Categories</h6>
                <div className='categories-div'>
                    <ul className='categories-list'>
                        <li onClick={() => getByCategory({q: 'Programming'})} className='categories-item' key={'Programming'}>Programming</li>
                        <li onClick={() => getByCategory({q: 'History'})} className='categories-item' key={'History'}>History</li>
                        <li onClick={() => getByCategory({q: 'Flowers'})} className='categories-item' key={'Flowers'}>Flowers</li>
                        <li onClick={() => getByCategory({q: 'Psychology'})} className='categories-item' key={'Psychology'}>Psychology</li>
                        <li onClick={() => getByCategory({q: 'Economics'})} className='categories-item' key={'Economics'}>Economics</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SideBar