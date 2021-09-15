import './style.css'

const Cards = ({registeredUsers}) => {
    return (
            registeredUsers.length > 0 ? (
                <div className='users__container'>
                {registeredUsers.map(({name, surname, gender, email, password, acceptTerms}, index) => {
                    return (
                    <div key={index} className='user_card'>
                        <div className='info_wrapper'>
                            <p><strong>Nome: </strong>{name}</p>
                        </div>
                        <div className='info_wrapper'>
                            <p><strong>Sobrenome: </strong>{surname}</p>
                        </div>
                        <div className='info_wrapper'>
                            <p><strong>Gênero: </strong>{gender}</p>
                        </div>
                        <div className='info_wrapper'>
                            <p><strong>Email: </strong>{email}</p>
                        </div>
                        <div className='info_wrapper'>
                            <p><strong>Senha: </strong>{password}</p>
                        </div>
                        <div className='info_wrapper'>
                            <p><strong>Termos e condições: </strong>{acceptTerms}</p>
                        </div>
                    </div>
                    )  
                })}
                </div>
                
            ) : (
                <div className='no-content'>
                    <h4>Ops! Não há usuários cadastrados</h4>
                </div>
            )
    )
}

export default Cards;