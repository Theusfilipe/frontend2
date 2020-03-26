import React , {useEffect, useState} from 'react';
import api from '../../services/api';
import logo from '../../assets/logo.png';
import idPic from '../../assets/id-card.svg';
import './styles.css';

export default function LoginOwner({ history }){
    const [email, setEmail] = useState('');

    const [name, setName] =useState('');
    const [phone, setPhone] =useState('');
    //const [address, setAdress] =useState('');
    const [cpf, setCpf] =useState('');

    const [owner_data, setOwner] = useState([]);

    async function handleSubmit(event){
        event.preventDefault();

        const response = await api.post('/owner_session',{ email, name, phone, cpf}); // /owner edit

        const { _id} = response.data;   

        localStorage.setItem('owner', _id);

        history.push('/dashboardOwner');
    }

    useEffect(()=> {
        async function loadOwner(){
            const owner_id = localStorage.getItem('owner');
            //console.log(owner_id);
            const response = await api.get('/owner', {
                params: { owner_id }
            });
            //console.log(response.data);
            setOwner(response.data[0]);
        }
        loadOwner();
    }, []);

    return (
        <>
            <div className="container">
            <img src={idPic} alt="Edit Profile"/>
            <div className="content">
             
            <p> Editar perfil
            </p>

            <form onSubmit = {handleSubmit}> 
            <label html="name">Nome </label>
            <input
                id="name"
                placeholder={owner_data.name}
                value={name}
                onChange={ event => setName(event.target.value)}
            />

            <label html="cpf"> CPF * </label>
            <input
                id="cpf"
                placeholder={owner_data.cpf}
                value={cpf}
                onChange={ event => setCpf(event.target.value)}
            />

            <label html="phone">Telefone *</label>
            <input
                id="phone"
                placeholder={owner_data.phone}
                value={phone}
                onChange={ event => setPhone(event.target.value)}
            />
            
            

            <button type="submit"className="btn">Concluído</button>
            </form>
            </div>
            </div>
        </>
    )
}