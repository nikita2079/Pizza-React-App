import './Dessert.css';
import {DessertItem} from './DessertItem';
import {Link} from 'react-router-dom';

import {DessertData} from "../Data/Data";
import React from "react";
import {store} from '../Data/Store';

export const Dessert = () => {

    return (<div className="Dessert">
        <div>
            <h1 className='bg-menu-header'>{'Dessert'}</h1>
        </div>
        {DessertData.map(item => <DessertItem key={item.id} index={item.id} title={item.title} imageUrl={item.imageUrl} count={item.count}/>)}
        <footer className="row shadow-sm p-3 mb-5 bg-white rounded">
            <div className="col-sm-4"/>
            <Link to={'/cart'} onClick={()=>store.pizzaPriceCalculation()} className="btn-success col-sm-4 text-center">{'cart'}</Link>
        </footer>
  
    </div>);
}