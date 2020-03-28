import React , {useState} from 'react';
import api from '../../services/api';
import logo from '../../assets/logo.png';
import monitor from '../../assets/monitor.svg';
import './styles.css';

export default function LoginOwner({ history }){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(event){
        event.preventDefault();

        if(password && email ){
            try{
                const response = await api.post('/owner_session',{ email, password});
                const { _id} = response.data;   

                localStorage.setItem('owner', _id);
                alert("Login feito com sucesso");
                history.push('/dashboardOwner');
            }
            catch (err){

                
                    alert("Erro no login, verifique seus dados");
                
                    
                
            }
            
                
            
        }else{
            alert("Preencha todos os dados");
        }

        
    }

    return (
        <>

            
            <div className="container">
            <img src={logo} className="logoType" alt="MercadoMais"/>
            <img src={monitor}  alt="MercadoMais"/>
                    
                
            
            <div className="content">
            <p> <strong>Mais</strong> clientes, <strong>mais</strong> vendas para sua empresa 
            </p>

            <form onSubmit = {handleSubmit}> 
                <label htmlFor="email"> E-MAIL *</label>
                <input 
                type="email" 
                id="email" 
                placeholder="Seu e-mail"
                value={email}
                onChange={event => setEmail(event.target.value)}
                />
                <label htmlFor="email"> Senha *</label>
                <input 
                type="password" 
                id="password" 
                placeholder="Sua senha"
                value={password}
                onChange={event => setPassword(event.target.value)}
                />

                <button className="btn" type="submit">Entrar</button>
            </form>
            </div>
            </div>
        </>
    )
}