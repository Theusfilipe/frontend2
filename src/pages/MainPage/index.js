import React , {useState} from 'react';
import { Link  } from 'react-router-dom';
//import api from '../../services/api';

import businessPic from '../../assets/online-shop.svg';
import clientPic from '../../assets/monitor.svg';
import mainPic from '../../assets/main.svg';
import infoPic from '../../assets/info.svg';
import logo from '../../assets/logo.png';

import './styles.css';



export default function MainPage({ history }){
    const [cep, setCep] = useState('');

    async function handleSubmit(event){
        event.preventDefault();

        
    }

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
            <img className="logoType" src={logo}/> 
            <div className ="content">
                <form onSubmit = {handleSubmit}> 
                    <label htmlFor="email"> CEP *</label>
                    <input 
                    type="text" 
                    id="cep" 
                    placeholder="Seu CEP"
                    value={cep}
                    onChange={event => setCep(event.target.value)}
                    />

                    <button className="btn" type="submit">Entrar</button>
            </form>

            </div>
            

                

            <div className ="content">
                <h1>Em época de recessão aumente seu faturamento:
                    </h1>
                    <p>Oferecemos uma solução digital para o seu empreendimento.
Reduza custos, amplie resultados.</p>
                </div>

                <div className ="content">
                <h1>Um dos negócios inovadores que está apostando em digitalizar o setor é o MERCADO MAIS. </h1>
                <p>A startup surgiu em 2020, com a proposta de fazer as compras no lugar do usuário e entregar na residência de escolha.</p>
                </div>

                <div className ="content">
                <p>O usuário entra na plataforma, coloca seu CEP e consegue identificar estabelecimentos parceiros do MERCADO MAIS, em sua cidade.
Após escolher o supermercado ideal, o usuário monta sua cesta de produtos – cujo preço é o mesmo das gôndolas e finaliza o pedido.

                    </p>
                </div>

                <div className ="content">
                <p>A lista de produtos é então enviada a um “shopper” – pessoa cadastrada na plataforma e treinada para seleção dos itens. 
Quando o carrinho já está montado, o usuário pode acompanhar os steps até momento da entrega.

                    </p>
                </div>

                
                    
            </div>

            

            
        </>
    )
}