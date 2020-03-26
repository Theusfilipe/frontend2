import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import logo from '../../assets/logo.png';

import './styles.css';

export default function DashboardOwner(){
    const [markets, setMarkets] = useState([]);

    useEffect(()=> {
        async function loadMarkets(){
            const owner_id = localStorage.getItem('owner');
           
            const response = await api.get('/owner_dashboard', {
                headers: { owner_id }
            });
            console.log(response.data);
            setMarkets(response.data);
        }
        loadMarkets();
    }, []);

    return (
        <>
            <div className="container">
            <img src={logo} className="logoType" alt="MercadoMais"/>
            <div className="content">
            <div className="sideBar">
                <div className="sideBarContent">
                    <ul className="market-list">
                    {markets.map(market => (
                        <li key ={market._id}>
                            <Link to="/dashboardMarket" onClick={() => localStorage.setItem('market', market._id)}>
                                <button className="btnItem">
                                <header style={{ backgroundImage : `url(${market.thumbnail_url})` }}  />
                                <strong>{market.name}</strong>
                                <span>{market.cnpj }</span>
                                </button>
                            </Link>
                        </li>
                    ))}
                    </ul>
                    <Link to="/newMarket">
                        <button className="btn">Cadastrar novo mercado</button>
                    </Link>
                    
                    <Link to="/ownerProfile">
                         
                        <button className="btn"> Editar Perfil</button>
                    </Link>
                </div>
            </div>
            </div>
            </div>
            
        </>
    )
}

//