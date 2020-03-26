import React, {useState, useMemo} from 'react';
import api from '../../services/api';
import logo from '../../assets/logo.png';
import camera from '../../assets/camera.svg';
import './styles.css';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export default function NewProduct({ history }){
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
        
        if(thumbnail && name && price && type && subType){
            const data = new FormData();
            const market_id = localStorage.getItem('market');

            data.append('thumbnail', thumbnail);
            data.append('name', name);
            data.append('price', price);
            data.append('type', type);
            data.append('subType', subType);
        
        
        
            const date = new Date();
            data.append('dateEntry',date)

            await api.post('/product_add', data, {
               headers: { market_id }
            })

        
            alert("Cadastro de produto feito com sucesso");
            history.push('/dashboardMarket');
        }else{
            alert("Faltam informações necessárias para o cadastro do produto"); 
        }
        
    }

    return (
        <div className="container">
            <img src={logo} className="logoType" alt="MercadoMais"/>
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
                        placeholder="O nome do produto"
                        value={name}
                        onChange={ event => setName(event.target.value)}
                    />

                    <label html="price"> Preço * </label>
                    <input
                        id="price"
                        placeholder="Preço do produto"
                        value={price}
                        onChange={ event => setPrice(event.target.value)}
                    />
                    <label html="type"> Tipo de produto * </label>
            
                    <Dropdown
                        id="type"
                        options={typeList}
                        value={"Escolha um tipo"}
                        placeholder= {"Escolha um tipo"}
                        onChange={value => setType(value.value)}
                    />

            

                    <label html="subtype"> Subtipo do produto * </label>
                    <input
                        id="subtype"
                        placeholder="Ex.: Pão de Forma, Baguete, Bisnaga, Pão Doce"
                        value={subType}
                        onChange={ event => setSubType(event.target.value)}
                    />
            
                    <button type="submit" className="btn" onClick= {handleSubmit} >Cadastrar</button>
                </form>
            </div>
        </div>
    )
}