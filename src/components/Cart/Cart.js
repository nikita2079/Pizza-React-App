import './Cart.css';
import {store} from '../Data/Store';
import React from "react";

export const Cart = () => {
    return (
        <div className="cart text-center p-5 font-weight-bold">
            <div className="row">
                <label className="col-sm-6">Price</label>
                <p className="col-sm-6">${store.pizzaPrice}</p>
            </div>
            <div className="row">
                <label className="col-sm-6">Tax</label>
                <p className="col-sm-6">${store.pizzaTax}</p>
            </div>
            <div className="row">
                <label className="col-sm-6">Delivery Charge</label>
                <p className="col-sm-6">${store.pizzaDeliveryCharge}</p>
            </div>
            <hr/>
            <div className="row">
                <label className="col-sm-6">Total</label>
                <p className="col-sm-6">${store.pizzaTotalPrice}</p>
            </div>
        </div>
    );
}