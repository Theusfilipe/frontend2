import React  from 'react';
import { Link } from 'react-router-dom';
//import api from '../../services/api';

import businessPic from '../../assets/online-shop.svg';
import clientPic from '../../assets/monitor.svg';
import mainPic from '../../assets/main.svg';
import infoPic from '../../assets/info.svg';

import './styles.css';

export default function MainPage({ history }){
    

    return (
        <>
            <div className="topBar">
                <div className="topBarContent">
                    
                
                    <div className="topBarList">
                    <ul>
                    <li><Link to="/"> <img src={mainPic} alt="Main Page"/> Página Incial </Link> </li>
                    <li><Link to="/"> <img src={clientPic} alt="Login"/> Login</Link> </li>
                    <li><Link to="/login"> <img src={businessPic} alt="Login"/> Login para empresas</Link> </li>
                    <li><Link to="/newOwner"> <img src={businessPic} alt="Business Sign in"/> Junte-se à nós</Link></li>
                    <li><Link to="/"> <img src={infoPic} alt="Info"/> Sobre a MercadoMais</Link></li>
                    
                
                    </ul>
                    </div>
                    
                </div>
            </div>

            <div className="container">
            <div className ="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>

                <div className ="content">
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>

                <div className ="content">
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    </p>
                </div>

                <div className ="content">
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                </div>
                    
            </div>

            

            
        </>
    )
}