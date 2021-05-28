import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Drinks} from './components/Drinks/Drinks';
import {DrinksData} from './components/Data/Data';
import {Dips} from './components/Dips/Dips';
import {DipsData} from './components/Data/Data';
import {Dessert} from './components/Dessert/Dessert';
import {DessertData} from './components/Data/Data';
import {Pizza} from './components/Pizza/Pizza';
import {PizzaData} from './components/Data/Data';
import {store} from './components/Data/Store';
import {Cart} from './components/Cart/Cart';

const App = () => {
    const [token, setToken] = useState();

   // if(!token) {
    //    return <Login setToken={setToken} />
 //   }
{store.pizzaItemInitialize()}
    return (
        <div>
            <Router>
                <switch>
                <Route path='/Drinks' component={() => (<> <Drinks/> </>)}/>
                <Route path='/Dips' component={() => (<> <Dips/> </>)}/>
                <Route path='/Dessert' component={() => (<> <Dessert/> </>)}/>
                <Route path='/' exact component={() => (<> <Pizza/> </>)}/>
                <Route path='/cart' component={() => (<> <Cart/> </>)}/>
                </switch>
        </Router>
        </div>
    );
}

export default App;