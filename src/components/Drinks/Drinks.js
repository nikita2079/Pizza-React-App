import './Drinks.css';
import {DrinksItem} from './DrinksItem';
import {Link} from 'react-router-dom';

import {DrinksData} from "../Data/Data";
import React from "react";

export const Drinks = () => {

    return (<div className="Drinks">
        <div>
            <h1 className='bg-menu-header'>{'Drinks'}</h1>
        </div>
        {DrinksData.map(item => <DrinksItem key={item.id} index={item.id} title={item.title} imageUrl={item.imageUrl} count={item.count}/>)}
        <footer className="row shadow-sm p-3 mb-5 bg-white rounded">
            <div className="col-sm-4"/>
            <Link to={'/cart'} className="btn-success col-sm-4 text-center">{'cart'}</Link>
        </footer>
  
    </div>);
}