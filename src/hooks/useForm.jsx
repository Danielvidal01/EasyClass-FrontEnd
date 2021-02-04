import { useState } from 'react';
const useForm = (callback) =>{
    const [ values, setValues] = useState({}) //setando os valores que vamos receber no formulário 
    const [ loading, setLoading] = useState(false);//setando o loading

    const handleChange = (event) =>{
        const auxValues = {...values};
        auxValues[event.target.name] = event.target.value;
        setValues(auxValues);
    }; //será colocado nos inputs, e vai manipular oque acontece com cada input, nesse caso ele vai receber, e vai enviar os valores para setValues 


    const handleSubmit = callback => event =>{
        event.preventDefault();
        setLoading(true);
        callback();
        setLoading(false);
    } ;
    return [{ values, loading }, handleChange, handleSubmit];
} // vai ser colocado na tag form, e vai tratar do envio, atravez de uma função de callback (pode ser um envio post pelo axios)

export default useForm;