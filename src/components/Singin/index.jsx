import React, { useState } from 'react';

export default function Login(){
    const[Values, SetValues] = useState([]);
    
    const handleChange = event =>{
        const ValuesSend = {...Values};
        ValuesSend[event.target.name]=event.target.value;
        SetValues(ValuesSend);
    }
   

    const handleSubmit = event =>{
        try {
            event.preventDefault();
            console.log(Values)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <form onSubmit={handleSubmit} method="post">


            <label htmlFor="FirstName"/>
                FirstName:  
                <input onChange={handleChange} type="FirstName" name="FirstName" id="FirstName" placeholder="FirstName"/>
            
            <label htmlFor="LastName"/>
                LastName:  
                <input onChange={handleChange} type="LastName" name="LastName" id="LastName" placeholder="LastName"/>
            <button type='submit' className="buttonStyle">Enviar</button>
        </form>
    )
}