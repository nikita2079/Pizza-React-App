import './Dips.css';
import {DipsItem} from './DipsItem';
import {Link} from 'react-router-dom';

import {DipsData} from "../Data/Data";
import React from "react";

export const Dips = () => {

    return (<div className="Dips">
        <div>
            <h1 className='bg-menu-header'>{'Dips'}</h1>
        </div>
        {DipsData.map(item => <DipsItem key={item.id} index={item.id} title={item.title} imageUrl={item.imageUrl} count={item.count}/>)}
        <footer className="row shadow-sm p-3 mb-5 bg-white rounded">
            <div className="col-sm-4"/>
            <Link to={'/cart'} className="btn-success col-sm-4 text-center">{'cart'}</Link>
        </footer>
  
    </div>);
}
