import {DrinksData, DipsData, DessertData, PizzaData} from "../Data/Data";

const {makeAutoObservable} = require("mobx");

class Store {
    constructor() {
        makeAutoObservable(this)
    }

    pizzaTitle=''
    pizzaSize=''
    pizzaDips = []
    pizzaDrinks=[]
    dessert = []
    pizza=[]
    pizzaPrice=0
    pizzaTax=0
    pizzaDeliveryCharge=0
    pizzaTotalPrice=0

    pizzaDipsCreate(){
        DipsData.map(item=>this.pizzaDips[item.id]=0)
    }

    pizzaDrinksCreate(){
        DrinksData.map(item=>this.pizzaDrinks[item.id]=0)
    }

    pizzaDessertCreate(){
        DessertData.map(item=>this.dessert[item.id]=0)
    }

    pizzaCreate(){
        PizzaData.map(item=>this.pizza[item.id]=0)
    }

    pizzaPriceCalculation(){
        this.pizzaTax= this.pizzaPrice*10/100;
        this.pizzaDeliveryCharge = this.pizzaPrice*5/100;
        this.pizzaTotalPrice=this.pizzaPrice+this.pizzaTax+this.pizzaDeliveryCharge;
    }

    pizzaItemInitialize(){
        this.pizzaToppings=[]
        this.pizzaTitle=''
        this.pizzaSize=''
        this.pizzaDips = []
        this.pizzaDrinks=[]
        this.dessert = []
        this.pizza=[]
        this.pizzaPrice=0
        this.pizzaTax=0
        this.pizzaDeliveryCharge=0
        this.pizzaTotalPrice=0
        this.pizzaDrinksCreate();
        this.pizzaDipsCreate();
        this.pizzaDessertCreate();
        this.pizzaCreate();
    }
}

export const store = window.store = new Store()