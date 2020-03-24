import React, {useState, useMemo} from 'react';
import api from '../../services/api';
import logo from '../../assets/logo.svg';
import camera from '../../assets/camera.svg';
import './styles.css';

export default function NewOwner({ history }){
    const [name, setName] =useState('');
    const [plan, setPlan] =useState('');
    const [address, setAdress] =useState('');
    const [addressNumber, setAddressNumber] =useState('');
    const [cnpj, setCnpj] =useState('');
    const [cep, setCep] =useState('');
    const [city, setCity] =useState('');
    const [state, setState] =useState('');

    const [thumbnail, setThumbnail] = useState(null);


    const preview = useMemo(
        () => {
            return thumbnail ? URL.createObjectURL(thumbnail) :null;
        },
        [thumbnail]
    )

    async function handleSubmit( event ){
        event.preventDefault();

        const data = new FormData();
        const owner_id = localStorage.getItem('owner');

        data.append('thumbnail', thumbnail);
        data.append('name', name);
        data.append('plan', plan);
        data.append('address', address);
        data.append('addressNumber', addressNumber);
        data.append('cnpj', cnpj);
        data.append('cep', cep);
        data.append('city', city);
        data.append('state', state);
        data.append('dateEntry','29/01/2020')

        await api.post('/market_add', data, {
            headers: { owner_id }
        })

        history.push('/dashboardOwner');
    }

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
            <label html="name">EMPRESA *</label>
            <input
                id="name"
                placeholder="O nome do supermercado"
                value={name}
                onChange={ event => setName(event.target.value)}
            />

            <label html="cnpj"> CNPJ * </label>
            <input
                id="cnpj"
                placeholder="CNPJ"
                value={cnpj}
                onChange={ event => setCnpj(event.target.value)}
            />

            <label html="plan">Plano *</label>
            <input
                id="plan"
                placeholder="Qual plano contratado"
                value={plan}
                onChange={ event => setPlan(event.target.value)}
            />
            <label html="address"> CEP * </label>
            <input
                id="cep"
                placeholder="CEP"
                value={cep}
                onChange={ event => setCep(event.target.value)}
            />
            
            <label html="address"> Estado * </label>
            <input
                id="state"
                placeholder="Estado"
                value={state}
                onChange={ event => setState(event.target.value)}
            />
            <label html="address"> Cidade * </label>
            <input
                id="city"
                placeholder="Cidade"
                value={city}
                onChange={ event => setCity(event.target.value)}
            />

            <label html="address"> Endereço * </label>
            <input
                id="address"
                placeholder="Endereço"
                value={address}
                onChange={ event => setAdress(event.target.value)}
            />
            <label html="addressNumber"> Número * </label>
            <input
                id="addressNumber"
                placeholder="Número"
                value={addressNumber}
                onChange={ event => setAddressNumber(event.target.value)}
            />
            
            
            

            <button type="submit"className="btn">Cadastrar</button>


        </form>
        </div>
        </div>
    )
}