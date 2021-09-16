import './style.css';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";
import { useState } from 'react';

const Form = ({registeredUsers ,setRegisteredUsers}) => {
    

    const formSchema = yup.object().shape({
        name: yup.string().required('Nome é um campo obrigatório').test('length', 'Precisa conter no mínimo 4 caracteres', str => str.length >= 4),
        surname: yup.string().required("Sobrenome é um campo obrigatório"),
        email: yup.string().email("Email inválido").required("Email é um campo obrigatório"),
        password: yup.string().required("Senha é um campo obrigatório").test('length', 'Mínimo de 8 caracteres', str => str.length >= 8),
        passwordcheck : yup.string().required("Senha é um campo obrigatório").test('length', 'Mínimo de 8 caracteres', str => str.length >= 8).oneOf([yup.ref('password'), ], 'Senhas não coincidem'),
        gender: yup.string().required(),
        acceptTerms: yup.string().required("É preciso aceitar o contrato").test('boolean', 'Termos de uso obrigatório', str=> str === 'true'),
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(formSchema)
    });

    const [inputField, setInputField] = useState({name:'', surname:'', email:'', password:'', passwordCheck:'', gender:'Masculino', acceptTerms:false});

    const handleOnSubmit = data => {
        let newUser = {
            name: data.name,
            surname: data.surname,
            gender: data.gender,
            email: data.email,
            password: data.password,
            acceptTerms : data.acceptTerms,
            
        }
         setRegisteredUsers([...registeredUsers, newUser])
         setInputField({name:'', surname:'', email:'', password:'', passwordCheck:'', gender:'Masculino', acceptTerms:false})
    }

    return (
        
        <div className='form__container'>
            <form action="" onSubmit={handleSubmit(handleOnSubmit)}>
                <input  placeholder='Nome' {...register('name')} onChange={e=> setInputField({...inputField, name: e.target.value})} value={inputField.name}/>
                {errors.name?.message}
                <input  placeholder='Sobrenome' {...register('surname')} onChange={e=> setInputField({...inputField, surname: e.target.value})} value={inputField.surname}/>
                {errors.surname?.message}
                <input  placeholder='Seu_email@email.com' autoComplete='on' {...register('email')} onChange={e=> setInputField({...inputField, email: e.target.value})} value={inputField.email}/>
                {errors.email?.message}
                <input  type='password' placeholder='Senha' autoComplete='new-password' {...register('password')} onChange={e=> setInputField({...inputField, password: e.target.value})} value={inputField.password} />
                {errors.password?.message}
                <input  type='password' placeholder='Confirmar Senha' autoComplete='new-password' {...register('passwordcheck')} onChange={e=> setInputField({...inputField, passwordCheck: e.target.value})} value={inputField.passwordCheck}/>
                {errors.passwordcheck?.message}
                <select name="" id="" {...register('gender')} onChange={e=> setInputField({...inputField, gender: e.target.value})} value={inputField.gender}>
                    <option value="Masculino">Masculino</option>
                    <option value="Feminino">Feminino</option>
                </select>
                <div id='terms_content'>
                    <input type="checkbox" id='accept' {...register('acceptTerms')} onChange={e=> setInputField({...inputField, acceptTerms: e.target.checked})} value={inputField.acceptTerms}/>
                    <label htmlFor="accept">Eu aceito os termos de uso</label>
                </div>
                {errors.acceptTerms?.message}
                <button type='submit'>Enviar</button>
            </form>
        </div>

      );
}

export default Form;