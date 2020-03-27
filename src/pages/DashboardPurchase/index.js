import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

export default function DashboardPurchase(){
    const [products, setProducts] = useState([]);
    const [purchaseSelected, setPurchaseSelected] = useState([]);

    

    useEffect(()=> {
        async function loadPurchases(){
            /*const market_id = localStorage.getItem('market');
            const response = await api.get('/purchases', {
                params: { market_id }
            });
            setPurchases(response.data);
            */
            const purchase_id = localStorage.getItem('purchase');
            const response2 = await api.get('/purchase', {
                headers: { purchase_id }
            });
            setPurchaseSelected(response2.data);

            // ADICIONAR TODOS OS PRODUTOS DAQUELE PURCHASE
            
            const response = await api.get('/product_purchase_index', {
                params: { purchase_id }
            });

            
            
            var product_list = [];
            
            var number_products = 0;

            for (var product_purchase in response.data){
                var product_id = response.data[number_products].product;
                
                var product_quantity = response.data[number_products].quantity;
                const response_product = await api.get('/product', {
                    headers: {product_id
                }});
                
                
                response_product.data[0].quantity = product_quantity;
                product_list.push(response_product.data[0]); //Take the first item on a list of 1 item
                
                number_products++;
            }
            

            /*response.data.map(product_purchase => (
                product_list.push(response.data)
            ));*/

            
            setProducts(product_list);
            
            
            
            
        }
        loadPurchases();
    }, []);

    return (
        <>
            <div className="container">
            
            <div className="content">
            <div className="sideBar">
                <div className="sideBarContent">

                {purchaseSelected.map(val => (
                    <li key ={val._id}>
                        <div className="purchaseContent">
                            <h2>Entrega para:  {val.address}, N° {val.addressNumber}, {val.district}, {val.city} </h2>
                            <strong>Produtos: R${val.total}</strong>
                            <strong>Frete: R${val.freight}</strong>
                            <strong>Total da entrega: R${val.total + val.freight}</strong>
                            
                        </div>
                    </li>

                    
                ))}
                
                    
                <Link to="/newMarket">
                    <button className="btn">Cadastrar novo produto</button>
                </Link>
                </div>
            </div>

            <div>
                <ul className="market-list">
                    {products.map(product => (
                        <li key ={product._id}>

                                <strong>{product.quantity} unidades de {product.name}</strong><h4>R$ {product.price}</h4>
                        </li>
                    ))}
                </ul>
                
            </div>
            </div>
            </div>
            
            
            
        </>
    )
}

/*
<ul className="market-list">
                    {products.map(product => (
                        <li key ={product._id}>
                            <Link to="/" >
                                <button className="btnItem">
                            
                                <strong>{product.name}</strong>
                                
                                </button>
                            </Link>
                        
                        
                        </li>
                    ))}
                    </ul>

*/

