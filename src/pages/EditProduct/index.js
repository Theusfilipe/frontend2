import React, {useEffect, useState, useMemo} from 'react';
import api from '../../services/api';
import logo from '../../assets/logo.png';
import camera from '../../assets/camera.svg';
import './styles.css';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export default function EditProduct({ history }){
    const [product_id, setProduct_id] =useState('');
    const [name, setName] =useState('');
    const [price, setPrice] =useState('');
    const [type, setType] =useState('');
    const [subType, setSubType] =useState('');
    
    

    const [thumbnail, setThumbnail] = useState(null);
    const typeList = [ "Pães", "Cereais", "Hortifruti", "Laticínios", "Bebidas", "Açougue", "Congelados", "Limpeza", "Higiene", "Biscoitos", "Petshop" ];

    const preview = useMemo(
        () => {
            return thumbnail ? URL.createObjectURL(thumbnail) :null;
        },
        [thumbnail]
    )

    async function handleSubmit( event ){
        event.preventDefault();

        
        
        const data = new FormData();
        const market_id = localStorage.getItem('market');
        data.append('product_id', product_id);
        data.append('thumbnail', thumbnail);
        data.append('name', name);
        data.append('price', price);
        data.append('type', type);
        data.append('subType', subType);
        
        //console.log(type + subType)
        
        const date = new Date();
        data.append('dateEntry',date)

        await api.post('/product_update', data, {
            headers: { market_id }
        })

        console.log(data);

        history.push('/dashboardMarket');
        
    }

    useEffect(()=> {
        async function loadProduct(){
            const productText = localStorage.getItem('product');

            
            
            const product = JSON.parse(productText);

            setProduct_id(product._id);
            setName(product.name);
            setPrice(product.price);
            setType(product.type);
            setSubType(product.subType);
            
        }
        loadProduct();
    }, []);

    return (
        <div className="container">
            <img src={logo} alt="MercadoMais"/>
            <div className="content">
                <form onSubmit={handleSubmit}>
                    <label 
                        id="thumbnail" 
                        style={{backgroundImage: `url(${preview})`}}
                        className={thumbnail ? 'has-thumbnail' : ''}
                    >
                    <input type="file"  onChange={event=> setThumbnail(event.target.files[0])}/>
                    <img src={camera} alt="Select img"/>
                    </label>
                    <label html="name">Produto e marca*</label>
                    <input
                        id="name"
                        placeholder={name}
                        value={name}
                        onChange={ event => setName(event.target.value)}
                    />

                    <label html="price"> Preço * </label>
                    <input
                        id="price"
                        placeholder={price}
                        value={price}
                        onChange={ event => setPrice(event.target.value)}
                    />
                    <label html="type"> Tipo de produto * </label>
            
                    <Dropdown
                        id="type"
                        options={typeList}
                        value={type}
                        placeholder= {"Escolha um tipo"}
                        onChange={value => setType(value.value)}
                    />

            

                    <label html="subtype"> Subtipo do produto * </label>
                    <input
                        id="subtype"
                        placeholder={subType}
                        value={subType}
                        onChange={ event => setSubType(event.target.value)}
                    />
            
                    <button type="submit" className="btn" onClick= {handleSubmit} >Cadastrar</button>
                </form>
            </div>
        </div>
    )
}