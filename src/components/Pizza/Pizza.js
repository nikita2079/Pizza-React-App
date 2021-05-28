import './Pizza.css';
import {PizzaItem} from './PizzaItem';
import {Link} from 'react-router-dom';

import {PizzaData} from "../Data/Data";
import React from "react";

export const Pizza = () => {

    return (<div className="Pizza">
        <div>
            <h1 className='bg-menu-header'>{'Pizza'}</h1>
        </div>
        {PizzaData.map(item => <PizzaItem key={item.id} index={item.id} title={item.title} imageUrl={item.imageUrl} count={item.count}/>)}
        <footer className="row shadow-sm p-3 mb-5 bg-white rounded">
            <div className="col-sm-4"/>
            <Link to={'/cart'} className="btn-success col-sm-4 text-center">{'cart'}</Link>
        </footer>
  
    </div>);
}