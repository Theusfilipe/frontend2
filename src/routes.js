import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from './pages/Login';
import LoginOwner from './pages/LoginOwner';
import Dashboard from './pages/Dashboard';
import DashboardOwner from './pages/DashboardOwner';
import New from './pages/New';
import NewMarket from './pages/NewMarket';
import NewProduct from './pages/NewProduct';
import EditProduct from './pages/EditProduct';
import NewOwner from './pages/NewOwner';
import DashboardMarket from './pages/DashboardMarket';
import DashboardPurchase from './pages/DashboardPurchase';
import OwnerProfile from './pages/OwnerProfile';
import MainPage from './pages/MainPage';


export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={MainPage}/>
                

                
            </Switch>
        </BrowserRouter>
    )

}