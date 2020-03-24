import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import logo from '../../assets/logo.svg';
import './styles.css';


import beverages from '../../assets/soda.png';
import meats from '../../assets/meat.png';
import frozen from '../../assets/pizza.png';
import cleaning from '../../assets/clean.png';
import hygiene from '../../assets/soap.png';
import snacks from '../../assets/snack.png';
import petshop from '../../assets/pet-food.png';
import fruits from '../../assets/fruit.png';
import bread from '../../assets/bread.png';
import wheat from '../../assets/wheat.png';
import yogurt from '../../assets/yogurt.png';
import EditProduct from '../EditProduct';

export default function Dashboard({ history }){
    const [purchases, setPurchases] = useState([]);
    const [products, setProducts] = useState([]);

    const types = [
        {
            id: '58694c5g-3da1-481f-bd96-145571e29d72',
            image: bread,
            type:"Pães",
        },
        {
            id: '58694d5g-3da1-481f-bd96-145571e29d72',
            image: wheat,
            type:"Cereais",
        },
        {
            id: '58694b5g-3da1-481f-bd96-145571e29d72',
            image: fruits,
            type:"Hortifruti",
        },
        {
            id: '58694f5g-3da1-481f-bd96-145571e29d72',
            image: yogurt,
            type:"Laticínios",
        },
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          image: beverages,
          type:"Bebidas",
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          image: meats,
          type:"Açougue",
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            image: frozen,
            type:"Congelados",
        },
        {
            id: '58694a5g-3da1-471f-bd96-145571e29d72',
            image: cleaning,
            type:"Limpeza",
        },
        {
            id: '58694a5g-3da1-4k1f-bd96-145571e29d72',
            image: hygiene,
            type:"Higiene",
        },
        {
            id: '58694a5g-3da1-491f-bd96-145571e29d72',
            image: snacks,
            type:"Biscoitos",
        },
        {
            id: '58694a5g-3da1-481f-bd96-145571e29d72',
            image: petshop,
            type:"Petshop",
        },
      ];

    useEffect(()=> {
        async function loadPurchases(){
            const market_id = localStorage.getItem('market');
            const response = await api.get('/purchases', {
                params: { market_id }
            });
            setPurchases(response.data);
        }
        loadPurchases();
    }, []);

    useEffect(()=> {
        async function loadProducts(){
            const market_id = await localStorage.getItem('market');
            
            const response = await api.get('/products', {
                params: { market : market_id , type : "Higiene"}
            });

            setProducts(response.data);
            
        }
        loadProducts();
    }, []);

    function handleFilter(type){
        //console.log(type);
         async function loadProducts(){
            const market = await localStorage.getItem('market');
             const response = await api.get('/products',{
             params : {market : market, type : type}
            });
 
            setProducts(response.data);
         //await AsyncStorage.setItem('market', markets);
         //console.log(response.data);
         }
         loadProducts();
 
    }

    function editProduct( product ){
        async function saveProduct(product){
            await localStorage.setItem('product', JSON.stringify(product))

            
            
         }
        saveProduct(product)

        history.push('/editProduct');
        
    }

    return (
        <>
            <div className="container">
            <div className="content">
                <div className="sideBar">
                    <div className="sideBarContent">
                        <ul className="market-list">
                            {purchases.map(purchase => (
                            <li key ={purchase._id}>
                                <Link to="/dashboardPurchase" onClick={() => localStorage.setItem('purchase', purchase._id)}>
                                    <button className="btnItem">
                            
                                    <strong>{purchase.address}</strong>
                                    <span>{purchase.total}</span>
                                    </button>
                                </Link>
                        
                        
                            </li>
                            ))}
                        </ul>
                        
                        <Link to="/newProduct">
                            <button className="btn">Cadastrar novo produto</button>
                        </Link>
                    </div>
                </div>
                <div className="contentMiddle">
                    <div className="typeList">
                        {types.map(type => (
                            <button className="btnType" onClick={ () => handleFilter(type.type) }> 
                                <img className="imageType"  src={type.image}/>
                            </button>
                        ))}
                    </div>
                </div>
                
            </div>
            
                
            <div className="content">
                    
                <strong> Filtro: Tipos</strong>
                    
                <div className="contentMiddle">
                    <h1><strong> Selecione um dos produtos abaixo para editar</strong></h1>
                    <div className="typeList">
                        {products.map(product => (
                             <button className="btnItem" onClick={ () => editProduct(product) }>
                                <div>
                                    <strong>{`${product.name}: R$ ${product.price}`}</strong>
                                    
                                </div>
                             </button>
                            
                            ))}
                    </div>
                </div>
                    
                    
            </div>
                    
        </div>
            
            
            
        </>
    )
}