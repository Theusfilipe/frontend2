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
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/new" component={New}/>
                <Route path="/login"  component={LoginOwner}/>
                <Route path="/dashboardOwner"  component={DashboardOwner}/>
                <Route path="/ownerProfile"  component={OwnerProfile}/>
                <Route path="/dashboardMarket"  component={DashboardMarket}/>
                <Route path="/dashboardPurchase"  component={DashboardPurchase}/>
                <Route path="/newProduct"  component={NewProduct}/>
                <Route path="/editProduct"  component={EditProduct}/>

                <Route path="/loginex"  component={Login}/>

                
                <Route path="/newMarket" component={NewMarket}/>
                <Route path="/newOwner" component={NewOwner}/>
            </Switch>
        </BrowserRouter>
    )

}