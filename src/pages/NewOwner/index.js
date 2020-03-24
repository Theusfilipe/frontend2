import React, {useState, useMemo} from 'react';
import api from '../../services/api';
import logo from '../../assets/logo.svg';
import camera from '../../assets/camera.svg';
import './styles.css';

//fazer a verificação de senha
//conferir veracidade dos dados
//

export default function NewOwner({ history }){
    const [name, setName] =useState('');
    const [password, setPassword] =useState('');


    const [phone, setPhone] =useState('');
    const [email, setEmail] =useState('');

    const [cpf, setCpf] =useState('');
    const [rg, setRg] =useState('');
    const [docEmiter, setDocEmiter] =useState('');


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
        //const owner_id = localStorage.getItem('owner');

        data.append('thumbnail', thumbnail);
        data.append('name', name);
        data.append('password', password);

        data.append('rg', rg);
        data.append('docEmiter',docEmiter)
        data.append('cpf', cpf);
        

        data.append('phone', phone);
        data.append('email', email);
        data.append('dateEntry','29/01/2020');

        await api.post('/owner_add', data, {
            headers: {}
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
            <label html="name">NOME COMPLETO *</label>
            <input
                id="name"
                placeholder="Nome completo"
                value={name}
                onChange={ event => setName(event.target.value)}
            />

            

            <label html="password"> Senha * </label>
            <input
                type="password" 
                id="password"
                placeholder=""
                value={password}
                onChange={ event => setPassword(event.target.value)}
            />

            <label html="phone">Telefone para contato *</label>
            <input
                id="phone"
                placeholder="Telefone com DDD"
                value={phone}
                onChange={ event => setPhone(event.target.value)}
            />
            <label html="email">Seu melhor email*</label>
            <input
                id="email"
                placeholder="Email"
                value={email}
                onChange={ event => setEmail(event.target.value)}
            />

            <label html="rg"> RG * </label>
            <input
                id="rg"
                placeholder="Seu número do RG"
                value={rg}
                onChange={ event => setRg(event.target.value)}
            />
            <label html="docEmiter"> Orgão Emissor * </label>
            <input
                id="docEmiter"
                placeholder="Orgão emissor do RG"
                value={rg}
                onChange={ event => setDocEmiter(event.target.value)}
            />
            <label html="cpf"> CPF * </label>
            <input
                id="dpf"
                placeholder="Seu número do CPF"
                value={cpf}
                onChange={ event => setCpf(event.target.value)}
            />

            <button type="submit"className="btn">Cadastrar</button>


        </form>
        </div>
        </div>
    )
}