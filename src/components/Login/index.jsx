import React from 'react';
import './styles.css';
import useForm from '../../hooks/useForm';
// import axios from 'axios';
import {Link} from 'react-router-dom';



export default function Login(){
    const [{values,loading},handleChange,handleSubmit] = useForm();

    const Enviar = async () =>{
        try {
           console.log(values)
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div className="formbox">
            <form onSubmit={handleSubmit(Enviar)} method="post">
                <h2>Login</h2>
            <label htmlFor="Email"/>
                Email:  
                <input onChange={handleChange} type="email" name="Email" id="Email" placeholder="email@email.com"/>
            
            <label htmlFor="Password"/>
                Senha:  
                <input onChange={handleChange} type="password" name="Password" id="Password" placeholder="*********"/>
            <button type="submit" className="buttonStyle">{loading ? "enviando...":"enviar"}</button>
            </form>
            <div className="cadastro">
            <p>não é cadastrado?</p>
            <Link to="/Cadastro" className="buttonStyle">Cadastrar</Link>
            </div>
        </div>
    )
}